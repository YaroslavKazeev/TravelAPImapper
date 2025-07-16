// Switches the UI to show the interactive map and hide the dummy map
export function createMapView() {
  const dummyMap = document.getElementById("dummyMap");
  const map = document.getElementById("map");
  dummyMap.style.visibility = "hidden";
  map.style.visibility = "visible";
  // Reset the output window's max width
  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.style.maxWidth = "";
}
