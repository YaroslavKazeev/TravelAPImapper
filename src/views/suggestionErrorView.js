export function suggestionErrorView(error) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.className = "error";
  suggestionsContainer.innerHTML = `<p>Error loading suggestions.</p>
  <p>${error.message}</p>`;
}
