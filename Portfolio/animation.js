const jobTitles = ["designer", "engineer", "farmer"]; // Remove "web developer"
let currentTitleIndex = 0;
const jobTitleElement = document.querySelector(".animation-text");

function typeWriter() {
  const currentTitle = jobTitles[currentTitleIndex];
  let displayText = "";
  let currentIndex = 0;

  function type() {
    if (currentIndex < currentTitle.length) {
      displayText += currentTitle.charAt(currentIndex);
      jobTitleElement.textContent = displayText;
      currentIndex++;
      setTimeout(type, 200); // Typing speed (adjust as needed)
    } else {
      setTimeout(erase, 2000); // Time before erasing (adjust as needed)
    }
  }

  function erase() {
    if (displayText.length > 0) {
      displayText = displayText.slice(0, -1);
      jobTitleElement.textContent = displayText;
      setTimeout(erase, 100); // Erasing speed (adjust as needed)
    } else {
      currentTitleIndex++;
      if (currentTitleIndex >= jobTitles.length) {
        currentTitleIndex = 0;
      }
      setTimeout(typeWriter, 500); // Time before starting the next title (adjust as needed)
    }
  }

  type();
}

typeWriter();
