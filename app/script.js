let highestZIndex = 1; // Initialize the highest z-index

function bringToFront(element) {
  // Increment the highestZIndex and set it as the new z-index for the clicked element
  highestZIndex++;
  element.style.zIndex = highestZIndex;
}
