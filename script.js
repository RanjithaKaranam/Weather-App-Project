const apiKey = "39e1c807c3652c6789181cfe630ffa97";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {

            // City name
            cityName.innerText = data.name;

            // Temperature
            temperature.innerText = `${data.main.temp} °C`;

            // Weather description
            description.innerText = data.weather[0].description;

            // Humidity
            humidity.innerText = `${data.main.humidity}%`;

            // Wind speed
            wind.innerText = `${data.wind.speed} km/h`;

            // Weather Icon
            const iconCode = data.weather[0].icon;

            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            weatherIcon.src = iconUrl;

        })
        .catch(error => {
            alert(error.message);
        });
});