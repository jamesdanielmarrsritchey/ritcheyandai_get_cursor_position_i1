function trackMousePositionAndUpdateElement(elementId) {
  // Find the element by its ID
  const element = document.getElementById(elementId);

  // Check if the element exists
  if (!element) {
    console.error('Element not found');
    return;
  }

  // Update the element's innerHTML with the current mouse position
  document.addEventListener('mousemove', (event) => {
    const positionText = `Mouse Position: x=${event.clientX}, y=${event.clientY}`;
    element.innerHTML = positionText;
  });
}

/*
Example:

trackMousePositionAndUpdateElement('mousePositionDisplay');

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        trackMousePositionAndUpdateElement('mousePositionDisplay');
    }
});

*/