"use strict";

const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  const https = new XMLHttpRequest();

  https.open("GET", "https://type.fit/api/quotes", true);

  https.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const response = JSON.parse(this.responseText);

      let output = "";
      response.forEach((quote) => {
        output += `
        <li>Quote: ${quote.text}</li>
        <li>Quote: ${quote.author}</li>
        <hr>
        `;
      });

      document.querySelector(".quotes").innerHTML = output;
    }
  };

  https.send();
}
