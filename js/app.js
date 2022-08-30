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

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custEachHour.push(randomNum(this.minCust, this.maxCust));
    }
  },

  // method to populate our cookiesSoldEachHour
  calcCookiesSoldEachHour: function () {
    this.calcCustomersEachHour();
    // run method to populate the custEachHour
    for (let i = 0; i < hours.length; i++) {
      const oneHourOfSales = Math.ceil(
        this.custEachHour[i] * this.avgCookieSale
      );
      // push sales into cookiesSoldEachHour
      this.cookiesSoldEachHour.push(oneHourOfSales);

      // increase totalDailyCookies
      this.totalDailyCookies += oneHourOfSales;
    }
  },

  // method to render
  render: function () {
    this.calcCookiesSoldEachHour();
    const article = document.createElement("article");
    article.classList.add("seattlebox");
    // article.classList.remove("seattlebox");
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
  },
};

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custEachHour.push(randomNum(this.minCust, this.maxCust));
    }
  },

  // method to populate our cookiesSoldEachHour
  calcCookiesSoldEachHour: function () {
    this.calcCustomersEachHour();
    // run method to populate the custEachHour
    for (let i = 0; i < hours.length; i++) {
      const oneHourOfSales = Math.ceil(
        this.custEachHour[i] * this.avgCookieSale
      );
      // push sales into cookiesSoldEachHour
      this.cookiesSoldEachHour.push(oneHourOfSales);

      // increase totalDailyCookies
      this.totalDailyCookies += oneHourOfSales;
    }
  },

  // method to render
  render: function () {
    this.calcCookiesSoldEachHour();
    const article = document.createElement("article");
    article.classList.add("tokyobox");
    // article.classList.remove("seattlebox");
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
  },
};

const allShops = [seattle, tokyo];

for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}
