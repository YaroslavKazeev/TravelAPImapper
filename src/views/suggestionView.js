// Renders location suggestions in the suggestions container and handles selection
export function suggestionView(input, suggestions) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.innerHTML = "Location Suggestions:";
  suggestionsContainer.className = "suggestions";
  for (let suggestion of suggestions) {
    const placePrediction = suggestion.placePrediction;
    const listItem = document.createElement("li");
    listItem.className = "suggestion-item";
    listItem.textContent = `${placePrediction.text.text}`;
    // When a suggestion is clicked, fill the input and clear suggestions
    listItem.onclick = () => {
      input.value = listItem.textContent;
      suggestionsContainer.innerHTML = "";
      suggestionsContainer.className = "";
    };
    suggestionsContainer.appendChild(listItem);
  }
}
