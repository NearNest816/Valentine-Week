const quotesDiv = document.querySelector(".quotes");
const fpNameEl = document.querySelector("#fpname");
const spNameEl = document.querySelector("#spname");

const proposeQuotes = [
"იმ დღეს, როცა შენ მითხარი 'თანახმა ვარ, ვიყოთ ერთად'... ჩემმა გულმა პირველად იგრძნო, რომ ეს სიყვარული სამუდამო იქნებოდა 💍",
    "შენი 'კი' იყო ჩემი ცხოვრების ყველაზე ულამაზესი და გარდამტეხი მომენტი... იმ მომენტიდან დაიწყო ჩვენი ლამაზი ისტორია 💗",
    "ჩვენი შეყვარებულობის დასაწყისი იყო ის მარტივი სიტყვა 'კი'... მაგრამ მის უკან იმალებოდა მთელი სამყარო ❤️",
    "შენ რომ მითხარი 'მეც მიყვარხარ', მივხვდი, რომ შენ იქნებოდი ჩემი საკურას ყვავილი, რომლის მებაღეც სწორედ მე ვიქნებოდი სამუდამოდ 🌸",
    "იმ საღამოს, როცა ოფიციალურად შეყვარებულები გავხდით... ცა უფრო კაშკაშა გახდა, ვიდრე იქამდე იყო ჩემთვის ✨",
    "ჩვენი პირველი 'შეყვარებულები ვართ' ეს იყო ჩვენი ყველაზე ტკბილი დასაწყისი 💕",
    "გმადლობ, რომ იყავი ჩემთან იმ მომენტში, როცა ჩვენი გულები ერთმანეთს შეხვდა... და ახლა უკვე კი აქამდე ვართ მოსულები და ჯერ კიდევ ძალიან ბევრი გვაქვს მე და შენ გასავლელი ერთად"
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = proposeQuotes.length;
    
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=propose');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = proposeQuotes[i];
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

