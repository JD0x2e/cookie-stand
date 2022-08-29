"use strict";

const times = [
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

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  randomCust: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) +
      (this.minCust + 1)
    );
  },
};

// seattle.randomCust();

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  randomCust: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) +
      (this.minCust + 1)
    );
  },
};

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  randomCust: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) +
      (this.minCust + 1)
    );
  },
};

const Paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  randomCust: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) +
      (this.minCust + 1)
    );
  },
};

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  randomCust: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) +
      (this.minCust + 1)
    );
  },
};

// This is a container for all cookie stands
const parentElement = document.getElementById("cookieStand");

const article = document.createElement("article");
parentElement.appendChild(article);

// This is getting the name of the shop
const h2 = document.createElement("h2");
h2.textContent = seattle.name;
article.appendChild(h2);

// This is a little bio of the shop
const p = document.createElement("p");
p.textContent = `${seattle.name} is a great shop, it has an average of ${seattle.avgCookieSale} cookies sold per sale`;
article.appendChild(p);

// This is creating an element for a list
const ul = document.createElement("ul");
article.appendChild(ul);

// Loop through the numbers

for (let i = 0; i < seattle.randomCust; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.randomCust[i];
  ul.appendChild(li);
}
