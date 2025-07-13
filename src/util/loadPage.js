export function loadPage(pageFactoryFn, state) {
  const appRoot = document.querySelector("#app-root");
  appRoot.innerHTML = "";
  pageFactoryFn(state);
}
