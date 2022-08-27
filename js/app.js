"use strict";

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  getRandomNo: function (minCust, maxCust) {
    return Math.random() * (maxCust - minCust) + min;
  },
};

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  getRandomNo: function (minCust, maxCust) {
    return Math.random() * (maxCust - minCust) + min;
  },
};

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  getRandomNo: function (minCust, maxCust) {
    return Math.random() * (maxCust - minCust) + min;
  },
};

const Paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  getRandomNo: function (minCust, maxCust) {
    return Math.random() * (maxCust - minCust) + min;
  },
};

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  getRandomNo: function (minCust, maxCust) {
    return Math.random() * (maxCust - minCust) + min;
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
