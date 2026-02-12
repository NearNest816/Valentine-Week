const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const teddyDayQuotes = [
  "როცა პირველად შენი ტუჩები ჩემსას შეეხო…
ვიგრძენი გრძნობა, რომელსაც სიტყვები ვერ იტევს.
ეს არ იყო უბრალოდ კოცნა —
ეს იყო სულიების შეხება,
სიყვარულზე მეტი, უსასრულობასთან ძალიან ახლოს. 💗"
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesCount = teddyDayQuotes.length;

    for (let i = 0; i < quotesCount; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=teddy');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = teddyDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));
