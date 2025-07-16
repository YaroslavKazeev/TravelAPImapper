// Switches the UI to show a dummy map image instead of the interactive map
import { adjustOutputHeight } from "../util/adjustOutputHeight.js";
export function createDummyMapView() {
  const map = document.getElementById("map");
  map.style.visibility = "hidden";
  const dummyMap = document.getElementById("dummyMap");
  dummyMap.style.visibility = "visible";

  // Adjust the output window's max width to fit the layout
  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.style.maxWidth = adjustOutputHeight();
}
