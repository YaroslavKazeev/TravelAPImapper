import { createMainView } from "../views/mainView.js";
import { suggestionErrorView } from "../views/suggestionErrorView.js";
import { fetchSuggestions } from "../util/fetchSuggestions.js";

export function createMainPage() {
  createMainView();
}

const sessionToken = new google.maps.places.AutocompleteSessionToken();

let debounceTimeout;
function inputEventListeners(input) {
  input.addEventListener("input", () => {
    clearTimeout(debounceTimeout);
    if (input.value.trim()) {
      debounceTimeout = setTimeout(async () => {
        try {
          await fetchSuggestions(input.value.trim(), sessionToken);
        } catch (error) {
          console.log(error);
          suggestionErrorView(error);
        }
      }, 500);
    }
  });
}

const inputStart = document.getElementById("startLoc");
const inputEnd = document.getElementById("endLoc");
inputEventListeners(inputStart);
inputEventListeners(inputEnd);
