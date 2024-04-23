const inputFahrenheit = document.getElementById("inputFahrenheit") // constructor IO Fahrenheit
const outputFahrenheit = document.getElementById("outputFahrenheit")
const inputCelcius = document.getElementById("inputCelcius") // constructor IO Celcius
const outputCelcius = document.getElementById("outputCelcius")
const buttonConvertF = document.getElementById("resultF") // constructor Button convert Fahrenheit
const buttonConvert = document.getElementById("result") // constructor Button convert Celcius
const buttonReset = document.getElementById("reset") // Reset button div Celcius
const buttonResetF = document.getElementById("resetF") // Reset button div Fahrenheit
const switchMode = document.getElementById("reverse") // Reverse button C to F / F to C
const getFormulaCelcius = document.getElementById("formulaC") // constructor print Formula
const getFormulaFahrenheit = document.getElementById("formulaF") // constructor print Formula

// const error = document.getElementById("error")
// const modeText1 = document.getElementById("modeText1")
// const modeText2 = document.getElementById("modeText2")


// <--------------------- VALIDATION --------------------->

// Regex Allow input : number;dot;minus(-) Celcius
inputCelcius.onchange = inputCelcius.oninput = () => {   
inputCelcius.value = inputCelcius.value.replace(/[^\d\.\-]/g, "") .replace(/\./, "x") .replace(/\./g, "") .replace(/x/, "."); 
}

// Regex Allow input : number;dot;minus(-) Fahrenheit
inputFahrenheit.onchange = inputFahrenheit.oninput = () => {   
inputFahrenheit.value = inputFahrenheit.value.replace(/[^\d\.-]/g, "") .replace(/\./, "x") .replace(/\./g, "") .replace(/x/, "."); 
}

// Disable button convert when input is Null Celcius
function disabledInput()
  {
    if(inputCelcius.value === '') {
      buttonConvert.disabled = true;
      }else {
      buttonConvert.disabled = false;
    }
 }

// Disable button convert when input is Null Fahrenheit
 function disabledInputF() 
 {
  if(inputFahrenheit.value === '') {
    buttonConvertF.disabled = true;
    }else {
    buttonConvertF.disabled = false;
  }
 }
// <--------------------- END VALIDATION --------------------->

// <--------------------- FUNCTION BUTTON --------------------->

// Button Reset div Celcius
buttonReset.addEventListener("click", () => {
  inputCelcius.value = '';
  outputFahrenheit.value = '';
  getFormulaCelcius.innerHTML = '';
  if (inputCelcius.value === ''){
    buttonConvert.disabled = true;
  }else {
    buttonConvert.disabled = false;
  }
},)

// Button Reset div Fahrenheit
buttonResetF.addEventListener("click", () => {
  inputFahrenheit.value = '';
  outputCelcius.value = '';
  getFormulaFahrenheit.innerHTML = '';
  if (inputFahrenheit.value === ''){
    buttonConvertF.disabled = true;
  }else {
    buttonConvertF.disabled = false;
  }
})

// Button Swap div Celcius - Fahrenheit to div Fahrenheit - Celcius
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
// Validate input if null
   if (inputCelcius === ''){
    alert("Inputan Celcius (° C) tidak boleh 'NULL' :)")
    }else {
      let formulaCF = (inputCelcius * (9 / 5 )) + 32;
      let resultCF = document.getElementById("outputFahrenheit").value = formulaCF.toFixed(2);
// Print formula Celcius to Fahrenheit (0 °C × 9/5) + 32 = 32 °F
    getFormulaCelcius.innerHTML = '(' + inputCelcius + ' °C × 9/5) + 32 = ' + resultCF+' °F'; 
  }
 }

 function fc()
 {
   const inputFahrenheit = document.getElementById("inputFahrenheit").value;
// Validate input if null
   if (inputFahrenheit === ''){
    alert("Inputan Fahrenheit (° F) tidak boleh 'NULL' :)")
    }else {
      let formulaFC = (inputFahrenheit - 32 ) * (5 / 9);
      let resultFC = document.getElementById("outputCelcius").value = formulaFC.toFixed(2);
// Print formula Fahrenheit to Celcius (0 °C × 9/5) + 32 = 32 °F
    getFormulaFahrenheit.innerHTML = '(' + inputFahrenheit + ' °F -32) × (5/9)  = ' + resultFC +' °C';
  }
}

// <--------------------- END FUNCTION BUTTON --------------------->
