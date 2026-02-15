/**
 * Webpack Module #858
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    Object.defineProperty(module, "__esModule", { value: true }),
      (module.default =
        module.GFilesPanelSortTypes =
        module.GFilesPanelSortDirections =
        module.GFilesPanelFileTypesFilter =
        module.GFilesPanelClipboardModes =
          undefined);
    const GLocaleKey = require(47) /* GLocaleKey */,
      i =
        ((module.GFilesPanelFileTypesFilter = [
          {
            id: "gvdesign",
            name: new GLocaleKey("GFilesPanel", "text.filter-type-gvdesign"),
            type: "application/gravit+design",
          },
        ]),
        (module.GFilesPanelSortTypes = {
          UPDATED: "updated",
          NAME: "name",
          CREATED: "created",
        })),
      a = (module.GFilesPanelSortDirections = { ASCEND: true, DESCEND: false }),
      r = (module.GFilesPanelClipboardModes = { DEFAULT: 1, COPY: 2, CUT: 3 });
    module.default = {
      GFilesPanelSortTypes: i,
      GFilesPanelSortDirections: a,
      GFilesPanelClipboardModes: r,
    };
  }