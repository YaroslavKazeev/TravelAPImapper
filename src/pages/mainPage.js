import { createMainView } from "../views/mainView.js";

export function createMainPage(state) {
  createMainView(state);
}

const sessionToken = new google.maps.places.AutocompleteSessionToken();

//   let debounceTimeout;
//   function debouncedSearch() {
//     const input = document.getElementById("startLoc");
//     clearTimeout(debounceTimeout);
//     if (!input.value.trim()) {
//       predictionsContainer.innerHTML = "";
//       return;
//     }
//     debounceTimeout = setTimeout(() => {

async function init() {
  // Define request options.
  let request = {
    input: "par",
    sessionToken,
  };
  console.log(request.input);

  // Perform the query and display the results.
  const { suggestions } =
    await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
      request
    );

  const resultsElement = document.getElementById("predictions-container");
  resultsElement.innerHTML = "";

  for (let suggestion of suggestions) {
    const placePrediction = suggestion.placePrediction;
    const listItem = document.createElement("li");

    listItem.appendChild(document.createTextNode(placePrediction.text.text));

    resultsElement.appendChild(listItem);
  }
}
// init();

let debounceTimeout;
const inputStart = document.getElementById("startLoc");
const inputEnd = document.getElementById("endLoc");
console.log(inputStart, inputEnd);

inputStart.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  if (inputStart.value.trim()) {
    debounceTimeout = setTimeout(() => {
      init();
    }, 500);
  }
});

inputEnd.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  if (inputEnd.value.trim()) {
    debounceTimeout = setTimeout(() => {
      init();
    }, 500);
  }
});
// Initialize autocomplete service
//   const autocompleteService = new google.maps.places.AutocompleteSuggestion();
//   const predictionsContainer = document.getElementById("predictions-container");
//   const sessionToken = new google.maps.places.AutocompleteSessionToken();

//   // Handle predictions display
//   function displayPredictions(predictions) {
//     const container = document.createElement("div");

//     if (!predictions || !predictions.length) {
//       container.innerHTML = "<p>No results found.</p>";
//       predictionsContainer.innerHTML = "";
//       predictionsContainer.appendChild(container);
//       return;
//     }

//     predictions.forEach((prediction) => {
//       const suggestionDiv = document.createElement("div");
//       suggestionDiv.textContent = prediction.description;
//       suggestionDiv.onclick = () => getPlaceDetails(prediction.place_id);
//       container.appendChild(suggestionDiv);
//     });

//     predictionsContainer.innerHTML = "";
//     predictionsContainer.appendChild(container);
//   }

//   // Initialize autocomplete functionality

//   const autocompleteRequest = {
//     input: "",
//     sessionToken: sessionToken,
//   };

//   // Debounced search with integrated debounce logic and Promise usage
//   let debounceTimeout;
//   function debouncedSearch() {
//     const input = document.getElementById("startLoc");
//     clearTimeout(debounceTimeout);
//     if (!input.value.trim()) {
//       predictionsContainer.innerHTML = "";
//       return;
//     }
//     debounceTimeout = setTimeout(() => {
//       autocompleteRequest.input = input.value;
//       Promise.resolve(
//         autocompleteService.fetchAutocompleteSuggestions(autocompleteRequest)
//       )
//         .then((predictions) => {
//           console.log("predictions", predictions);
//           displayPredictions(predictions);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           predictionsContainer.innerHTML = "<p>Error loading suggestions.</p>";
//         });
//     }, 500);
//   }
//   input.addEventListener("input", debouncedSearch);
