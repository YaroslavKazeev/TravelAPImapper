import { createMainView } from "../views/mainView.js";
import { suggestionView } from "../views/suggestionView.js";
import { suggestionErrorView } from "../views/suggestionErrorView.js";

export function createMainPage() {
  createMainView();
}

const sessionToken = new google.maps.places.AutocompleteSessionToken();
async function fetchSuggestions(inputValue) {
  let request = {
    input: inputValue,
    sessionToken,
  };
  const { suggestions } =
    await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
      request
    );
  suggestionView(suggestions);
}

let debounceTimeout;
function inputEventListeners(input) {
  input.addEventListener("input", () => {
    clearTimeout(debounceTimeout);
    if (input.value.trim()) {
      debounceTimeout = setTimeout(async () => {
        try {
          await fetchSuggestions(input.value.trim());
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
