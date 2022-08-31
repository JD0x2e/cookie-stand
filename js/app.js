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

// function CookieStand(name, minCust, maxCust, avgCookieSale) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSale = avgCookieSale;
//   this.custEachHour = [];
//   this.cookiesSoldEachHour = [];
//   this.totalDailyCookies = 0;
// }

// const Seattle = new CookieStand('Seattle', 23, 65, 6.3, [], [], 0);
// const Tokyo = new CookieStand("Tokyo", 3, 24, 1.2, [], [], 0);
// const Dubai = new CookieStand("Dubai", 11, 38, 3.7, [], [], 0);
// const Paris = new CookieStand("Paris", 20, 38, 2.3, [], [], 0);
// const Lima = new CookieStand("Lima", 2, 16, 4.6, [], [], 0);

// const shops = [Seattle, Tokyo, Dubai, Paris, Lima];

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

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalDailyCookies: 0,

  // method to calculate customers per hour
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
    article.classList.add("dubaibox");
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

const paris = {
  name: "Paris",
  minCust: "20",
  maxCust: "38",
  avgCookieSale: "2.3",
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalDailyCookies: 0,

  // method to calculate customers per hour
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
    article.classList.add("parisbox");
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
    article.appendChild(li);
    // add to the page
    cookieData.appendChild(article);
  },
};

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custEachHour: [],
  cookiesSoldEachHour: [],
  totalDailyCookies: 0,

  // method to calculate customers per hour
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custEachHour.push(randomNum(this.minCust, this.maxCust));
    }
  },
  // method to populate our cookiesSoldEachHour
  calcCookiesSoldEachHour: function () {
    this.calcCustomersEachHour();
    // run method to populate the custEachHour
    for (let i = 0; i < hours.length; i++);
    const oneHourOfSales = Math.ceil(this.custEachHour[i] * this.avgCookieSale);
    // push sales into cookiesSoldEachHour
    this.cookiesSoldEachHour.push(oneHourOfSales);
    // increase totalDailyCookies
    this.totalDailyCookies += oneHourOfSales;
  },
  // method to render
  render: function () {
    this.calcCookiesSoldEachHour();
    const article = document.createElement("article");
    article.classList.add("limabox");
    const h3 = document.createElement("h3");
    h3.textContent = this.name;
    article.appendChild(h3);

    const ul = document.createElement("ul");
    // write an li for each working hour
    for (let i = 0; i < hours.length; i++);
    {
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

const allShops = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}
