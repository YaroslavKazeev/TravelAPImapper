export function adjustOutputHeight() {
  const viewportHeight = window.innerHeight;
  const headerHeight = document.querySelector("header").offsetHeight;
  const totalPadding = 2 * 32;
  const outputWindow = document.querySelector("#outputWindow");
  console.log(viewportHeight, headerHeight, totalPadding);
  outputWindow.style.maxWidth = `${
    viewportHeight - headerHeight - totalPadding
  }px`;
}
