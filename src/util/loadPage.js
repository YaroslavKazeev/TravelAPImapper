export function loadPage(pageFactoryFn, state) {
  const appRoot = document.querySelector("#outputWindow");
  appRoot.innerHTML = "";
  pageFactoryFn(state);
}
