const { contextBridge, ipcRenderer } = require("electron");

// Bridges a file path the app was launched/re-invoked with (double-click on
// a .gvdesign file, "Open with" from a file manager) from the main process,
// which has real fs access, into the renderer. See public/index.html for
// the consumer.
contextBridge.exposeInMainWorld("gravitOpenFile", {
  // Covers the first-launch case: the file was on the command line before
  // the renderer had a listener attached, so main stashed it instead of
  // sending it immediately.
  getPending: () => ipcRenderer.invoke("get-pending-open-file"),
  // Covers a second launch (single-instance lock) arriving while the app
  // is already running and the renderer is already listening.
  onOpenFile: (callback) => {
    ipcRenderer.on("open-file", (_event, payload) => callback(payload));
  },
  // Writes back to the original path on Save (see public/index.html) — the
  // renderer has no fs access itself under contextIsolation.
  writeFile: (filePath, data) =>
    ipcRenderer.invoke("write-open-file", filePath, data),
  // Native Save As dialog, starting in a given folder (see public/index.html)
  // — resolves to the chosen absolute path, or null if cancelled.
  showSaveDialog: (defaultDir, defaultName, filters) =>
    ipcRenderer.invoke("show-save-dialog", defaultDir, defaultName, filters),
});
