import Weather from './getWeather';
import UI from './UI';

const weather = new Weather('Los Angeles', 'CA');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(data => ui.display(data))
    .catch(err => console.error(err));
}