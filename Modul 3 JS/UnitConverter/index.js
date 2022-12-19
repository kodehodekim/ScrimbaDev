// prettier-ignore

const inputField = document.getElementById("input");
const convertButton = document.getElementById("convertButton");
const lengthOutput = document.getElementById("length");
const massOutput = document.getElementById("mass");
const volumeOutput = document.getElementById("volume");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kgToPound = 2.204;

inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("convertButton").click();
  }
});

convertButton.addEventListener("click", function () {
  let baseValue = inputField.value;
  // Meter to feet and reversed.
  lengthOutput.innerHTML = `<h3 id="lengthEl">Length (Meter/Feet)</h3>
        <h4><span id="meterToFeet">${baseValue} meters = ${
    baseValue * meterToFeet
  } feet</span> | <span id="feetToMeter"> ${baseValue} feet = ${
    baseValue / meterToFeet
  } meters</span>`;
  // Liters to Gallons and reversed.
  volumeOutput.innerHTML = `<h3 id="volumeEl">Volume (Liters/Gallons)</h3>
  <h4><span id="litersToGallons">${baseValue} liters = ${
    baseValue * literToGallon
  } 
    gallons</span> | <span id="gallonsToLitres"> ${baseValue} gallons = ${
    baseValue / literToGallon
  } liters</span>`;
  // Kilo to pound and reversed.
  massOutput.innerHTML = `<h3 id="massEl">Mass (Kilograms/Pounds)</h3>
  <h4><span id="kiloToPound">${baseValue} kilos = ${
    baseValue * kgToPound
  } pounds</span> | <span id="poundsToKilo">${baseValue} pounds = ${
    baseValue / kgToPound
  } kilos</span></h4>`;
});
