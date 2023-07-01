const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

function getQuotes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    return alert("Plese enter a number");
  } else {
    fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(JSON.stringify(data));
        data = shuffle(data);
        let output = "";
        for (let i = 0; i < data.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
            <li>Quote: ${data[i].text}</li>
            <li>Quote: ${data[i].author}</li>
            <hr>
            `;
        }

        document.querySelector(".quotes").innerHTML = output;
      });
  }
}

// Function to shuffle quotes
function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    CI--;
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
