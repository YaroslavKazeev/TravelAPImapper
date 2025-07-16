import { adjustOutputHeight } from "../util/adjustOutputHeight.js";
export function createMainView() {
  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.innerHTML = "";
  outputWindow.innerHTML = String.raw`
  <img
    src="./public/dummyMap.png"
    alt="The picture of the globe with the route across Atlantic ocean"
  />`;

  // Add Go button to the UI
  const inputGrid = document.querySelector(".input-grid");
  if (inputGrid) {
    let goBtn = document.getElementById("goBtn");
    if (!goBtn) {
      goBtn = document.createElement("button");
      goBtn.id = "goBtn";
      goBtn.textContent = "Go";
      inputGrid.appendChild(goBtn);
    }
  }

  adjustOutputHeight();
}
