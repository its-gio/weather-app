export default class Weather {
  constructor(city, state) {
    this.proxy = "https://cors-anywhere.herokuapp.com/";
    this.dsAPI = process.env.DARK_SKY_KEY;
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    try {
      const response = await fetch(`${this.proxy}https://api.darksky.net/forecast/${this.dsAPI}/34.00469,-118.30136`)
        .then(blob => blob.json());
      
      return response.currently;
    } catch (err) {
      return console.error(err);
    }
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}