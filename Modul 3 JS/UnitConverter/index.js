// prettier-ignore

// Grabbing ID's from HTML
const inputField = document.getElementById("input");
const convertButton = document.getElementById("convertButton");
// Length - Meter / Feet
const metertoFeetEl = document.getElementById("meterToFeetElement");
const feetToMeterEl = document.getElementById("feetToMeterElement");
// Volume - Liters / Gallons
const literToGallonEl = document.getElementById("litersToGallonsElement");
const gallonsToLitresEl = document.getElementById("gallonsToLitresElement");
// Mass - Kilo / Pound
const kiloToPoundEl = document.getElementById("kiloToPoundElement");
const poundToKiloEl = document.getElementById("poundsToKiloElement");

// Calculation values
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kgToPound = 2.204;

// Eventlistener to run function when enter is pressed.
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("convertButton").click();
  }
});
// EventListener for click on button and change the HTML.
convertButton.addEventListener("click", function () {
  const baseValue = inputField.value;
  // Meter to feet and reversed.
  metertoFeetEl.textContent = `${baseValue} Meters = ${
    baseValue * meterToFeet
  } Feet.`;
  feetToMeterEl.textContent = `${baseValue} Feet = ${
    baseValue / meterToFeet
  } Meters.`;

  // Liters to Gallons and reversed.
  literToGallonEl.textContent = `${baseValue} Liters = ${
    baseValue * literToGallon
  } Gallons`;
  gallonsToLitresEl.textContent = `${baseValue} Gallons = ${
    baseValue / literToGallon
  } Liters.`;

  // Kilo to pound and reversed.
  kiloToPoundEl.textContent = `${baseValue} Kilo = ${
    baseValue * kgToPound
  } Pounds.`;
  poundToKiloEl.textContent = `${baseValue} Pounds = ${
    baseValue / kgToPound
  } Kilo.`;
});
