import { createMainView } from "../views/mainView.js";
import { suggestionErrorView } from "../views/suggestionErrorView.js";
import { fetchSuggestions } from "../util/fetchSuggestions.js";

export function createMainPage() {
  createMainView();
  try {
    const sessionToken = new google.maps.places.AutocompleteSessionToken();

    let debounceTimeout;
    function inputEventListener(input) {
      input.addEventListener("input", () => {
        clearTimeout(debounceTimeout);
        if (input.value.trim()) {
          debounceTimeout = setTimeout(async () => {
            try {
              await fetchSuggestions(input.value.trim(), sessionToken);
            } catch (error) {
              suggestionErrorView(error);
            }
          }, 500);
        }
      });
    }

    const inputStart = document.getElementById("startLoc");
    const inputEnd = document.getElementById("endLoc");
    inputEventListener(inputStart);
    inputEventListener(inputEnd);
  } catch (error) {
    console.log(error);
    suggestionErrorView(error);
  }
}
