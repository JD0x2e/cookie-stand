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
    // article.classList.add("tokyobox");
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
