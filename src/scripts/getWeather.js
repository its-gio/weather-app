export default class Weather {
  constructor(city, state) {
    this.proxy = "https://cors-anywhere.herokuapp.com/";
    this.dsAPI = process.env.DARK_SKY_KEY;
    this.geoAPI = process.env.GOECODE_KEY;
    this.city = city;
    this.state = state;
    this.locationCombined = '';
    this.long = null;
    this.latt = null;
  }

  async getWeather() {
    this.locationCombined = `${this.city.split(" ").join("+")}+${this.state}`;

    try {
      let getLongLatt = await fetch(`https://geocode.xyz/${this.locationCombined}?json=1`)
          .then(blob => blob.json())
      this.latt = getLongLatt.latt;
      this.long = getLongLatt.longt;

      const dsData = await fetch(`${this.proxy}https://api.darksky.net/forecast/${this.dsAPI}/${this.latt},${this.long}`)
        .then(blob => blob.json());

      return { city: this.city, state: this.state , ...dsData };
    } catch (err) {
      return console.error(err);
    }
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}