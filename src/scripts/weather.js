import Weather from './getWeather';

const weather = new Weather('Los Angeles', 'CA');

weather.getWeather()
  .then(data => console.log(data))
  .catch(err => console.error(err));