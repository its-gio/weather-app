import Weather from './getWeather';

const weather = new Weather('Los Angeles', 'CA');

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(data => console.log(data))
    .catch(err => console.error(err));
}