const API_KEY = 'dbe88f19b79f55ab6a5298ce9e8f135b';

const button = document.querySelector('button');
const weatherDiv = document.getElementById('weatherData');

function getCurrentWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      weatherDiv.innerHTML = `<h1>Weather API</h1>
                              <p>Current weather in London: ${data.weather[0].main}</p>
                              <button>Get Current Weather</button>`;
    })
    .catch(error => {
      weatherDiv.innerHTML = `<h1>Weather API</h1>
                              <p>Error fetching weather data: ${error.message}</p>
                              <button>Get Current Weather</button>`;
    });
}

button.addEventListener('click', getCurrentWeather);
