export function suggestionView(input, suggestions) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.innerHTML = "Location Suggestions:";
  suggestionsContainer.className = "suggestions";
  for (let suggestion of suggestions) {
    const placePrediction = suggestion.placePrediction;
    const listItem = document.createElement("li");
    listItem.className = "suggestion-item";
    listItem.textContent = `${placePrediction.text.text}`;
    listItem.onclick = () => {
      input.value = listItem.textContent;
      suggestionsContainer.innerHTML = "";
    };
    suggestionsContainer.appendChild(listItem);
  }
}
