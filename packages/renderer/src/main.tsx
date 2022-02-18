/* @refresh reload */
import "tailwindcss/tailwind.css";

import "./samples/electron-store";

import { onMount } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";

render(() => {
  onMount(() => {
    window.removeLoading();
  });

  return (
    <Router>
      <App />
    </Router>
  );
}, document.getElementById("root") as HTMLElement);

console.log("fs", window.fs);
console.log("ipcRenderer", window.ipcRenderer);

// Usage of ipcRenderer.on
window.ipcRenderer.on("main-process-message", (_event, ...args) => {
  console.log("[Receive Main-process message]:", ...args);
});
