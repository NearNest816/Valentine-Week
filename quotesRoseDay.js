const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
    "ჩვენი პირველი მიმოწერა დაიწყო 2023 წლის 21 თებერვალს",
    "იმ დღეს შენი პირველი შეტყობინება ჩემთვის ყველაზე ლამაზი საჩუქარი იყო 💌",
    "შენი სიტყვები ჩემი გულისთვის ვარდივით სურნავდა და არასდროს ჭკნება 🌹",
    "მივხვდი, რომ ეს გოგო ჩემი ცხოვრების ყველაზე მნიშვნელოვანი ადამიანი გახდება 💗",
    "გმადლობ, რომ იყავი ჩემთან იმ პირველ 'გამარჯობაში'... და ყველა შემდეგში ❤️",
    "ჩვენი მიმოწერა დღესაც გრძელდება და ყოველი შეტყობინება ახალი ვარდია შენგან 💐",
    "გილოცავ ჩვენს პირველ მიმოწერას — იმ დღეს დაიწყო ჩვენი სიყვარული 💕"
];

// Fetch configuration from config.json to set names.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
  })
  .catch(error => console.error('Error loading config:', error));

const quotesNr = roseDay.length;

for (let i = 0; i < quotesNr; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', 'card.html');
  const para = document.createElement("p");
  para.classList.add("quote");
  para.innerText = roseDay[i];
  link.appendChild(para);
  quotesDiv.appendChild(link);
}

// Add click listener to save the chosen quote to localStorage.
const quoteDivs = document.querySelectorAll(".quote");
quoteDivs.forEach(quote => {
  quote.addEventListener('click', function (e) {
    const chosenQuote = e.target.innerText;
    localStorage.setItem("chosenQuote", chosenQuote);
  });
});



