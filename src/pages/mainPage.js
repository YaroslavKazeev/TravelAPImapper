import { createMainView } from "../views/mainView.js";
import { suggestionErrorView } from "../views/suggestionErrorView.js";
import { fetchSuggestions } from "../util/fetchSuggestions.js";
import { suggestionView } from "../views/suggestionView.js";
import { fetchRoutes } from "../util/fetchRoutes.js";

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
              const suggestions = await fetchSuggestions(
                input.value.trim(),
                sessionToken
              );
              suggestionView(input, suggestions);
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

    // Add Go button event listener
    const goBtn = document.getElementById("goBtn");
    if (goBtn) {
      goBtn.addEventListener("click", async () => {
        const start = inputStart.value.trim();
        const end = inputEnd.value.trim();
        if (!start || !end) {
          alert("Please enter both start and destination locations.");
          return;
        }
        try {
          const result = await fetchRoutes(start, end);
          // Display the route on the map
          if (!window.directionsRenderer) {
            window.directionsRenderer = new google.maps.DirectionsRenderer({
              map: window.map,
            });
          }
          window.directionsRenderer.setDirections(result);
        } catch (error) {
          alert("Failed to fetch route: " + error.message);
        }
      });
    }
  } catch (error) {
    console.log(error);
    suggestionErrorView(error);
  }
}
