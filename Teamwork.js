const newsSources = {
    "Tehnoloogia": [
        "Apple on parim",
        "Microsoft paneb uksed kinni"
    ],
    "Spordiuudised": [
        "Ott Tänak pani vastu puud.",
        "Trevor võitis 100m jooksu."
    ],
    "Majandus": [
        "Eesti majandus langes 3% võrra.",
        "Ameerika kaotas oma tornid."
    ]
};


function getRandomDate() {
    const today = new Date();
    const pastDate = new Date(today);
    const randomDaysAgo = Math.floor(Math.random() * 7);
    pastDate.setDate(today.getDate() - randomDaysAgo);
    return pastDate.toISOString().split('T')[0];
}

function generateNewsList(category) {
    const newsList = newsSources[category].map(news => {
        return `${getRandomDate()} - ${news}`;
    });
    return newsList;
}

function main() {
    let continueProgram = true;

    while (continueProgram) {
        const category = prompt(
            "Vali kategooria:\n1. Tehnoloogia\n2. Spordiuudised\n3. Majandus"
        );

        let categoryName = "";
        switch (category) {
            case "1":
                categoryName = "Tehnoloogia";
                break;
            case "2":
                categoryName = "Spordiuudised";
                break;
            case "3":
                categoryName = "Majandus";
                break;
            default:
                alert("Vale valik. Proovi uuesti.");
                continue;
        }

        let newsList = generateNewsList(categoryName);
        alert("Uudised:\n" + newsList.join("\n"));

        const newNews = prompt("Soovid lisada uue uudise? (Jah/Ei)");
        if (newNews.toLowerCase() === "jah") {
            const userNews = prompt("Sisesta uus uudis:");
            newsSources[categoryName].push(userNews);
            alert("Uudis lisatud.");
        }

        const retry = prompt("Soovid nimekirja uuesti genereerida? (Jah/Ei)");
        if (retry.toLowerCase() !== "jah") {
            continueProgram = false;
        }
    }
}

main();
