// First, fetch the configuration data.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Use the configuration values
    const fpNameEl = document.querySelector("#fpname");
    const spNameEl = document.querySelector("#spname");

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;

    // Then generate the quotes for Hug Day
    const quotesDiv = document.querySelector(".quotes");

    const hugDayQuotes = [
   "ჩვენი ბოლო შეხვედრა იყო ისეთივე თბილი და ძლიერი, როგორც ჩვენი გრძნობები... იმ მომენტში მივხვდი და დავრწმუნდი უფრო კარგად, რომ შენ ხარ ჩემი სახლი 🤗",
    "ჩვენი ბოლო შეხვედრა ჩემთვის ყველაზე ტკბილი მოგონებაა... იმ დღეს ჩემი გულის უდიდესი ნაწილი შენში დავტოვე 💗",
    "ჩვენი ბოლო შეხვედრა, ეს იყო დღე, როცა გავაცნობიერეთ, რომ ჩვენ ერთმანეთის გარეშე აღარ შეგვიძლო არსებობა 🤍",
    "იმ წამს, როცა ბოლოს ჩამეხუტე... ვიგრძენი, ის უდიდესი სითბო და სიყვარული რომელიც შენში იმალებოდა და გრძნობდი ჩემს მიმართ 🤗💕",
    "ჩვენი ბოლო შეხვედრა დღემდე იდეალურად მიზის გონებაში და ჩემს გულში ცოცხლობს ❤️",
    "შენი თავი ჩემთვის ყველაზე საუკეთესო ადგილია იმისათვის რომ საკუთარი თავი სრულ სიმშვიდეში ვიგრძნო და ჩვენი ბოლო შეხვედრა ამის დასტურია 🤗",
];
    
    const quotesNr = hugDayQuotes.length;

    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=hug');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = hugDayQuotes[i];
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
  .catch(error => {
    console.error('Error loading config:', error);
  });
