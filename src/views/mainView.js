import { adjustOutputHeight } from "../util/adjustOutputHeight.js";
export function createMainView(state) {
  const outputWindow = document.querySelector("#outputWindow");
  outputWindow.innerHTML = "";
  outputWindow.innerHTML = String.raw`
  <img
    src="./public/dummyMap.png"
    alt="The picture of the globe with the route across Atlantic ocean"
  />`;
  adjustOutputHeight();

  async function init() {
    let sessionToken = new google.maps.places.AutocompleteSessionToken();

    // Define request options.
    let request = {
      input: "par",
    };
    console.log(request.input);

    // Perform the query and display the results.
    const { suggestions } =
      await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
        request
      );

    const resultsElement = document.getElementById("predictions-container");

    for (let suggestion of suggestions) {
      const placePrediction = suggestion.placePrediction;
      const listItem = document.createElement("li");

      listItem.appendChild(document.createTextNode(placePrediction.text.text));

      resultsElement.appendChild(listItem);
    }
  }
  init();
}
// Initialize autocomplete service
// const autocompleteService = new google.maps.places.AutocompleteSuggestion();
// const predictionsContainer = document.getElementById("predictions-container");
// const sessionToken = new google.maps.places.AutocompleteSessionToken();

// console.log(autocompleteService);
// console.log(sessionToken);

// Debounce function to prevent too many requests
// function debounce(func, wait) {
//   let timeout;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), wait);
//   };
// }

// Handle predictions display
// function displayPredictions(predictions) {
//   const container = document.createElement("div");

//   if (!predictions || !predictions.length) {
//     container.innerHTML = "<p>No results found.</p>";
//     return;
//   }

//   predictions.forEach((prediction) => {
//     const suggestionDiv = document.createElement("div");
//     suggestionDiv.textContent = prediction.description;
//     suggestionDiv.onclick = () => getPlaceDetails(prediction.place_id);
//     container.appendChild(suggestionDiv);
//   });

//   predictionsContainer.innerHTML = "";
//   predictionsContainer.appendChild(container);
// }

// // Get detailed place information
// async function getPlaceDetails(placeId) {
//   const service = new google.maps.places.PlacesService(
//     document.createElement("div")
//   );

//   try {
//     const response = await service.getDetails({
//       placeId,
//       fields: ["name", "geometry", "formatted_address"],
//     });

//     console.log("Selected place:", response);
//     // Update your UI with the selected location details
//   } catch (error) {
//     console.error("Error getting place details:", error);
//   }
// }

// Initialize autocomplete functionality
// document.addEventListener("DOMContentLoaded", () => {
// const input = document.getElementById("startLoc");

// const autocompleteRequest = {
//   input: "",
//   types: ["geocode", "establishment"],
//   sessionToken: sessionToken,
// };

// const debouncedSearch = debounce(async () => {
//   if (!input.value.trim()) {
//     predictionsContainer.innerHTML = "";
//     return;
//   }

//   autocompleteRequest.input = input.value;

//   try {
//     const predictions =
//       await autocompleteService.fetchAutocompleteSuggestions(
//         autocompleteRequest
//       );
//     console.log("predictions", predictions);
//     displayPredictions(predictions);
//   } catch (error) {
//     console.error("Error:", error);
//     predictionsContainer.innerHTML = "<p>Error loading suggestions.</p>";
//   }
// }, 300);

// input.addEventListener("input", debouncedSearch);
// });
// }
