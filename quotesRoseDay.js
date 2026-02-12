const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
   "ჩვენი პირველი მიმოწერა დაიწყო იმ დღეს 2023 წლის ცივ და სუსხიან 21 თებერვალს როდესაც სრულიად მარტო ვიყავი და სული მქონდა გაუბედურებული.შენი პირველი 'გამარჯობა',ეჰ ნეტავ იცოდე მაგ შენი გამარჯობის შემდეგ როგორ შეიცვალა ჩემი ცხოვრება, შენი გამარჯობის შემდეგ ვგრძნობდი რომ ამ დიდ სამყაროში მყავდა ვიღაც ისეთი ვისთანაც შემეძლო ყველაფერზე საუბარი და მივხვდი რომ ჩემს ცხოვრებაში გამოჩნდა ადამიანი ვისაც რეალურად ვენდობოდი💌",
    "შენი შეტყობინებები ჩემთვის ისეთივე ტკბილია, როგორც საკურას ყვავილის სურნელი გაზაფხულზე 🌸",
    "იმ მომენტიდან, როცა პირველად მომწერე, მივხვდი, რომ ეს გოგო ჩემი ცხოვრების ყველაზე მნიშვნელოვანი ადამიანი გახდებოდა 💗",
    "გმადლობ, რომ იყავი ჩემთან იმ პირველ გამარჯობისასაც... და ყველა სხვა დანარჩენის დროსაც. შენ ხარ ჩემი საკურას ულამაზესი ყვავილი 🌸❤️",
    "ჩვენი მიმოწერა დღესაც გრძელდება... და ყოველი შეტყობინება ჩემთვის ახალი ვარდივით არის 💐",
       "შენთან მიმოწერა ჩემი ყველაზე საყვარელი ჩვევა გახდა... გმადლობ, ჩემო საკურას ყვავილო რომ ყოველთვის ჩემთან იყავი 🌷"
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


