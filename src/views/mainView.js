import { adjustOutputHeight } from "../util/adjustOutputHeight.js";
export function createMainView() {
  const map = document.getElementById("map");
  map.style.visibility = "hidden";

  const dummyMap = document.getElementById("dummyMap");
  dummyMap.style.visibility = "visible";

  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.style.maxWidth = adjustOutputHeight();
}
