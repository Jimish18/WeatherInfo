console.log("Jay Shree Ram");

// API Key - a25833c8c704edfa54057bcc0af4f038
// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}

// ----------------> Grab Elements <---------------------//
let timeDetailsDisplay = document.getElementsByClassName("timeDetailsDisplay");



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

// ---------------------> Time And Date Menipulation <---------------//
setInterval(() => 
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
    
}, 1000);


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