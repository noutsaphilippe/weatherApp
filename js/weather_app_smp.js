
const town = [{
    id:"0001",
    city:"tokyo",
    image:"weather_snowy.svg",
    temp:"5°C",
    comment:"overcast clouds",
    fl:"Feels like: 4",
    hum:"Humidity: 74%",
    ws:"Wind speed: 2.06"
    },{   
    id:"0002",
    city:"dublin",
    image:"weather_snowy.svg",
    temp:"7°C",
    comment:"overcast clouds",
    fl:"Feels like: 6",
    hum:"Humidity: 69%",
    ws:"Wind speed: 1.76"
    },{
    id:"0003",
    city:"paris",
    image:"images/partly_cloudy_night.svg",
    temp:"18°C",
    comment:"cold duck",
    fl:"Feels like: 5",
    hum:"Humidity: 78%",
    ws:"Wind speed: 1.56"
    },{
    id:"0004",
    city:"ottawa",
    image:"images/partly_cloudy_night.svg",
    temp:"25°C",
    comment:"moderate climate",
    fl:"Feels like: 12",
    hum:"Humidity: 59%",
    ws:"Wind speed: 1.12"
    },{
    id:"0005",
    city:"moscou",
    image:"weather_snowy.svg",
    temp:"6°C",
    comment:"snowstorm",
    fl:"Feels like: 3",
    hum:"Humidity: 81%",
    ws:"Wind speed: 2.21"
    },{
    id:"0006",
    city:"sydney",
    image:"images/partly_cloudy_day.svg",
    temp:"31°C",
    comment:"summer time",
    fl:"Feels like: 7",
    hum:"Humidity: 32%",
    ws:"Wind speed: 1.02"
    },{
    id:"0007",
    city:"rome",
    image:"images/partly_cloudy_day.svg",
    temp:"35°C",
    comment:"sunny day",
    fl:"Feels like: 10",
    hum:"Humidity: 18%",
    ws:"Wind speed: 1.066"
    },{
    id:"0008",
    city:"london",
    image:"images/partly_cloudy_night.svg",
    temp:"5°C",
    comment:"raining ice chunks",
    fl:"Feels like: 3",
    hum:"Humidity: 92%",
    ws:"Wind speed: 1.28"
    },{
    id:"0009",
    city:"helsinki",
    image:"images/partly_cloudy_day.svg",
    temp:"5°C",
    comment:"thick dark cloud",
    fl:"Feels like: 5",
    hum:"Humidity: 71%",
    ws:"Wind speed: 1. 82"
    },{
    id:"0010",
    city:"douala",
    image:"images/thunderstorm.svg",
    temp:"27°C",
    comment:"stormy weather",
    fl:"Feels like: 10",
    hum:"Humidity: 86%",
    ws:"Wind speed: 1.96"
    },{
    id:"0011",
    city:"pretoria",
    image:"images/rainy.svg",
    temp:"23°C",
    comment:"raining cats and dogs",
    fl:"Feels like: 11",
    hum:"Humidity: 85%",
    ws:"Wind speed: 1.84"
    }
];

const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const input = document.getElementById('city');
const form = document.querySelector('form');
const img = document.querySelector('.js-img');
const h1 = document.querySelector('.js-h1');
const h2 = document.querySelector('.js-h2');
const fl = document.querySelector('.js-fl');
const hum = document.querySelector('.js-hum');
const ws = document.querySelector('.js-ws');

let getHtml = document.querySelector('.js-error');
let saveInput = "";
let save = "";
let count = 0;
let getTown = '';

function submitPrevent() {
    form.addEventListener("submit", (event) => {
            event.preventDefault();
    }) 
}

function inputEvent() {
    input.addEventListener("input", () => {
            save = input.value;
            saveInput = save.toLowerCase();
            console.log(saveInput);
    }) 
}

function fillContent() {
    getTown = town[count];
    console.log(getTown);
    img.src = getTown.image;
    h1.textContent = getTown.temp;
    h2.textContent = getTown.comment;
    fl.textContent = getTown.fl;
    hum.textContent = getTown.hum;
    ws.textContent = getTown.ws;
}

inputEvent();
submitPrevent();

//-------------------------------methode amateur-------------------------
btn.addEventListener("click", () => {

    if (saveInput === "") {
        getHtml.innerHTML = "Please input a city in the loop";
    }
    if (saveInput === "tokyo"){
        count = 0; fillContent();
        }   
    if (saveInput === "dublin"){
        count = 1; fillContent();
        }   
    if (saveInput === "paris"){
        count = 2; fillContent();
        }   
    if (saveInput === "ottawa"){
        count = 3; fillContent();
        }   
    if (saveInput === "moscou"){
        count = 4; fillContent();
        }   
    if (saveInput === "sydney"){
        count = 5; fillContent();
        }   
    if (saveInput === "rome"){
        count = 6; fillContent();
        }   
    if (saveInput === "london"){
        count = 7; fillContent();
        }   
    if (saveInput === "helsinki"){
        count = 8; fillContent();
        }   
    if (saveInput === "douala"){
        count = 9; fillContent();
        }   
    if (saveInput === "pretoria"){
        count = 10; fillContent();
        }  
});