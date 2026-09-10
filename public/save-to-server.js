(function () {
  "use strict";

  // The client's built-in "Save to Cloud"/"Open from Cloud" actions
  // (gravit-cloud.save-as / .save / .open) are never registered by this
  // bundle, so gDesigner.executeAction() throws immediately instead of
  // doing anything. This file intercepts those three action ids and
  // reimplements them against our own server-side storage
  // (routes/files.js), reusing the app's real document serialization by
  // handing doc.store() a small object that fulfils the same
  // getExtension()/write() contract every real storage backend implements.

  function showToast(message, isError) {
    let el = document.getElementById("save-to-server-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "save-to-server-toast";
      el.style.cssText = [
        "position:fixed",
        "top:16px",
        "right:16px",
        "z-index:2147483647",
        "padding:10px 16px",
        "border-radius:6px",
        "font:13px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif",
        "color:#fff",
        "box-shadow:0 2px 8px rgba(0,0,0,0.3)",
        "transition:opacity 0.2s ease",
        "max-width:360px",
      ].join(";");
      document.body.appendChild(el);
    }
    el.style.background = isError ? "#c0392b" : "#27ae60";
    el.textContent = message;
    el.style.opacity = "1";
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(
      () => {
        el.style.opacity = "0";
      },
      isError ? 6000 : 3000,
    );
  }

  // Small reusable modal shell — an overlay + centered box — used by both
  // the name prompt and the browse dialog below. Resolves with whatever
  // the caller passes to `close()`; resolves null on backdrop click.
  function openModal(contentBuilder) {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.style.cssText = [
        "position:fixed",
        "inset:0",
        "background:rgba(0,0,0,0.5)",
        "z-index:2147483646",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "font:13px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif",
      ].join(";");
      const box = document.createElement("div");
      box.style.cssText = [
        "background:#2b2b2b",
        "color:#eee",
        "border-radius:8px",
        "padding:20px",
        "min-width:320px",
        "max-width:480px",
        "max-height:80vh",
        "overflow:auto",
        "box-shadow:0 4px 24px rgba(0,0,0,0.4)",
      ].join(";");
      overlay.appendChild(box);
      document.body.appendChild(overlay);

      // ctx.onClose lets content register cleanup (e.g. aborting an
      // in-flight request) that runs when the modal is dismissed.
      const ctx = { onClose: null };
      function close(result) {
        if (typeof ctx.onClose === "function") {
          try {
            ctx.onClose();
          } catch (err) {
            console.warn("[save-to-server] modal onClose threw", err);
          }
        }
        overlay.remove();
        resolve(result);
      }
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close(null);
      });
      contentBuilder(box, close, ctx);
    });
  }

  function styledButton(label, primary) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.style.cssText = primary
      ? "padding:7px 14px;border-radius:4px;border:none;background:#2f80ed;color:#fff;cursor:pointer;"
      : "padding:7px 14px;border-radius:4px;border:1px solid #555;background:transparent;color:#eee;cursor:pointer;";
    return btn;
  }

  // Prompts for a filename, defaulting to `defaultName`. Resolves the
  // chosen name, or null if cancelled.
  function promptForName(defaultName, title) {
    return openModal((box, close) => {
      const h = document.createElement("div");
      h.textContent = title || "Save to Server";
      h.style.cssText = "font-size:15px;font-weight:600;margin-bottom:12px;";

      const input = document.createElement("input");
      input.type = "text";
      input.value = defaultName || "Untitled";
      input.style.cssText =
        "width:100%;box-sizing:border-box;padding:8px;border-radius:4px;border:1px solid #555;background:#1e1e1e;color:#eee;font-size:13px;margin-bottom:16px;";

      const buttons = document.createElement("div");
      buttons.style.cssText = "display:flex;justify-content:flex-end;gap:8px;";
      const cancelBtn = styledButton("Cancel", false);
      const okBtn = styledButton("Save", true);
      cancelBtn.onclick = () => close(null);
      okBtn.onclick = () => close(input.value.trim() || defaultName || "Untitled");
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") okBtn.click();
        if (e.key === "Escape") cancelBtn.click();
      });
      buttons.appendChild(cancelBtn);
      buttons.appendChild(okBtn);

      box.appendChild(h);
      box.appendChild(input);
      box.appendChild(buttons);
      setTimeout(() => {
        input.focus();
        input.select();
      }, 0);
    });
  }

  // A destructive-action confirmation. Resolves true only on an explicit
  // click of the confirm button; backdrop dismissal resolves null.
  function confirmDialog(message, confirmLabel) {
    return openModal((box, close) => {
      const text = document.createElement("div");
      text.textContent = message;
      text.style.cssText = "margin-bottom:18px;line-height:1.5;";

      const buttons = document.createElement("div");
      buttons.style.cssText = "display:flex;justify-content:flex-end;gap:8px;";
      const cancelBtn = styledButton("Cancel", false);
      const okBtn = styledButton(confirmLabel || "Confirm", true);
      okBtn.style.background = "#c0392b"; // destructive
      cancelBtn.onclick = () => close(false);
      okBtn.onclick = () => close(true);

      buttons.appendChild(cancelBtn);
      buttons.appendChild(okBtn);
      box.appendChild(text);
      box.appendChild(buttons);
      setTimeout(() => cancelBtn.focus(), 0); // default to the safe option
    });
  }

  // Lists server files (GET /file) with live filtering, and lets the user
  // open or delete one.
  function browseServerFiles() {
    return openModal(async (box, close, ctx) => {
      box.style.minWidth = "520px";
      const h = document.createElement("div");
      h.textContent = "Open from Server";
      h.style.cssText = "font-size:15px;font-weight:600;margin-bottom:12px;";
      box.appendChild(h);

      const search = document.createElement("input");
      search.type = "text";
      search.placeholder = "Search files...";
      search.style.cssText =
        "width:100%;box-sizing:border-box;padding:8px;border-radius:4px;border:1px solid #555;background:#1e1e1e;color:#eee;font-size:13px;margin-bottom:12px;";
      search.style.display = "none"; // shown once the listing arrives
      box.appendChild(search);

      const list = document.createElement("div");
      list.textContent = "Loading…";
      list.style.cssText = "max-height:50vh;overflow:auto;";
      box.appendChild(list);

      const footer = document.createElement("div");
      footer.style.cssText = "display:flex;justify-content:flex-end;margin-top:12px;";
      const closeBtn = styledButton("Close", false);
      closeBtn.onclick = () => close(null);
      footer.appendChild(closeBtn);
      box.appendChild(footer);

      // Abort the listing if the dialog is closed, and give up after a
      // while rather than sitting on "Loading..." forever. Opening this
      // repeatedly used to leave each previous fetch running against the
      // browser's per-origin connection limit; now closing cancels.
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      ctx.onClose = () => controller.abort();

      let files;
      const startedAt = Date.now();
      try {
        files = await fetch("/file", { signal: controller.signal }).then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        });
        const elapsed = Date.now() - startedAt;
        if (elapsed > 1000) {
          console.warn(`[save-to-server] listing took ${elapsed}ms`);
        }
      } catch (err) {
        if (controller.signal.aborted && !document.body.contains(box)) return;
        list.textContent = "";
        const msg = document.createElement("div");
        msg.style.cssText = "margin-bottom:12px;";
        msg.textContent = controller.signal.aborted
          ? "Timed out listing server files."
          : `Failed to load files: ${err && err.message ? err.message : err}`;
        const retry = styledButton("Retry", true);
        retry.onclick = () => {
          close(null);
          browseServerFiles();
        };
        list.appendChild(msg);
        list.appendChild(retry);
        return;
      } finally {
        clearTimeout(timeout);
      }

      files = (files || []).filter((f) => !f.trashed);
      files.sort(
        (a, b) =>
          new Date(b.updated || b.modifiedTime || 0) -
          new Date(a.updated || a.modifiedTime || 0),
      );

      function buildRow(file) {
        const name = file.name || "Untitled";
        const row = document.createElement("div");
        row.style.cssText =
          "padding:8px 10px;border-radius:4px;cursor:pointer;display:flex;align-items:center;gap:12px;";
        row.onmouseenter = () => {
          row.style.background = "rgba(255,255,255,0.08)";
        };
        row.onmouseleave = () => {
          row.style.background = "transparent";
        };

        const nameEl = document.createElement("div");
        nameEl.textContent = name;
        nameEl.style.cssText = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";

        const dateEl = document.createElement("div");
        dateEl.style.cssText = "color:#999;font-size:12px;white-space:nowrap;";
        const when = file.updated || file.modifiedTime;
        dateEl.textContent = when ? new Date(when).toLocaleString() : "";

        const del = document.createElement("button");
        del.type = "button";
        del.title = `Delete "${name}" from the server`;
        del.textContent = "Delete";
        del.style.cssText =
          "flex:none;padding:4px 10px;border-radius:4px;border:1px solid #666;background:transparent;color:#ddd;font-size:12px;cursor:pointer;";
        del.onmouseenter = () => {
          del.style.background = "#c0392b";
          del.style.borderColor = "#c0392b";
          del.style.color = "#fff";
        };
        del.onmouseleave = () => {
          del.style.background = "transparent";
          del.style.borderColor = "#666";
          del.style.color = "#ddd";
        };
        del.onclick = async (e) => {
          // Don't let the click fall through to the row and open the file.
          e.stopPropagation();
          const confirmed = await confirmDialog(
            `Delete "${name}" from the server? This permanently removes the file and cannot be undone.`,
            "Delete",
          );
          if (confirmed !== true) return;
          try {
            const res = await fetch(`/file/${file.id}`, { method: "DELETE" });
            // 404 means it is already gone, which is the desired end state.
            if (!res.ok && res.status !== 404) throw new Error(`HTTP ${res.status}`);
            files = files.filter((f) => f.id !== file.id);
            renderList();
            showToast(`Deleted "${name}" from the server`);
          } catch (err) {
            showToast(
              `Couldn't delete "${name}": ${err && err.message ? err.message : err}`,
              true,
            );
          }
        };

        row.appendChild(nameEl);
        row.appendChild(dateEl);
        row.appendChild(del);
        row.onclick = () => {
          close(null);
          openServerFile(file);
        };
        return row;
      }

      function renderList() {
        const query = search.value.trim().toLowerCase();
        list.innerHTML = "";
        if (!files.length) {
          search.style.display = "none";
          list.textContent = "No files saved to the server yet.";
          return;
        }
        search.style.display = "";
        const shown = query
          ? files.filter((f) => (f.name || "").toLowerCase().includes(query))
          : files;
        if (!shown.length) {
          list.textContent = `No files match "${search.value.trim()}".`;
          return;
        }
        shown.forEach((file) => list.appendChild(buildRow(file)));
      }

      search.addEventListener("input", renderList);
      renderList();
      if (files.length) search.focus();
    });
  }

  // Opening a file: gDesigner.openDocument() is the same call "Open
  // Recent" uses internally (see its click handler in the bundle), and
  // that path is proven to work end to end, including picking up the
  // write() prototype patch below for re-saving afterwards. We prefer
  // reusing an existing Recent Files entry for this id when there is one;
  // for a file never opened in this browser/session before there's no
  // such entry, so this falls back to a minimally-shaped descriptor —
  // the one part of this feature without a confirmed-working precedent.
  function openServerFile(file) {
    try {
      const recents =
        (window.gContainer &&
          window.gContainer.getRecentDocuments &&
          window.gContainer.getRecentDocuments()) ||
        [];
      const match = recents.find((r) => {
        try {
          return (
            (r.getId && r.getId() === file.id) ||
            r.id === file.id ||
            (r.getFile && r.getFile() && r.getFile().id === file.id)
          );
        } catch (err) {
          return false;
        }
      });
      if (match) {
        window.gDesigner.openDocument(match);
        return;
      }
    } catch (err) {
      console.warn("[save-to-server] recent-files lookup failed", err);
    }
    try {
      window.gDesigner.openDocument({
        id: file.id,
        getId: () => file.id,
        getUniqueId: () => file.id,
        getName: () => file.name,
        getExtension: () => "GVDESIGN",
        getFile: () => ({ id: file.id }),
      });
    } catch (err) {
      console.error("[save-to-server] open failed", err);
      showToast(
        `Couldn't open "${file.name}": ${err && err.message ? err.message : err}`,
        true,
      );
    }
  }

  // Shared by the fresh-save path (fake storage item, below) and the
  // patched real storage item's write() (further down): PUT the bytes to
  // our own simple content endpoint, then mark the file visible/current.
  function uploadBytesToServer(id, bytes) {
    return fetch(`/file/${id}/content`, {
      method: "PUT",
      headers: { "Content-Type": "application/gravit+design" },
      body: bytes,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Upload failed: HTTP ${res.status}`);
        return fetch(`/file/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ trashed: false }),
        });
      })
      .then(() => {});
  }

  function createServerFile(name) {
    return fetch("/file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        type: "application/gravit+design",
        app: "designer",
      }),
    }).then((r) => r.json());
  }

  // Figures out which server file a save should target, prompting for a
  // name only when we genuinely don't already know one:
  //  - doc.__serverFile: set on the live document object after any
  //    successful save, so a plain re-save never re-prompts.
  //  - doc.getStorageItem()'s real id: true for a document reopened via
  //    Open Recent or our own Browse dialog, which already has a
  //    server-assigned id even though we've never personally saved it
  //    from this document instance.
  //  - otherwise (a brand-new, never-saved document, or an explicit
  //    "Save to Server As") — we don't know the name, so ask, matching
  //    how local Save As already behaves.
  // Returns null if the user cancels the prompt.
  async function resolveTargetFile(doc, forceSaveAs) {
    const currentName = (doc.getTitle && doc.getTitle()) || "Untitled";
    if (!forceSaveAs) {
      if (doc.__serverFile) return doc.__serverFile;
      const item = doc.getStorageItem && doc.getStorageItem();
      const existingId =
        item && !item.__isFakeStorageItem && typeof item.getId === "function"
          ? item.getId()
          : null;
      if (existingId) {
        const meta = {
          id: existingId,
          name: (item.getName && item.getName()) || currentName,
        };
        doc.__serverFile = meta;
        return meta;
      }
    }
    const defaultName =
      forceSaveAs && doc.__serverFile ? doc.__serverFile.name : currentName;
    const chosenName = await promptForName(
      defaultName,
      forceSaveAs ? "Save to Server As" : "Save to Server",
    );
    if (chosenName == null) return null;
    const meta = await createServerFile(chosenName);
    doc.__serverFile = meta;
    return meta;
  }

  function saveActiveDocumentToServer(options) {
    options = options || {};
    const doc =
      window.gDesigner && window.gDesigner.getActiveDocument
        ? window.gDesigner.getActiveDocument()
        : null;
    if (!doc) {
      if (!options.silent) showToast("Save to server: no active document", true);
      return;
    }
    patchDocumentPrototype(doc);

    return resolveTargetFile(doc, !!options.forceSaveAs)
      .then((target) => {
        if (!target) return; // user cancelled the name prompt
        const name = target.name;
        const fakeStorageItem = {
          __isFakeStorageItem: true,
          // Real storage-item classes return the uppercase extension
          // (K.prototype.store compares it against B.ext.toUpperCase()).
          getExtension: () => "GVDESIGN",
          getId: () => target.id,
          getName: () => name,
          getFile: () => ({ id: target.id }),
          write: (bytes, onSuccess, onFail) => {
            uploadBytesToServer(target.id, bytes)
              .then(() => onSuccess && onSuccess())
              .catch((err) => onFail && onFail(err));
          },
        };
        return new Promise((resolve, reject) => {
          try {
            doc.store(fakeStorageItem, resolve, reject, {});
          } catch (err) {
            reject(err);
          }
        }).then(() => {
          // Update the tab title via the document's own public setter.
          //
          // NOT doc.setStorageItem(fakeStorageItem): that fires a
          // StorageItemUpdated event, and the app then calls a much wider
          // storage-item interface on it than our small object implements
          // (Je._registerUsage -> isRegistrable(), Je._updateTitle ->
          // supportsShadowFile(), K.isModified -> getVersionId(), ...),
          // each throwing a TypeError that killed the save.
          //
          // setTitle() is the real API for this and needs none of that:
          // K.prototype.getTitle() returns this._title while the document
          // is still "new" (isNew() === !this._storageItem), and setTitle
          // only touches the storage item when isCloudFile() is true —
          // which is `getStorageItem() instanceof D.Item`, false for us
          // since we deliberately never attach one. It also triggers the
          // Modified event the title UI already listens to.
          if (typeof doc.setTitle === "function") {
            doc.setTitle(name);
          }
          if (!options.silent) showToast(`Saved "${name}" to server`);
        });
      })
      .catch((err) => {
        console.error("[save-to-server] failed", err);
        showToast(
          `Failed to save to server: ${err && err.message ? err.message : err}`,
          true,
        );
      });
  }

  // Both ids below are handled identically: with canSaveToCloud() forced
  // to false (see patchDocumentPrototype), _saveDesktop() ends up calling
  // _saveToCloud() -> executeAction('gravit-cloud.save-as') for every
  // single save it triggers, first or hundredth — there is no separate
  // dispatch of plain 'gravit-cloud.save' happening anywhere in this
  // build. Treating '.save-as' as "always prompt and create a new file"
  // was the bug: it re-prompted and duplicated the file on every save.
  // saveActiveDocumentToServer() with no forced flag already does the
  // right thing either way — reuse the known file if there is one,
  // prompt only when there genuinely isn't.
  const ACTION_HANDLERS = {
    "gravit-cloud.save-as": () => saveActiveDocumentToServer({ forceSaveAs: false }),
    "gravit-cloud.save": () => saveActiveDocumentToServer({ forceSaveAs: false }),
    "gravit-cloud.open": () => browseServerFiles(),
  };

  // The File menu is built by Je.prototype._createMainMenu (Je = the
  // gDesigner class). It is not hand-written markup: it walks
  // gDesigner._actions, groups each entry by getCategory()/getGroup(),
  // and renders every item through one code path that reads
  // getTitle()/getIcon()/isEnabled()/... off the action object. So the
  // way to add an item is to add an action, not to touch the DOM (raw
  // <li> insertion was tried and is invisible to the menu's own
  // hover/click handling, which is driven by its internal items array).
  //
  // The catch is timing. _createMainMenu() is called exactly once:
  //
  //     this._actions = gravit.actions.map(...)
  //     this._createMainMenu()          <- once, during gDesigner.init()
  //
  // so pushing into gDesigner._actions after startup is always too late,
  // which is why the previous attempt registered without ever appearing.
  // The action has to be in the global `gravit.actions` array *before*
  // gDesigner.init() runs.
  //
  // The app provides exactly that seam. Right after building `gravit`
  // and immediately before gDesigner.init(), it calls out to optional
  // globals if they are defined:
  //
  //     "function" == typeof window.gdb_initsetupsystemdateaction &&
  //       window.gdb_initsetupsystemdateaction(window.gravit.actions),
  //
  // That whole block sits after `await new Promise(e => gContainer
  // .initLanguage(e))`, so it necessarily runs after every synchronous
  // script tag — defining the hook at load time below is always in time.
  // Of the four such hooks this is the only one not additionally gated
  // on beta/RC flags, so it is the one that reliably fires.
  //
  // getTitle() must return a real GLocaleKey (GLocale.get() is called on
  // it directly), not a string, so the class is taken off a real action's
  // title rather than guessed at. getCategory()/getGroup() are borrowed
  // by reference from the real neighbouring actions — file.open for
  // "Open...", file.save-as.gvdesign for "Save..." (ids straight from the
  // source: GOpenAction.ID, GSaveAsAction.ID + "." + ext) — so our items
  // land in the same menu groups without reconstructing the category tree.
  function findActionIn(actions, id) {
    for (const action of actions || []) {
      try {
        if (action.getId() === id) return action;
      } catch (err) {
        // Skip anything that can't report its id.
      }
    }
    return null;
  }

  function getGLocaleKeyClassFrom(actions) {
    for (const action of actions || []) {
      try {
        const title = action.getTitle();
        if (title && typeof title.getClassReference === "function" && title.constructor) {
          return title.constructor;
        }
      } catch (err) {
        // Skip actions whose title can't be built here.
      }
    }
    return null;
  }

  function makeServerAction(id, titleKey, referenceAction, GLocaleKeyClass, onExecute) {
    const fake = Object.create(Object.getPrototypeOf(referenceAction));
    Object.assign(fake, {
      getId: () => id,
      getTitle: () => new GLocaleKeyClass("GGravitCloudAction", titleKey),
      getInfo: () => null,
      getIcon: () => "gravit-icon-cloud",
      getGroupIcon: () => "gravit-icon-cloud",
      getShortcut: () => null,
      getStyleClass: () => null,
      getCategory: () => referenceAction.getCategory(),
      getGroup: () => referenceAction.getGroup(),
      isEnabled: () => true,
      isVisible: () => true,
      isAvailable: () => true,
      isPro: () => false,
      isCheckable: () => false,
      isChecked: () => false,
      isShortcutGlobal: () => false,
      noHover: () => false,
      getTooltipConfig: () => null,
      statsValue: () => id,
      // Also called against every action while the menu builds
      // (Je.registerAdditionalShortcuts -> getAdditionalShortcuts, and
      // _executeShortcutAction -> isKeyBoardEventRequiredToExecute).
      // Overridden so nothing falls through to the borrowed prototype and
      // runs a real action's logic against an object lacking its state.
      getAdditionalShortcuts: () => null,
      isKeyBoardEventRequiredToExecute: () => false,
      // Menu items invoke their action via this._action.execute()
      // directly (see Je.addMenuItem -> GMenuItem.setAction), not via
      // gDesigner.executeAction(id), so the handler is passed in rather
      // than dispatched by id. That distinction matters: the native
      // toolbar save path dispatches 'gravit-cloud.save-as' for every
      // save, so ACTION_HANDLERS has to treat that id as a plain save —
      // but our own "Save to Server as..." menu entry genuinely means
      // Save As. Routing by id collapsed the two together.
      execute: onExecute,
      executeFromShortcut: onExecute,
    });
    return fake;
  }

  // Position matters: _createMainMenu renders in gravit.actions order, so
  // appending puts our entries at the very bottom of the File menu. Each
  // one is spliced in directly after its local counterpart instead, and
  // borrows getCategory()/getGroup() from that same neighbour so it joins
  // that group rather than starting a new one (the menu inserts a divider
  // wherever consecutive items disagree on group).
  function insertActionAfter(actions, afterId, action) {
    const idx = actions.findIndex((a) => {
      try {
        return a.getId() === afterId;
      } catch (err) {
        return false;
      }
    });
    if (idx === -1) {
      actions.push(action);
      return false;
    }
    actions.splice(idx + 1, 0, action);
    return true;
  }

  function addServerActionsTo(actions) {
    if (!Array.isArray(actions)) {
      console.warn("[save-to-server] action hook got a non-array", actions);
      return false;
    }
    if (findActionIn(actions, "gravit-cloud.open")) return true; // already added
    const openRef = findActionIn(actions, "file.open");
    // "Save" (file.save) is the neighbour our two save entries sit under,
    // so group with it; fall back to the Save As entry if it is absent.
    const saveRef =
      findActionIn(actions, "file.save") ||
      findActionIn(actions, "file.save-as.gvdesign") ||
      findActionIn(actions, "file.save-as");
    const GLocaleKeyClass = getGLocaleKeyClassFrom(actions);
    if (!openRef || !saveRef || !GLocaleKeyClass) {
      console.warn(
        "[save-to-server] cannot add File menu items — missing:",
        !openRef ? "file.open " : "",
        !saveRef ? "file.save " : "",
        !GLocaleKeyClass ? "GLocaleKey" : "",
        "| action count:",
        actions.length,
      );
      return false;
    }

    insertActionAfter(
      actions,
      "file.open",
      makeServerAction("gravit-cloud.open", "title.open", openRef, GLocaleKeyClass, () =>
        browseServerFiles(),
      ),
    );
    // Save As is inserted first so that, both being placed directly after
    // file.save, the final order reads Save / Save to Server / Save to
    // Server as...
    insertActionAfter(
      actions,
      "file.save",
      makeServerAction("gravit-cloud.save-as", "title.save-as", saveRef, GLocaleKeyClass, () =>
        saveActiveDocumentToServer({ forceSaveAs: true }),
      ),
    );
    insertActionAfter(
      actions,
      "file.save",
      makeServerAction("gravit-cloud.save", "title.save", saveRef, GLocaleKeyClass, () =>
        saveActiveDocumentToServer({ forceSaveAs: false }),
      ),
    );
    console.log("[save-to-server] File menu actions inserted into gravit.actions");
    return true;
  }

  // Installed synchronously at load, well before the app calls it.
  const previousInitHook = window.gdb_initsetupsystemdateaction;
  window.gdb_initsetupsystemdateaction = function (actions) {
    if (typeof previousInitHook === "function") {
      try {
        previousInitHook(actions);
      } catch (err) {
        console.warn("[save-to-server] pre-existing init hook threw", err);
      }
    }
    try {
      addServerActionsTo(actions);
    } catch (err) {
      console.error("[save-to-server] failed adding File menu actions", err);
    }
  };

  // Welcome screen ("New Document" dialog). Its sidebar entries are built
  // by that dialog's own _createSeparator(container, cssClass) /
  // _createOption(container, title, subtitle, cssClass, onClick) — the
  // same pair the real "Open from Computer" entry is built with:
  //
  //     this._createSeparator(s, "local-option"),
  //     this._createOption(s, GLocale.get(...), GLocale.get(...),
  //                        "local-option", callback)
  //
  // There is no cloud entry to re-label here: this build simply never
  // creates one (the locale strings exist, the markup does not). So we add
  // one through those same two methods on the live dialog instance, which
  // gDesigner keeps at _newDocumentDialog.
  function installWelcomeScreenOption() {
    const $ = window.$;
    const dialog = window.gDesigner && window.gDesigner._newDocumentDialog;
    if (!$ || !dialog || typeof dialog._createOption !== "function") return false;
    const container = $(".g-new-document-dialog .sidebar-options");
    if (!container.length) return false;
    if (container.find(".option.server-option").length) return true; // already there
    if (typeof dialog._createSeparator === "function") {
      dialog._createSeparator(container, "server-option");
    }
    dialog._createOption(
      container,
      "Open from Server",
      "Open and manage your server files",
      "server-option",
      () => {
        if (typeof window.gDesigner.closeNewDocumentDialog === "function") {
          window.gDesigner.closeNewDocumentDialog();
        }
        browseServerFiles();
      },
    );
    console.log("[save-to-server] welcome screen option added");
    return true;
  }

  function installExecuteActionOverride() {
    if (
      !window.gDesigner ||
      typeof window.gDesigner.executeAction !== "function" ||
      window.gDesigner.__saveToServerInstalled
    ) {
      return !!(window.gDesigner && window.gDesigner.__saveToServerInstalled);
    }
    const originalExecuteAction = window.gDesigner.executeAction.bind(
      window.gDesigner,
    );
    window.gDesigner.executeAction = function (id) {
      if (ACTION_HANDLERS[id]) return ACTION_HANDLERS[id]();
      return originalExecuteAction.apply(this, arguments);
    };
    window.gDesigner.__saveToServerInstalled = true;
    console.log("[save-to-server] executeAction override installed");
    return true;
  }

  // Belt-and-suspenders fallback: on browsers where the default storage
  // can't do a native local save (getDefaultStorage().canSave() === false),
  // K.prototype._save()'s isCloudFile() branch checks canSaveToCloud()
  // first — false there makes it fall back to _saveToCloud() ->
  // executeAction('gravit-cloud.save-as'), which the override above
  // already handles. Harmless to patch even when unused.
  function patchDocumentPrototype(doc) {
    const proto = doc && Object.getPrototypeOf(doc);
    if (!proto || proto.__saveToServerCanSaveToCloudPatched) return !!proto;
    if (typeof proto.canSaveToCloud !== "function") return false;
    proto.canSaveToCloud = async () => false;
    proto.__saveToServerCanSaveToCloudPatched = true;
    console.log("[save-to-server] canSaveToCloud patched");
    return true;
  }

  // The actual culprit behind the "Open Recent" save failures: on
  // browsers where getDefaultStorage().canSave() is true (File System
  // Access API present — the normal case), _save() ALWAYS takes the
  // _saveDesktop() branch, which never even looks at canSaveToCloud().
  // For a document reopened via "Open Recent" (or our own Browse
  // dialog), _saveDesktop() just calls .write() straight on whatever
  // real storage item got reconstructed — a genuine built-in "Cloud"
  // storage item (b.Item) pointing at our file id, expecting the full
  // original Corel cloud API surface (manual/commit, usage tracking,
  // real signed URLs, etc.) that this server doesn't implement.
  //
  // Rather than build out that whole surface, patch write() itself on
  // the real storage item's shared prototype so every save — no matter
  // which internal path leads to it — ends up doing the same simple,
  // working PUT our own fake storage item already uses above.
  function patchStorageItemPrototype(item) {
    if (!item || item.__isFakeStorageItem) return false;
    const proto = Object.getPrototypeOf(item);
    if (!proto || proto === Object.prototype) return false;
    if (proto.__saveToServerWritePatched) return true;
    if (typeof proto.write !== "function" || typeof item.getId !== "function")
      return false;
    proto.write = function (bytes, onSuccess, onFail) {
      const id = this.getId();
      if (!id) {
        onFail && onFail(new Error("Storage item has no server file id"));
        return;
      }
      uploadBytesToServer(id, bytes)
        .then(() => onSuccess && onSuccess())
        .catch((err) => onFail && onFail(err));
    };
    proto.__saveToServerWritePatched = true;
    console.log("[save-to-server] real storage item write() patched");
    return true;
  }

  function tryPatchActiveDocument() {
    if (!window.gDesigner || !window.gDesigner.getActiveDocument) return false;
    const doc = window.gDesigner.getActiveDocument();
    if (!doc) return false;
    const patchedDoc = patchDocumentPrototype(doc);
    const item = doc.getStorageItem && doc.getStorageItem();
    const patchedItem = item ? patchStorageItemPrototype(item) : false;
    return patchedDoc && patchedItem;
  }

  // The File menu needs no polling — it goes in through the init hook
  // installed above, before the menu is ever built. This loop covers the
  // pieces that genuinely have to wait for runtime objects to appear.
  //
  // It backs off rather than running forever: installWelcomeScreenOption()
  // does a document-wide jQuery query, and at 250ms that was four full DOM
  // searches a second for the lifetime of the tab. The welcome dialog can
  // be rebuilt (so this can't simply stop once it has run), but polling it
  // every 2s once everything is installed is plenty.
  let documentPatched = false;
  let pollDelay = 250;
  function pollOnce() {
    const actionInstalled = installExecuteActionOverride();
    documentPatched = documentPatched || tryPatchActiveDocument();
    const welcomeAdded = installWelcomeScreenOption();
    if (actionInstalled && documentPatched && welcomeAdded && pollDelay < 2000) {
      pollDelay = 2000; // everything installed — drop to a slow watch
    }
    setTimeout(pollOnce, pollDelay);
  }
  setTimeout(pollOnce, pollDelay);

  // Periodic autosave-to-server. The app's own native autosave loop
  // explicitly skips any document where canSaveToCloud() is false (see
  // patchDocumentPrototype above) — which is now every document we've
  // touched, by design. This is a separate, independent replacement:
  // only ever fires for a document that already has a known server file
  // (doc.__serverFile), so it never prompts for a name or creates a new
  // file — a brand-new, never-saved document is simply never autosaved.
  const AUTOSAVE_INTERVAL_MS = 3 * 60 * 1000;
  setInterval(() => {
    const doc =
      window.gDesigner && window.gDesigner.getActiveDocument
        ? window.gDesigner.getActiveDocument()
        : null;
    if (!doc || !doc.__serverFile) return;
    try {
      if (typeof doc.isModified === "function" && !doc.isModified()) return;
    } catch (err) {
      // isModified() reaches into storage-item state; never let a throw
      // there kill the interval — just skip this tick.
      console.warn("[save-to-server] isModified() threw, skipping autosave", err);
      return;
    }
    saveActiveDocumentToServer({ silent: true });
  }, AUTOSAVE_INTERVAL_MS);
})();
