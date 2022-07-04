console.log("Jay Shree Ram");

// API Key - a25833c8c704edfa54057bcc0af4f038


// -----------------> Functions <------------------//
function randomNumberGenerator()
{
    return Math.floor(Math.random()*(6)+(1));
}

let container = document.getElementById("container");
// console.log(container);

container.style.background = `url(./images/bg${randomNumberGenerator()}.jpg)`;
container.style.backgroundPosition = `center`;
container.style.backgroundSize = `cover`;