export function createMainView(state) {
  const appRoot = document.querySelector("#app-root");
  const title = document.createElement("h1");
  title.textContent = "TravelMapper - a substitute for Google Maps";
  appRoot.append(title);

  const inputForm = document.createElement("div");
  inputForm.className = "container-column";
  inputForm.innerHTML = String.raw`<h2>InputFields</h2>`;
  appRoot.append(inputForm);

  const outputView = document.createElement("div");
  outputView.className = "container-column";
  outputView.innerHTML = String.raw`<h2>OutputField</h2>`;
  appRoot.append(outputView);
}
