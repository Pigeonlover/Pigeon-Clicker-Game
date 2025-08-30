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
  document.getElementById("total-sps-amount").textContent =
    Math.round(totalSPS * 10) / 10;
  seedsAmount += totalSPS;
  document.getElementById("seed-amount").textContent = Math.floor(seedsAmount);

  totalClicks =
    1 + barleyIncreaseClicks + cornIncreaseClicks + sunflowerIncreaseClicks;
}, 1000);

//when the user clicks on the pigeon, seedsAmount decrease by 1. The poop amount then goes up by 1 after 2 seconds.

document.getElementById("pigeon-image").addEventListener("click", function () {
  if (seedsAmount > 0) {
    seedsAmount -= totalClicks;
    document.getElementById("seed-amount").textContent =
      Math.floor(seedsAmount);
    setTimeout(function () {
      poopAmount += totalClicks;
      document.getElementById("poop-amount").textContent =
        Math.floor(poopAmount);
    }, 2000);
  } else {
    alert("You don't have enough seeds!");
  }
});

// Barley shop item button: when clicked, will decrease poop amount by cost. Cost then increases by 10%. Increases barleySPS by 0.1. Increase totalClicks by 0.2 every purchase.

document.getElementById("barley-button").addEventListener("click", function () {
  let barleyCost = document.getElementById("barley-button-cost").textContent;
  if (poopAmount >= barleyCost) {
    poopAmount -= barleyCost;
    document.getElementById("poop-amount").textContent = Math.floor(poopAmount);

    barleyCost = barleyCost * 1.1;
    document.getElementById("barley-button-cost").textContent =
      Math.floor(barleyCost);

    barleySPS += 0.1;
    document.getElementById("barley-sps-amount").textContent =
      Math.round(barleySPS * 10) / 10;

    barleyIncreaseClicks += 0.2;
    document.getElementById("barley-clicks-amount").textContent =
      Math.round(barleyIncreaseClicks * 10) / 10;
  } else {
    alert("You don't have enough poop!");
  }
});

// Corn shop item button
document.getElementById("corn-button").addEventListener("click", function () {
  let cornCost = document.getElementById("corn-button-cost").textContent;
  if (poopAmount >= cornCost) {
    poopAmount -= cornCost;
    document.getElementById("poop-amount").textContent = Math.floor(poopAmount);

    cornCost = cornCost * 1.15;
    document.getElementById("corn-button-cost").textContent =
      Math.floor(cornCost);

    cornSPS += 0.3;
    document.getElementById("corn-sps-amount").textContent =
      Math.round(cornSPS * 10) / 10;

    cornIncreaseClicks += 0.35;
    document.getElementById("corn-clicks-amount").textContent =
      Math.round(cornIncreaseClicks * 10) / 10;
  } else {
    alert("You don't have enough poop!");
  }
});

// Sunflower shop item button

document
  .getElementById("sunflower-button")
  .addEventListener("click", function () {
    let sunflowerCost = document.getElementById(
      "sunflower-button-cost"
    ).textContent;
    if (poopAmount >= sunflowerCost) {
      poopAmount -= sunflowerCost;
      document.getElementById("poop-amount").textContent =
        Math.floor(poopAmount);

      sunflowerCost = sunflowerCost * 1.2;
      document.getElementById("sunflower-button-cost").textContent =
        Math.floor(sunflowerCost);

      sunflowerSPS += 0.4;
      document.getElementById("sunflower-sps-amount").textContent =
        Math.round(sunflowerSPS * 10) / 10;

      sunflowerIncreaseClicks += 0.45;
      document.getElementById("sunflower-clicks-amount").textContent =
        Math.round(sunflowerIncreaseClicks * 10) / 10;
    } else {
      alert("You don't have enough poop!");
    }
  });

//=============================================================

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
