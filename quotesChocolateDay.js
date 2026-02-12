const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const chocolateDayQuotes = [
 "ჩვენი პირველი შეხვედრა იყო ისეთივე ტკბილი, როგორც შენი ტუჩები... როდესაც შენ დაგინახე მაგ მომენტში პირველად ვიგრძენი ჩემს სხეულში სიყვარულის ძლიერი ყვირილი",
    "იმ დღეს, როცა პირველად დავინახე შენი თვალები... მივხვდი, რომ ამის შემდეგ ამაზე უკეთესს და ულამაზეს რამეს ვეღარასდროს ვერ ვნახავდი 💗",
    "ჩვენი პირველი შეხვედრა, ეს იყო მომენტი, როცა ჩემმა გულმა პირველად იგრძნო ის უცნობი და გამოუცდელი გრძნობა რომელსაც ჩვენ სიყვარულს ვეძახით 😊",
    "შენ რომ მომეხვიე პირველად... ვიგრძენი, წარმოუდგენლად ძლიერი სითბო რის გამოც შემდგომ სიხარულის ცრემლები გაუჩერებლად მომდიოდა ❤️",
    "იმ საღამოს, როცა პირველად ვიყავით ერთად... დღემდე მაქვს გულში ჩარჩენილი ის ყველა გრძნობა რასაც ვგრძნობდი იმ მომენტში და იქიდან წამოსვლისას🌹",
    "ჩვენი პირველი შეხვედრა დღესაც ჩემი ყველაზე ტკბილი მოგონებაა🍫💕",
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

    // Build quote links from chocolateDayQuotes.
    const quotesNr = chocolateDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=chocolate');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = chocolateDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));
