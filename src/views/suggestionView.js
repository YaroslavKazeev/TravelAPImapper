export function suggestionView(suggestions) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.innerHTML = "";
  for (let suggestion of suggestions) {
    const placePrediction = suggestion.placePrediction;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(placePrediction.text.text));
    suggestionsContainer.appendChild(listItem);
  }
}
