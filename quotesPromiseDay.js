const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const promiseDayQuotes = [
"ჩვენი მეორე შეხვედრა იყო ის მომენტი, როცა გავაცნობიერეთ, რომ ეს სიყვარული სამუდამო იქნებოდა 🤝",
    "იმ დღეს, როცა მეორედ შევხვდით... ჩემი გული დაგპირდა, რომ არასდროს გაგიშვებდა 💍",
    "ჩვენი მეორე შეხვედრა, ეს იყო ჩვენი პირველი დიდი დაპირება ერთმანეთისთვის ❤️",
    "შენ რომ მეორედ დამინახე... ვიგრძენი, რომ ჩვენი გზები აღარასდროს განშორდებოდა 🤝💗",
    "იმ დღეს ჩვენ ერთმანეთს დავპირდით, რომ ვიქნებით ერთმანეთთან სამუდამოდ... 💞",
    "ჩვენი მეორე შეხვედრა დღესაც ჩემი გულის ყველაზე მტკიცე დაპირებაა... გმადლობ, ჩემო ცის ფერ თვალება ანგელოზო 🤍",
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from the configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = promiseDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=promise');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = promiseDayQuotes[i];
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
