import { Dashboard, LogManagment } from "./ui";
import { ConfigCtrl } from "./ConfigCtrl";

// import { loadPluginCss } from '@grafana/runtime';
// Patch since @grafana/runtime is giving error on build
declare const window: any;
export function loadPluginCss() {
  if (window.grafanaBootData.user.lightTheme) {
    require("./css/logmanager.light.css");
  } else {
    require("./css/logmanager.dark.css");
  }
}

loadPluginCss();

export { ConfigCtrl, Dashboard, LogManagment };
