let celciusInput = document.getElementById("celcius1");
let fahrenheitInput = document.getElementById("fahrenheit1");

let kelvinInput = document.getElementById("kelvin1");

let btn = document.getElementById("button1");


function roundNumber(number){
    return Math.round(number*100)/100;
}

/*Celsius to Fahrenheit and kelvin */
celciusInput.addEventListener("input", () => {
    let cTemp = (celciusInput.value);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})

/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener("input", () => {
    let fTemp = (fahrenheitInput.value);
    let cTemp = (fTemp-32) * (5/9);
    let kTemp = (fTemp -32) * (5/9) + 273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
})

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener("input", () => {
    let kTemp = (kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
})


btn.addEventListener("click", () => {
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
})

