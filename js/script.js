// constructor IO Fahrenheit
const inputFahrenheit = document.getElementById("inputFahrenheit")
const outputFahrenheit = document.getElementById("outputFahrenheit")
// constructor IO Celcius
const inputCelcius = document.getElementById("inputCelcius")
const outputCelcius = document.getElementById("outputCelcius")
// constructor Button
const buttonConvert = document.getElementById("result") // Convert Button
const buttonReset = document.getElementById("reset") // Reset button div Celcius
const buttonResetF = document.getElementById("resetF") // Reset button div Fahrenheit
const switchMode = document.getElementById("reverse")
// constructor print Formula
const getFormulaCelcius = document.getElementById("formulaC")
const getFormulaFahrenheit = document.getElementById("formulaF")

const error = document.getElementById("error")
// const modeText1 = document.getElementById("modeText1")
// const modeText2 = document.getElementById("modeText2")

// <----------------- SCRIPT ----------------->

// Regex Allow input number & dot only Celcius
const valInputC = document.getElementById("inputCelcius");
valInputC.onchange = valInputC.oninput = () => {   
valInputC.value = valInputC.value.replace(/[^\d\.]/g, "") .replace(/\./, "x") .replace(/\./g, "") .replace(/x/, "."); 
}

// Regex Allow input number & dot only Fahrenheit
const valInputF = document.getElementById("inputFahrenheit");
valInputF.onchange = valInputF.oninput = () => {   
valInputF.value = valInputF.value.replace(/[^\d\.]/g, "") .replace(/\./, "x") .replace(/\./g, "") .replace(/x/, "."); 
}

// Button Reset div Celcius
buttonReset.addEventListener("click", () => {

    // Melakukan reset ke value awal atau semula
    error.innerHTML = ''
    inputCelcius.value = ''
    outputFahrenheit.value = ''
    getFormulaCelcius.innerHTML = ''
})

// Button Reset div Fahrenheit
buttonResetF.addEventListener("click", () => {

  // Melakukan reset ke value awal atau semula
  error.innerHTML = ''
  outputCelcius.value = ''
  inputFahrenheit.value = ''
  getFormulaFahrenheit.innerHTML = ''
})


function swap() {
  let divCF = document.getElementById("divCF");
  let divFC = document.getElementById("divFC");

  if ( divFC.style.display == "none") {
    divCF.style.display = "none";
    divFC.style.display = "block";
  }else {
    divCF.style.display = "block";
    divFC.style.display = "none";
  }
}

 function cf()
 {
   const inputCelcius = document.getElementById("inputCelcius").value;
   let formulaCF = (inputCelcius * (9 / 5 )) + 32;
   let resultCF = document.getElementById("outputFahrenheit").value = formulaCF.toFixed(2);

    //  Print formula Celcius to Fahrenheit (0 °C × 9/5) + 32 = 32 °F
  getFormulaCelcius.innerHTML = '(' + inputCelcius + ' °C × 9/5) + 32 = ' + resultCF+' °F';  
 }

 function fc()
 {
   const inputFahrenheit = document.getElementById("inputFahrenheit").value;
   let formulaFC = (inputFahrenheit - 32 ) * (5 / 9);
   let resultFC = document.getElementById("outputCelcius").value = formulaFC.toFixed(2);

  //  Print formula Fahrenheit to Celcius (0 °C × 9/5) + 32 = 32 °F
  getFormulaFahrenheit.innerHTML = '(' + inputFahrenheit + ' °F -32) × (5/9)  = ' + resultFC +' °C';
 }









// if (tempType.value === "fahrenheit") {
//     const CelciusToFahrenheit = (inputValue * 1.8) + 32;
//     celsiusElem.innerHTML = `${CelciusToFahrenheit} &deg;F`;
//   } else if (tempType.value === "celcius") {
//     const FahrenheitToCelsius  = (inputValue - 32) * (1.8);
//     celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
//   }