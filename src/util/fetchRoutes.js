// Fetches driving routes between two locations using Google Maps DirectionsService
export async function fetchRoutes(start, end) {
  return new Promise((resolve, reject) => {
    if (!window.map) {
      reject(new Error("Google Maps JS API not loaded"));
    }
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      },
      (result, status) => {
        if (status === "OK") {
          resolve(result);
        } else {
          reject(new Error("Directions request failed: " + status));
        }
      }
    );
  });
}
