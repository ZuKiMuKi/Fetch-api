//fetching nasa api
const API_KEY = 'DEMO_KEY'; //register api key at https://api.nasa.gov/#signUp
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

var APOD_Data;
const Title = document.getElementById('title');
const CurrentDate = document.getElementById('date');
const Explanation = document.getElementById('explanation');
const Image = document.getElementById('image');

//call function on start
GetAPOD().then(data => {
    APOD_Data = data;
    DisplayData(APOD_Data);
})

//display data on html
function DisplayData(apod){
    Title.innerHTML = apod.title;
    CurrentDate.innerHTML = apod.date;
    Explanation.innerHTML = apod.explanation;
    Image.src = apod.url;
    console.log(apod);
}

//getting data
function GetAPOD(){
    return fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        return data;
    })
}

//dark mode toggle and localstorage
const button = document.querySelector('#switch');

//check dark mode on start
CheckDarkMode();

//no transistion at start
var count = 0;

if(count == 0){
    document.body.classList.add("notransistion");
    count++;
}

var CurrentMode;

//onclick event
function DarkMode(){
    document.body.classList.remove("notransistion");
    if(CurrentMode === "light"){
        localStorage.setItem("mode", "dark");
    }
    else if(CurrentMode === "dark"){
        localStorage.setItem("mode", "light");
    }
    CheckDarkMode();
}
//change html element acording to local storage value
function CheckDarkMode(){
    CurrentMode = localStorage.getItem("mode");
    
    if(CurrentMode === "dark"){
        button.classList.add('checked');
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
    else if(CurrentMode === "light"){
        button.classList.remove('checked');
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
    else if(CurrentMode === null){
        localStorage.setItem("mode", "light");
    }
}
