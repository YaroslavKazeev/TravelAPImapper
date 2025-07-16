// Set the height of the output window so it fits below the header, accounting for padding
export function adjustOutputHeight() {
  const viewportHeight = window.innerHeight;
  const headerHeight = document.querySelector("header").offsetHeight;
  const main = document.getElementsByTagName("main")[0];
  const padding = parseInt(
    window.getComputedStyle(main).getPropertyValue("padding-top")
  );
  const outputWindow = document.querySelector("#outputWindow");
  return (outputWindow.style.height = `${
    viewportHeight - headerHeight - 2 * padding
  }px`);
}
