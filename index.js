/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const convertBtn = document.getElementById("convertBtn")
const conValue = document.getElementById("conValue")

convertBtn.addEventListener("click", function() {
  const value = Number(conValue.value)
  length.textContent = `${value} meters / ${(value * 3.281).toFixed(2)} feet` 
  volume.textContent = `${value} liters / ${(value * .264).toFixed(2)} gallons`
  mass.textContent = `${value} kilograms / ${(value * 2.204).toFixed(2)} pounds`  
  conValue.value = "" //hello
})