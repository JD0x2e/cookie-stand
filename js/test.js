// Test backup

"use strict";

const cookieData = document.getElementById("cookie-data");
const hours = [
  "6am: ",
  "7am: ",
  "8am: ",
  "9am: ",
  "10am: ",
  "11am: ",
  "12pm: ",
  "1pm: ",
  "2pm: ",
  "3pm: ",
  "4pm: ",
  "5pm: ",
  "6pm: ",
  "7pm: ",
];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CookieStand(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.custEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalDailyCookies = 0;
}

CookieStand.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custEachHour.push(randomNum(this.minCust, this.maxCust));
  }
};

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

CookieStand.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  const article = document.createElement("article");
  article.classList.add(`salestable`);

  const h3 = document.createElement("h3");
  h3.textContent = this.name;
  article.appendChild(h3);

  const ul = document.createElement("ul");

  // write an li for each working hour
  for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
    ul.appendChild(li);
  }

  // add the list to the page
  article.appendChild(ul);

  // add to the page
  cookieData.appendChild(article);
};

// create our shops
const seattle = new CookieStand("Seattle", 23, 65, 6.3);
const tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
const dubai = new CookieStand("Dubai", 11, 38, 3.7);
const paris = new CookieStand("Paris", 20, 38, 2.3);
const lima = new CookieStand("Lima", 2, 16, 4.6);

const allShops = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}
