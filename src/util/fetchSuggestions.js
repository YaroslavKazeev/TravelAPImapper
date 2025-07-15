export async function fetchSuggestions(inputValue, sessionToken) {
  let request = {
    input: inputValue,
    sessionToken,
  };
  const { suggestions } =
    await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions(
      request
    );
  return suggestions;
}
