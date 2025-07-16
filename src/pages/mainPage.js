import { createDummyMapView } from "../views/dummyMapView.js";
import { errorView } from "../views/errorView.js";
import { fetchSuggestions } from "../util/fetchSuggestions.js";
import { suggestionView } from "../views/suggestionView.js";
import { fetchRoutes } from "../util/fetchRoutes.js";
import { createMapView } from "../views/mapView.js";

export function createMainPage() {
  let errorComment;
  createDummyMapView();
  try {
    errorComment = "Google API initiation error";
    const sessionToken = new google.maps.places.AutocompleteSessionToken();
    let debounceTimeout;
    function inputEventListener(input) {
      input.addEventListener("input", () => {
        clearTimeout(debounceTimeout);
        if (input.value.trim()) {
          debounceTimeout = setTimeout(async () => {
            try {
              errorComment = "Error loading suggestions";
              const suggestions = await fetchSuggestions(
                input.value.trim(),
                sessionToken
              );
              suggestionView(input, suggestions);
            } catch (error) {
              console.log(errorComment, error);
              errorView(errorComment, error);
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
    goBtn.addEventListener("click", async () => {
      const start = inputStart.value.trim();
      const end = inputEnd.value.trim();
      errorComment = "Failed to fetch route";
      try {
        if (!start || !end) {
          throw new Error("Please enter both start and destination locations");
        }
        const result = await fetchRoutes(start, end);
        // Display the route on the map
        if (!window.directionsRenderer) {
          window.directionsRenderer = new google.maps.DirectionsRenderer({
            map: window.map,
          });
        }
        window.directionsRenderer.setDirections(result);
        createMapView();
      } catch (error) {
        createDummyMapView();
        console.log(errorComment, error);
        errorView(errorComment, error);
      }
    });
  } catch (error) {
    console.log(errorComment, error);
    createDummyMapView();
    errorView(errorComment, error);
  }
}
