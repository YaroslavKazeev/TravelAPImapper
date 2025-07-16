// Map initialization
window.initMap = function () {
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 40.7128, lng: -74.006 }, // Default to New York City
    mapTypeId: "roadmap",
  });
  // Store the map instance globally
  window.map = map;
  // Add any additional map initialization code here
};
