const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const teddyDayQuotes = [
    "როცა პირველად შენი ტუჩები ჩემსას შეეხო…\nვიგრძენი გრძნობა, რომელსაც სიტყვები ვერ იტევს.\nეს არ იყო უბრალოდ კოცნა —\nეს იყო სულიების შეხება,\nსიყვარულზე მეტი, უსასრულობასთან ძალიან ახლოს. 💗",
    "იმ წამს, როცა შენი ტუჩები ჩემს ტუჩებს შეხვდა…\nმთელი სამყარო შეჩერდა.\nგულმა იგრძნო, რომ ეს კოცნა სამუდამო იქნება 😘",
    "შენი პირველი კოცნა იყო ჩემი ცხოვრების ყველაზე თბილი მომენტი…\nროგორც დათვუსახლი, რბილი და მყუდრო 🧸💕",
    "იმ საღამოს, როცა პირველად გაკოცე…\nმივხვდი, რომ შენ ხარ ჩემი ერთადერთი და უსასრულო სიყვარული ❤️",
    "ჩვენი პირველი კოცნა — ეს იყო ჩვენი გულების შეხვედრა…\nდა ახლა ისინი ერთად სცემენ სამუდამოდ 💞",
    "შენი ტუჩები ჩემთვის უფრო ტკბილია, ვიდრე ნებისმიერი შოკოლადი…\nდა ეს კოცნა ჩემი ცხოვრების საუკეთესო მოგონებაა 😘",
    "გმადლობ, ჩემო საკურა, რომ იყავი ჩემთან იმ პირველ კოცნაში…\nდა ყველა მომდევნოში 💋🌹"
];

fetch('config.json')
    .then(response => response.json())
    .then(config => {
        // სახელების ჩასმა
        fpName.innerText = config.fpName;
        spName.innerText = config.spName;

        // Instagram ლინკის და სახელის განახლება
        const instagramProfileLink = document.getElementById('instagramProfileLink');
        const instagramProfileNameElement = document.getElementById('instagramProfileName');
        instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
        instagramProfileNameElement.textContent = config.instagramProfileName;

        // ციტატების ჩასმა
        const quotesCount = teddyDayQuotes.length;
        for (let i = 0; i < quotesCount; i++) {
            const link = document.createElement('a');
            link.setAttribute('href', 'card.html?source=teddy');

            const para = document.createElement("p");
            para.classList.add("quote");
            para.innerText = teddyDayQuotes[i];  // ციტატა ცალ-ცალკე სტრიქონად

            link.appendChild(para);
            quotesDiv.appendChild(link);
        }

        // ციტატებზე კლიკისას localStorage-ში შენახვა
        const quoteDivs = document.querySelectorAll(".quote");
        quoteDivs.forEach(quote => {
            quote.addEventListener('click', function (e) {
                const chosenQuote = e.target.innerText;
                localStorage.setItem("chosenQuote", chosenQuote);
            });
        });
    })
    .catch(error => console.error('Error loading config:', error));
