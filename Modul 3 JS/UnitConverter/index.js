// prettier-ignore

// Grabbing ID's from HTML
const inputField = document.getElementById("input");
const convertButton = document.getElementById("convertButton");
const metertoFeetEl = document.getElementById("meterToFeetElement");
const feetToMeterEl = document.getElementById("feetToMeterElement");
const literToGallonEl = document.getElementById("litersToGallonsElement");
const gallonsToLitresEl = document.getElementById("gallonsToLitresElement");
const kiloToPoundEl = document.getElementById("kiloToPoundElement");
const poundToKiloEl = document.getElementById("poundsToKiloElement");

// Eventlistener to run function when enter is pressed.
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("convertButton").click();
  }
});
// EventListener for click on button to calculate and change the HTML.
convertButton.addEventListener("click", function () {
  // Calculations
  const meterToFeet = 3.281;
  const literToGallon = 0.264;
  const kgToPound = 2.204;
  const baseValue = inputField.value;

  // Meter to feet - Feet to meter
  const meterFeet = (baseValue * meterToFeet).toFixed(2);
  const feetMeter = (baseValue / meterToFeet).toFixed(2);

  // Liter to gallons - Gallons to liters
  const litersGallon = (baseValue * literToGallon).toFixed(2);
  const gallonLiters = (baseValue / literToGallon).toFixed(2);

  // Kilos to Pounds - Pounds to Kilos
  const kiloPounds = (baseValue * kgToPound).toFixed(2);
  const poundKilo = (baseValue / kgToPound).toFixed(2);

  // Calculations pushed to HTML.
  // Meter to feet and reversed.
  metertoFeetEl.textContent = `${baseValue} Meters = ${meterFeet} Feet.`;
  feetToMeterEl.textContent = `${baseValue} Feet = ${feetMeter} Meters.`;

  // Liters to Gallons and reversed.
  literToGallonEl.textContent = `${baseValue} Liters = ${litersGallon} Gallons`;
  gallonsToLitresEl.textContent = `${baseValue} Gallons = ${gallonLiters} Liters.`;

  // Kilo to pound and reversed.
  kiloToPoundEl.textContent = `${baseValue} Kilo = ${kiloPounds} Pounds.`;
  poundToKiloEl.textContent = `${baseValue} Pounds = ${poundKilo} Kilo.`;
});
