console.log("Jay Shree Ram");

// API Key - a25833c8c704edfa54057bcc0af4f038
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}

// ----------------> Grab Elements <---------------------//
let timeDetailsDisplay = document.getElementsByClassName("timeDetailsDisplay");
let temperature = document.getElementById("temperature");
let temperatureMobiles = document.getElementById("temperatureMobiles");
let cityDisplay = document.getElementsByClassName("cityDisplay");
let weatherNature = document.getElementsByClassName("weatherNature");
let weatherNatureImgDisplay = document.getElementsByClassName("weatherNatureImgDisplay");
console.log(weatherNatureImgDisplay);

// -----------------> Functions <------------------//
function randomNumberGenerator()
{
    return Math.floor(Math.random()*(6)+(1));
}

function hourAndMinuteSymmetry(digit)
{
    if(digit < 10)
    {
        return `0${digit}`;
    }
    else
    {
        return `${digit}`;
    }
}


// -------> Time And Date Menipulation Function<-------//
function timeAndDateManipulation()
{
    let newDate = new Date();
    let date = newDate.getDate();
    
    let monthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month = monthsArray[newDate.getMonth()];  

    let year = newDate.getFullYear().toString().slice(2);

    let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = dayArray[newDate.getDay()];

    let hour = hourAndMinuteSymmetry(newDate.getHours());
    let minutes = hourAndMinuteSymmetry(newDate.getMinutes()) ;    

    for(element of timeDetailsDisplay)
    {
        element.innerHTML = `${hour}:${minutes} - ${day}, ${date} ${month} '${year}`;
    }
}

function getWeatherInfo(byCityName,cityName)
{
    let url;

    if(byCityName == true)
    {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a25833c8c704edfa54057bcc0af4f038&units=metric`;

        fetch(url,{
            method : `GET`,
        }).then(response => response.json())
        .then((data) =>
        { 
            if(data.cod == 200)
            {
                console.log(data);

                // Display Temperature
                let temp = data.main.temp.toString().slice(0,2);
                temperature.innerHTML = `${temp}<span>°</span>`;
                temperatureMobiles.innerHTML = `${temp}<span>°</span>`;

                // Display City
                for(element of cityDisplay)
                {
                    element.innerText = `${data.name}`;
                }

                let weatherNatureType = data.weather[0].main;

                // Display Weather Nature
                for(element of weatherNature)
                {
                    element.innerText = `${weatherNatureType}`;
                }

                // Display Weather Nature Image
                for(element of weatherNatureImgDisplay)
                {
                    if(weatherNatureType == `Thunderstorm`)
                    {
                        element.src = `./images/icons/weatherNature/thunderstorm.png`;
                    }
                    else if(weatherNatureType == `Drizzle`)
                    {
                        element.src = `./images/icons/weatherNature/drizzle.png`;
                    }
                    else if(weatherNatureType == `Rain`)
                    {
                        element.src = `./images/icons/weatherNature/rainy-day.png`;
                    }
                    else if(weatherNatureType == `Snow`)
                    {
                        element.src = `./images/icons/weatherNature/snowy.png`;
                    }
                    else if(weatherNatureType == `Mist` || weatherNatureType == `Fog` || weatherNatureType == `Smoke` || weatherNatureType == `Tornado`)
                    {
                        element.src = `./images/icons/weatherNature/cloudy-day.png`;
                    }
                    else if(weatherNatureType == `Clear`)
                    {
                        element.src = `./images/icons/weatherNature/sun.png`;
                    }
                    else if(weatherNatureType == `Clouds`)
                    {
                        element.src = `./images/icons/weatherNature/cloudy-day.png`;
                    }
                    else
                    {
                        element.src = `./images/icons/weatherNature/cloudy.png`;
                    }
                }
            }
            else
            {
                alert(`${data.message}\nEnter Valid City Name`);
            }
        })
    }
}

// ---------------------> Time And Date Menipulation <---------------//
timeAndDateManipulation();
setInterval(timeAndDateManipulation, 60000);


getWeatherInfo(true,`Ahmedabad`);















































navigator.geolocation.getCurrentPosition(function(position)
{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
},function()
{
    console.log(`sorry ! Access denied.`);
})



// navigator.geolocation.getCurrentPosition(function(position) {
//     alert('allow');
// }, function() {
//     alert('deny');
// });