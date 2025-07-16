import { adjustOutputHeight } from "../util/adjustOutputHeight.js";
export function createMainView() {
  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.innerHTML = "";
  outputWindow.innerHTML = String.raw`
  <img
    src="./public/dummyMap.png"
    alt="The picture of the globe with the route across Atlantic ocean"
  />`;

  adjustOutputHeight();
}
