export function loadPage(pageFactoryFn) {
  const appRoot = document.querySelector("#outputWindow");
  appRoot.innerHTML = "";
  pageFactoryFn();
}
