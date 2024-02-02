class convertir {
  temperature = null;
  result = null;

  constructor(tempetature) {
    this.temperature = tempetature;
  }

  fahrenheitToCelcius(temperature) {
    this.result = ((temperature - 32) * 5) / 9;
    return this.result.toFixed(2);
  }

  fahrenheitToKelvin(temperature) {
    this.result = ((temperature - 32) * 5) / 9 + 273.15;
    return this.result.toFixed(2);
  }

  celciusToFahrenheit(temperature) {
    this.result = (temperature * 9) / 5 + 32;
    return this.result.toFixed(2);
  }

  celciusToKelvin(temperature) {
    this.result = temperature + 273.15;
    return this.result.toFixed(2);
  }

  kelvinToCelcius(temperature) {
    this.result = temperature - 273.15;
    return this.result.toFixed(2);
  }

  kelvinToFahrenheit(temperature) {
    this.result = ((temperature - 273.15) * 9) / 5 + 32;
    return this.result.toFixed(2);
  }
}

console.log(new convertir().kelvinToFahrenheit(12));

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const converter = new convertir();


/*Aqui se crea un evento que verificará si el valor del select seleccionado
es igual al otro select, si es asi entonces se cambiara de forma aleatoria
la opcion del segundo select*/
select1.addEventListener("change", (event) => {
  if (event.target.value == select2.value) {
    let availableOptions = ["Celcius", "Fahrenheit", "Kelvin"];
    let randomNumber = Math.floor(Math.random() * availableOptions.length);
    select2.value = availableOptions[randomNumber];
    select2.text = availableOptions[randomNumber];
    console.log(event.target.value, select2.value);

  }
  Calculations();
});
/*Aqui se crea un evento que verificará si el valor del select seleccionado
es igual al otro select, si es asi entonces se cambiara de forma aleatoria
la opcion del segundo select*/


select2.addEventListener("change", (event) => {
  if (event.target.value == select1.value) {
    let availableOptions = ["Celcius", "Fahrenheit", "Kelvin"];
    let randomNumber = Math.floor(Math.random() * availableOptions.length);
    select1.value = availableOptions[randomNumber];
    select1.text = availableOptions[randomNumber];
    console.log(event.target.value);
  }
  Calculations();
});

/*Este evento se genera al momento en que se escribe algun numero y asi proceder
a hacer el calculo*/
input1.addEventListener("keyup", (event) => {
  Calculations();
  console.log(select1.value, select2.value);
});
  
//Esta funcion contiene cada una de las combinaciones de calculo
function Calculations() {
  if (select1.value == "Celcius" && select2.value == "Fahrenheit") {
    input2.value = converter.celciusToFahrenheit(Number(input1.value));
  }

  if (select1.value == "Celcius" && select2.value == "Kelvin") {
    input2.value = converter.celciusToKelvin(Number(input1.value));
  }

  if (select1.value == "Fahrenheit" && select2.value == "Celcius") {
    input2.value = converter.fahrenheitToCelcius(Number(input1.value));
  }

  if (select1.value == "Fahrenheit" && select2.value == "Kelvin") {
    input2.value = converter.fahrenheitToKelvin(Number(input1.value));
  }

  if (select1.value == "Kelvin" && select2.value == "Celcius") {
    input2.value = converter.kelvinToCelcius(Number(input1.value));
  }

  if (select1.value == "Kelvin" && select2.value == "Fahrenheit") {
    input2.value = converter.kelvinToCelcius(Number(input1.value));
  }
}


