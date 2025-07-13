import { createMainPage } from "./pages/mainPage.js";
import { loadPage } from "./util/loadPage.js";

function loadApp() {
  const state = {
    console: null,
    loadingWord: false,
    loadingRoute: false,
    wordSuggestion: null,
    routeData: null,
  };
  loadPage(createMainPage, state);
}

window.addEventListener("load", loadApp);
