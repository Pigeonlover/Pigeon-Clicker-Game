//
console.log("hello world");

//==============================================================
// The game's variables, stored in an object so later they can be stored as JSON in local storage

let gameData = {
  seedsAmount: 0,
  totalSPS: 0,
  totalClicks: 1,

  poopAmount: 0,

  barleyCost: 100,
  barleySPS: 1,
  barleyIncreaseClicks: 0,

  cornCost: 500,
  cornSPS: 0,
  cornIncreaseClicks: 0,

  sunflowerCost: 1000,
  sunflowerSPS: 0,
  sunflowerIncreaseClicks: 0,
};
//
//

//==============================================================
// if there is already saved data in local storage, update the gameData object. This way the user can continue where they left off.

if (localStorage.getItem("gameData")) {
  gameData = JSON.parse(localStorage.getItem("gameData"));
}
//
//

//==============================================================
// Destructure gameData for easier access to variables.

let {
  seedsAmount,
  totalSPS,
  totalClicks,
  poopAmount,
  barleyCost,
  barleySPS,
  barleyIncreaseClicks,
  cornCost,
  cornSPS,
  cornIncreaseClicks,
  sunflowerCost,
  sunflowerSPS,
  sunflowerIncreaseClicks,
} = gameData;
//
//

//==============================================================
// Update the DOM with the game data from local storage (stuff will show properly when page is loaded/refreshed).

document.getElementById("barley-button-cost").textContent =
  Math.floor(barleyCost);
document.getElementById("corn-button-cost").textContent = Math.floor(cornCost);
document.getElementById("sunflower-button-cost").textContent =
  Math.floor(sunflowerCost);

document.getElementById("barley-sps-amount").textContent = barleySPS;
document.getElementById("barley-clicks-amount").textContent =
  Math.round(barleyIncreaseClicks * 10) / 10;

document.getElementById("corn-sps-amount").textContent = cornSPS;
document.getElementById("corn-clicks-amount").textContent =
  Math.round(cornIncreaseClicks * 10) / 10;

document.getElementById("sunflower-sps-amount").textContent = sunflowerSPS;
document.getElementById("sunflower-clicks-amount").textContent =
  Math.round(sunflowerIncreaseClicks * 10) / 10;

document.getElementById("poop-amount").textContent = Math.floor(poopAmount);
//
//

//=============================================================
// TotalSPS = barleySPS + cornSPS + sunflowerSPS. Updated every second.

setInterval(function () {
  totalSPS = barleySPS + cornSPS + sunflowerSPS;
  document.getElementById("total-sps-amount").textContent =
    Math.round(totalSPS * 10) / 10;
  seedsAmount += totalSPS;
  document.getElementById("seed-amount").textContent = Math.floor(seedsAmount);

  totalClicks =
    1 + barleyIncreaseClicks + cornIncreaseClicks + sunflowerIncreaseClicks;
}, 1000);
//
//

//=============================================================
// When the user clicks on the pigeon, seedsAmount decrease by totalClicks. The poop amount then goes up by totalClicks after 2 seconds (to simulate food digestion times).

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
    // Update all the game data in local storage.
    localStorage.setItem(
      "gameData",
      JSON.stringify({
        seedsAmount,
        totalSPS,
        totalClicks,
        poopAmount,
        barleyCost: Math.floor(barleyCost),
        barleySPS: Math.round(barleySPS * 10) / 10,
        barleyIncreaseClicks,
        cornCost: Math.floor(cornCost),
        cornSPS: Math.round(cornSPS * 10) / 10,
        cornIncreaseClicks,
        sunflowerCost: Math.floor(sunflowerCost),
        sunflowerSPS: Math.round(sunflowerSPS * 10) / 10,
        sunflowerIncreaseClicks,
      })
    );
  } else {
    alert("You don't have enough seeds!");
  }
});
//
//

//=============================================================
// Add a button to reset the game data in local storage.

document.getElementById("reset-button").addEventListener("click", function () {
  if (confirm("Are you sure you want to reset the game?")) {
    localStorage.removeItem("gameData");
    location.reload();
  }
});
//
//

