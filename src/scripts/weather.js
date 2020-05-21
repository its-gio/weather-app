import Weather from './getWeather';
import UI from './UI';
import toggleModal from './modalToggle';

const saveLocation = document.querySelector('#save-change');
const weather = new Weather('Los Angeles', 'CA');
const ui = new UI();

function getWeather() {
  weather.getWeather()
  .then(data => ui.display(data))
  .catch(err => console.error(err));
}

function handleSubmit(e) {
  e.preventDefault();
  const city = document.querySelector('#cityInput').value;
  const state = document.querySelector('#stateInput').value;

  weather.changeLocation(city, state);

  getWeather();
  toggleModal();
}

document.addEventListener('DOMContentLoaded', getWeather);
saveLocation.addEventListener('click', (e) => handleSubmit(e))