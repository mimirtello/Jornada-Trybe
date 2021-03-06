//Exercicio 3 

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet() // imprime Marte depois de 4 segundos

//Exercicio 4

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature=()=>{
  const currentTemperature = getMarsTemperature();
  setTimeout(() => {
    console.log(`Mars temperature is: ${currentTemperature} degree Celsius`)
  }, messageDelay);
};
// crie a função sendMarsTemperature abaixo

sendMarsTemperature();
 // imprime "Mars temperature is: 20 degree Celsius", por exemplo

 //Exercicio 5

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperatures = (onSuccess) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => onSuccess(currentTemperature), messageDelay());
  };
// definição da função sendMarsTemperature...

sendMarsTemperatures(temperatureInFahrenheit); 
// imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperatures(greet); 
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo