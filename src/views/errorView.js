export function errorView(errorComment, error) {
  const suggestionsContainer = document.getElementById("suggestions-container");
  suggestionsContainer.className = "error";
  suggestionsContainer.innerHTML = `<p>${errorComment}</p>
  <p>${error.message}</p>`;
}
