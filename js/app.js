"use strict";

const cookieData = document.getElementById("cookie-data");
const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

//function to get a random whole number
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//constructor
function CookieStand(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.custEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalDailyCookies = 0;
}
// function to push the customers each hour into the array
CookieStand.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custEachHour.push(randomNum(this.minCust, this.maxCust));
  }
};
// function to push the cookies sold each hour into the array
CookieStand.prototype.calcCookiesSoldEachHour = function () {
  this.calcCustomersEachHour();
  // run method to populate the custEachHour
  for (let i = 0; i < hours.length; i++) {
    const oneHourOfSales = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    // push sales into cookiesSoldEachHour
    this.cookiesSoldEachHour.push(oneHourOfSales);

    // increase totalDailyCookies
    this.totalDailyCookies += oneHourOfSales;
  }
};
// function to render the table data on the page
CookieStand.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  //create the row element
  const tr = document.createElement("tr");
  tr.classList.add("datarow");
  //create the table data element (with let so we can redifend and use it again)
  let td = document.createElement("td");
  // add the data in there
  td.textContent = this.name;
  td.classList.add("storenames");
  // add to the row
  tr.appendChild(td);

  // loop through and add the data for each hour to a new td element
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesSoldEachHour[i];
    tr.appendChild(td);
  }
  // create a final table header (so its bold and nice) for the total
  const tableHeader = document.createElement("th");
  // add the content and append our total
  tableHeader.textContent = this.totalDailyCookies;
  tr.appendChild(tableHeader);

  // add everything to the table
  cookieData.appendChild(tr);
};

// create our shops
const seattle = new CookieStand("Seattle", 23, 65, 6.3);
const tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
const dubai = new CookieStand("Dubai", 11, 38, 3.7);
const paris = new CookieStand("Paris", 20, 38, 2.3);
const lima = new CookieStand("Lima", 2, 16, 4.6);

const allShops = [seattle, tokyo, dubai, paris, lima];

const hoursRow = document.createElement("tr");
let timeStart = document.createElement("th");
timeStart.textContent = "Location";
hoursRow.classList.add("datarow");
hoursRow.appendChild(timeStart);

for (let i = 0; i < hours.length; i++) {
  let th = document.createElement("th");
  th.textContent = hours[i];
  hoursRow.appendChild(th);
}
// this is to populate the last box on the header row with 'totals'
timeStart = document.createElement("th");
timeStart.textContent = "Totals";
hoursRow.appendChild(timeStart);

cookieData.appendChild(hoursRow);

for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}
const totalTR = document.createElement("tr");
//Hourly sales total row
function hourlyTotals() {
  // create a new tr

  totalTR.classList.add("datarow");

  //create a new th
  let totalTHHeading = document.createElement("th");

  // add content to the th and append it
  totalTHHeading.textContent = "Hourly Total";
  totalTR.appendChild(totalTHHeading);

  let total = 0;
  // loop through each location and get the hourly rates
  for (let k = 0; k < hours.length; k++) {
    let hourlyTotal = 0;
    for (let i = 0; i < allShops.length; i++) {
      hourlyTotal += allShops[i].cookiesSoldEachHour[k];
    }
    let totalTH = document.createElement("th");
    totalTH.textContent = hourlyTotal;
    totalTR.appendChild(totalTH);
    total += hourlyTotal;
  }

  let finalTotalTH = document.createElement("th");
  finalTotalTH.textContent = total;
  totalTR.appendChild(finalTotalTH);

  //append to the page
  cookieData.appendChild(totalTR);
}

hourlyTotals();

const myForm = document.getElementById("new-store-form");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeName = event.target.name.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const average = event.target.average.value;

  const newStore = new CookieStand(storeName, minCust, maxCust, average);
  totalTR.innerHTML = "";
  newStore.render();
  allShops.push(newStore);
  hourlyTotals();

  // re-render the totals to show emptyinput boxes
  document.getElementById("name").value = "";
  document.getElementById("minCust").value = "";
  document.getElementById("maxCust").value = "";
  document.getElementById("average").value = "";
});
