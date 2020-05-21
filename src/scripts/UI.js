const icon = new Skycons();

export default class UI {
  constructor() {
    this.location = document.querySelector('#location');
    this.desc = document.querySelector('#desc');
    this.string = document.querySelector('#string');
    this.icon = document.querySelector('#icon');
    this.humidity = document.querySelector('#humidity');
    this.dewpoint = document.querySelector('#dewpoint');
    this.wind = document.querySelector('#wind');
  }

  display(data) {
    const { currently } = data;

    console.log(data);

    this.location.textContent = `${data.city}, ${data.state}`;
    this.desc.textContent = currently.summary;
    this.string.textContent = `${currently.temperature} F`;
    icon.set(this.icon, currently.icon);
    icon.play();
    this.humidity.textContent = currently.humidity;
    this.dewpoint.textContent = currently.dewPoint;
    this.wind.textContent = currently.windSpeed;
  }
}