//=============================================================
// Barley shop item button: when clicked, will decrease poop amount by cost. Cost then increases by 10%. Increases barleySPS by 0.3. Increase totalClicks by 0.2.

document.getElementById("barley-button").addEventListener("click", function () {
  if (poopAmount >= barleyCost) {
    poopAmount -= barleyCost;
    document.getElementById("poop-amount").textContent = Math.floor(poopAmount);

    barleyCost = barleyCost * 1.1;
    document.getElementById("barley-button-cost").textContent =
      Math.floor(barleyCost);

    barleySPS += 0.3;
    document.getElementById("barley-sps-amount").textContent =
      Math.round(barleySPS * 10) / 10;

    barleyIncreaseClicks += 0.2;
    document.getElementById("barley-clicks-amount").textContent =
      Math.round(barleyIncreaseClicks * 10) / 10;
  } else {
    alert("You don't have enough poop!");
  }
});
//
//

//=============================================================
// Corn shop item button

document.getElementById("corn-button").addEventListener("click", function () {
  if (poopAmount >= cornCost) {
    poopAmount -= cornCost;
    document.getElementById("poop-amount").textContent = Math.floor(poopAmount);

    cornCost = cornCost * 1.15;
    document.getElementById("corn-button-cost").textContent =
      Math.floor(cornCost);

    cornSPS += 0.4;
    document.getElementById("corn-sps-amount").textContent =
      Math.round(cornSPS * 10) / 10;

    cornIncreaseClicks += 0.3;
    document.getElementById("corn-clicks-amount").textContent =
      Math.round(cornIncreaseClicks * 10) / 10;
  } else {
    alert("You don't have enough poop!");
  }
});
//
//

//=============================================================
// Sunflower shop item button

document
  .getElementById("sunflower-button")
  .addEventListener("click", function () {
    if (poopAmount >= sunflowerCost) {
      poopAmount -= sunflowerCost;
      document.getElementById("poop-amount").textContent =
        Math.floor(poopAmount);

      sunflowerCost = sunflowerCost * 1.2;
      document.getElementById("sunflower-button-cost").textContent =
        Math.floor(sunflowerCost);

      sunflowerSPS += 0.5;
      document.getElementById("sunflower-sps-amount").textContent =
        Math.round(sunflowerSPS * 10) / 10;

      sunflowerIncreaseClicks += 0.4;
      document.getElementById("sunflower-clicks-amount").textContent =
        Math.round(sunflowerIncreaseClicks * 10) / 10;
    } else {
      alert("You don't have enough poop!");
    }
  });
//
//
//
//
//
//
//

//shop upgrades

//fetch the upgrades from the API: "https://cookie-upgrade-api.vercel.app/api/upgrades"

async function getShopUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  console.log(data);

  return data;
}
getShopUpgrades();

//
//
//
//
//
//

// Fetching and displaying data from the API

// function createUpgradeElement(data) {
//   const upgradeSection = document.getElementById("api-test-content");

//   // I will use a forEach loop to get each upgrade from the data more efficiently
//   data.forEach(function (upgrade) {
//     const eachUpgradeDiv = document.createElement("div");
//     upgradeSection.appendChild(eachUpgradeDiv);
//     eachUpgradeDiv.classList.add("each-upgrade-div");

//     const upgradeName = document.createElement("h4");
//     upgradeName.textContent = upgrade.name;
//     eachUpgradeDiv.appendChild(upgradeName);

//     const upgradeCost = document.createElement("p");
//     upgradeCost.textContent = "Cost: " + upgrade.cost;
//     eachUpgradeDiv.appendChild(upgradeCost);

//     const upgradeIncrease = document.createElement("p");
//     upgradeIncrease.textContent = "Increase: " + upgrade.increase;
//     eachUpgradeDiv.appendChild(upgradeIncrease);
//   });
// }

// async function displayUpgrades() {
//   const upgrades = await getShopUpgrades();
//   createUpgradeElement(upgrades);
// }

// displayUpgrades();
//
