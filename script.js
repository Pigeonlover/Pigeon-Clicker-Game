//
console.log("hello world");

//game variables

let seedsAmount = 0;
let totalSPS = 0;
let totalClicks = 1;

let poopAmount = 0;

let barleySPS = 1;
let barleyIncreaseClicks = 0;

let cornSPS = 0;
let cornIncreaseClicks = 0;

let sunflowerSPS = 0;
let sunflowerIncreaseClicks = 0;

// Update the barley shop item SPS amount to be the same as the variable barleySPS

document.getElementById("barley-sps-amount").textContent = barleySPS;

// totalSPS = barleySPS + cornSPS + sunflowerSPS. Updated every second.

setInterval(function () {
  totalSPS = barleySPS + cornSPS + sunflowerSPS;
  document.getElementById("total-sps-amount").textContent = totalSPS;
  seedsAmount += totalSPS;
  document.getElementById("seed-amount").textContent = seedsAmount;
}, 1000);

//when the user clicks on the pigeon, seedsAmount decrease by 1. The poop amount then goes up by 1 after 2 seconds.

document.getElementById("pigeon-image").addEventListener("click", function () {
  if (seedsAmount > 0) {
    seedsAmount -= totalClicks;
    document.getElementById("seed-amount").textContent = seedsAmount;
    setTimeout(function () {
      poopAmount += totalClicks;
      document.getElementById("poop-amount").textContent = poopAmount;
    }, 2000);
  } else {
    alert("You don't have enough seeds!");
  }
});

// Barley shop item button: when clicked, will decrease poop amount by cost. Cost then increases by 10% rounded up. Increases SPS by 1.

//you will need functions to contain the game logic
//to create the logic for the shop upgrades:
//- OPTION 1: you could have a function per upgrade
//- OPTION 2: you could have a reusable function that works for ALL the upgrades

//Tip on local storage:
// - Make sure the local storage values are updated after the user buys an upgrade or when the user clicks on the cookie

//=============================================================

//data storage

// let stats = {
//   cookieCount: 0,
//   cps: 0,
// };

//if there is data in local storage, update stats with this data, so the user picks it up where they left off

//==============================================================

//shop upgrades

//fetch the upgrades from the API: "https://cookie-upgrade-api.vercel.app/api/upgrades"

//To create multiple DOM elements in a more convenient way, you can use a loop!

//TODO: create DOM elements to contain the upgrades in the shop
// create an element
// assign the value to its text content
// append it to the DOM

//after you complete this task, you should see the upgrades on your page

//================================================================

//the interval

setInterval(function () {
  cookieCount += cps; //cookieCount = cookieCount + cps
  //update the DOM to reflect the changes in the values
  //save the values in local storage
}, 1000);
