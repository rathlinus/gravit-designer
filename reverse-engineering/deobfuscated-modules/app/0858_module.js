/**
 * Webpack Module #858
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }),
      (t.default =
        t.GFilesPanelSortTypes =
        t.GFilesPanelSortDirections =
        t.GFilesPanelFileTypesFilter =
        t.GFilesPanelClipboardModes =
          undefined);
    const o = n(47) /* GLocaleKey */,
      i =
        ((t.GFilesPanelFileTypesFilter = [
          {
            id: "gvdesign",
            name: new o("GFilesPanel", "text.filter-type-gvdesign"),
            type: "application/gravit+design",
          },
        ]),
        (t.GFilesPanelSortTypes = {
          UPDATED: "updated",
          NAME: "name",
          CREATED: "created",
        })),
      a = (t.GFilesPanelSortDirections = { ASCEND: true, DESCEND: false }),
      r = (t.GFilesPanelClipboardModes = { DEFAULT: 1, COPY: 2, CUT: 3 });
    t.default = {
      GFilesPanelSortTypes: i,
      GFilesPanelSortDirections: a,
      GFilesPanelClipboardModes: r,
    };
  }