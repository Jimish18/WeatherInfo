console.log("Jay Shree Ram");


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