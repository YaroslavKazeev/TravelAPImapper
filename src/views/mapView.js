import { adjustOutputHeight } from "../util/adjustOutputHeight.js";
export function createMapView() {
  const dummyMap = document.getElementById("dummyMap");
  const map = document.getElementById("map");
  dummyMap.style.visibility = "hidden";
  map.style.visibility = "visible";
  adjustOutputHeight();
}
