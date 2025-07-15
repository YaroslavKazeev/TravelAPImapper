import { createMainPage } from "./pages/mainPage.js";
import { loadPage } from "./util/loadPage.js";

function loadApp() {
  loadPage(createMainPage);
}

window.addEventListener("load", loadApp);
