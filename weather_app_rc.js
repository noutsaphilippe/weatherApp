
//-------------------------------real case methode-------------------------

const apiKey = "84c61a00644bae6ec0181f577bbf7c72";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=10.99&lon=44.34&appid=${}&units=metric";
let getInputRC = '';

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`); 
    const data = await response.json();
    console.log(data);

    const icon = document.querySelector(".js-imgRC");
    document.querySelector(".js-h1RC").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".js-h2RC").innerHTML = data.weather[0].description;
    document.querySelector(".js-flRC").innerHTML = `Feels like: ${data.main.feels_like}`; 
    document.querySelector(".js-humRC").innerHTML = `Humidity: ${ data.main.humidity}%`;
    document.querySelector(".js-wsRC").innerHTML = `Wind speed: ${data.wind.speed}m/s`;

    if (data.weather[0].main === "Clouds") {
        icon.src = "images/partly_cloudy_night.svg";
    } 
    else if (data.weather[0].main === "Clear") {
        icon.src = "images/clear_day.svg";
    }
    else if (data.weather[0].main === "Rain") {
        icon.src = "images/rainy.svg";
    }
    else if (data.weather[0].main === "Drizzle") {
        icon.src = "weather_snowy.svg.svg";
    }
    else if (data.weather[0].main === "Mist") {
        icon.src = "images/thunderstorm.svg";
    }

}

const btnRC = document.getElementById('btnRC');
const inputRC = document.querySelector(".js-inputRC");
const formRC = document.querySelector('form');
const error = document.querySelector(".js-errorRC");
console.log(formRC)

function preventRefresh() {
    formRC.addEventListener("submit",(event1)=>{
        event1.preventDefault();
    })
};
function inputValue() {
    if (inputRC.value !== "") {
        getInputRC = inputRC.value;
        console.log(getInputRC);
    } else {
        error.textContent = "Please enter a name of a city";
        console.error("Please enter a name of a city");
    }
}

preventRefresh();

btnRC.addEventListener("click", () => {
    inputValue();
    checkWeather(getInputRC);
    
})

