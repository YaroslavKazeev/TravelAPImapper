export function createMainView(state) {
  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.innerHTML = "";
  const outputView = document.createElement("div");

  outputView.innerHTML = String.raw`<h2>OutputField +to change something</h2>`;
  outputWindow.append(outputView);
}
