const weather = document.querySelector(".js-weather");

const APIKey = "3ee6c1e7c8ad391cdd3c90a336f6105b";

function getWeather(latitude, longitude) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}℃ @ ${place}`;
    });
}

function savecoords(coordsObj) {
  localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  savecoords(coordsObj);
}

function handleGeoError() {
  console.log("Cant access geo lacation");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadCoords = localStorage.getItem("coords");
  if (loadCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
