function juhuslikKuupäev() {
    const d = new Date();
    d.setDate(d.getDate() - Math.floor(Math.random() * 7));
    return d.toISOString().split('T')[0];
}

function lisaKuupäev(uudised) {
    return uudised.map(u => `${juhuslikKuupäev()} - ${u}`);
}

function ValiUudis() {
    let kasJatkata = true;

    while (kasJatkata) {
        let newsSource = prompt("Milliseid uudiseid soovid näha? (Tehnoloogia, Majandus, Spordiuudised)");
        let uudised;

        switch (newsSource) {
            case "Tehnoloogia":
                uudised = [
                    "Apple on parim",
                    "Microsoft paneb uksed kinni",
                    "Google arendab uut AI-d"
                ];
                break;
            case "Majandus":
                uudised = [
                    "Eesti majandus langes 3% võrra",
                    "Ameerika kaotas oma tornid",
                ];
                break;
            case "Spordiuudised":
                uudised = [
                    "Ott Tänak pani vastu puud",
                    "Trevor võitis 100m jooksu",
                ];
                break;
                continue;
        }

        const uudisedKuupaevaga = lisaKuupäev(uudised);
        alert("Uudised:\n" + uudisedKuupaevaga.join("\n"));

        const uuesti = prompt("Kas soovid uuesti genereerida? (jah/ei)").toLowerCase();
        if (uuesti !== "jah") {
            kasJatkata = false;
        }
    }
}

ValiUudis();
