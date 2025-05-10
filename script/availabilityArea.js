const servedAreas = [
  "Jakai",
  "Daisy Flower",
  "gichagi",
  "mugacha",
  "sir george",
  "number nane",
  "kihara",
];

function checkAvailability() {
  const input = document.getElementById("addressInput");
  const resultMessage = document.getElementById("resultMessage");
  const address = input.value.trim().toLowerCase();

  // Clear previous results
  resultMessage.classList.add("hidden");

  if (!address) {
    showResult("Please enter an address", "text-red-500");
    return;
  }

  // Check if address contains any of the served areas
  const isAvailable = servedAreas.some((area) => address.includes(area));

  if (isAvailable) {
    showResult("Service is available in your area!", "text-green-500");
  } else {
    showResult(
      "Sorry, service is not yet available in your area",
      "text-red-500"
    );
  }
}

function showResult(message, colorClass) {
  const resultMessage = document.getElementById("resultMessage");
  resultMessage.textContent = message;
  resultMessage.className = `mt-2 text-sm ${colorClass}`;
  resultMessage.classList.remove("hidden");
}

// Optional: Add keyboard support (Enter key)
document
  .getElementById("addressInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkAvailability();
    }
  });
