let fahr, celsius;
let tempSection = document.querySelector(".degree-section");
let degree = document.querySelector(".temp-degree");
let tempType = document.querySelector(".temp-type");
let description = document.querySelector(".temp-description");
let timezone = document.querySelector(".location-timezone");
let skyconEl = document.querySelector("#skycon");
let errMessage = document.querySelector("#warning");
let long, lat;

function getPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

function setIcon(icon, iconID) {
  let skycon = new Skycons({ color: "white" });
  let currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycon.add(iconID, Skycons[currentIcon]);
  return skycon.play();
}

function getJson(long, lat) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = `${proxy}https://api.darksky.net/forecast/${
    config.WEATHER_KEY
  }/${lat},${long}`;

  fetch(api)
    .then(blob => blob.json())
    .then(data => {
      const { temperature, summary, icon } = data.currently;
      let apiTimezone = data.timezone.replace(/_/g, " ");
      degree.innerHTML = temperature;
      fahr = temperature;
      celsius = ((fahr - 32) * (5 / 9)).toFixed(2);
      description.innerHTML = summary;
      timezone.innerHTML = apiTimezone;
      setIcon(icon, skyconEl);
    })
    .catch(err => console.log(err));
}

getPosition()
  .then(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    getJson(long, lat);
  })
  .catch(err => {
    console.log(err);
    errMessage.innerHTML = "Please Accept Geolocation";
    errMessage.classList = "err";
  });

// Wes Bos f = c && c = f;
tempSection.addEventListener("click", () => {
  if (tempType.textContent === "F") {
    tempType.textContent = "C";
    degree.textContent = celsius;
  } else {
    tempType.textContent = "F";
    degree.textContent = fahr;
  }
});
