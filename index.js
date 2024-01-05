/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertbtn = document.querySelector(".conversion-button")
const userInputtedValue = document.querySelector(".metric-value")
const lengthConvertionEle = document.querySelector("#length-conversion-text")
const volumeConvertionEle = document.querySelector("#volume-conversion-text")
const massConvertionEle = document.querySelector("#mass-conversion-text")

convertbtn.addEventListener("click", function() {
    const usrValue = userInputtedValue.value;
    const mtrToFt = usrValue * 3.281;
    const ftToMtr = usrValue / 3.281;
    const ltrToGallon = usrValue * 0.264;
    const gallonToLtr = usrValue / 0.264;
    const kiloToPound = usrValue * 2.204;
    const poundToKilo = usrValue / 2.204;
    
    lengthConvertionEle.textContent = `
    ${usrValue} meters = ${mtrToFt.toFixed(3)} feet | ${usrValue} feet = ${ftToMtr.toFixed(3)} meters
    `
    volumeConvertionEle.textContent = `
    ${usrValue} liters = ${ltrToGallon.toFixed(3)} gallons | ${usrValue} gallons = ${gallonToLtr.toFixed(3)} liters
    `
    
    massConvertionEle.textContent = `
    ${usrValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${usrValue} pounds = ${poundToKilo.toFixed(3)} kilos
    `
})