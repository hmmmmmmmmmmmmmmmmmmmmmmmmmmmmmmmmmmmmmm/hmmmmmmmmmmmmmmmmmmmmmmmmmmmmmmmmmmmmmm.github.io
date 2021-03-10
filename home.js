function check() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var state = urlParams.get("state");

    if (state.includes(" ")) {
        state = state.split(" ")[0];
    }

    let states = [
        "Ale", "Alingsås", "Alvesta", "Aneby", "Arboga", "Arjeplogs", "Arvidsjaurs", "Arvika", "Askersunds", "Avesta", "Bengtsfors",
        "Bergs", "Bjurholms", "Bjuvs", "Bodens", "Bollebygds", "Bollnäs", "Borgholms", "Borlänge", "Borås", "Botkyrka", "Boxholms",
        "Bromölla", "Bräcke", "Burlövs", "Båstads", "Dals-Eds", "Danderyds", "Degerfors", "Dorotea", "Eda", "Ekerö", "Eksjö", "Emmaboda",
        "Enköpings", "Eskilstuna", "Eslövs", "Essunga", "Fagersta", "Falkenbergs", "Falköpings", "Falu", "Filipstads", "Finspångs", "Flens",
        "Forshaga", "Färgelanda", "Gagnefs", "Gislaveds", "Gnesta", "Gnosjö", "Region", "Grums", "Grästorps", "Gullspångs", "Gällivare",
        "Gävle", "Göteborgs", "Götene", "Habo", "Hagfors", "Hallsbergs", "Hallstahammars", "Halmstads", "Hammarö", "Haninge", "Haparanda",
        "Heby", "Hedemora", "Helsingborgs", "Herrljunga", "Hjo", "Hofors", "Huddinge", "Hudiksvalls", "Hultsfreds", "Hylte", "Håbo",
        "Hällefors", "Härjedalens", "Härnösands", "Härryda", "Hässleholms", "Höganäs", "Högsby", "Hörby", "Höörs", "Jokkmokks", "Järfälla",
        "Jönköpings", "Kalix", "Kalmar", "Karlsborgs", "Karlshamns", "Karlskoga", "Karlskrona", "Karlstads", "Katrineholms", "Kils", "Kinda",
        "Kiruna", "Klippans", "Knivsta", "Kramfors", "Kristianstads", "Kristinehamns", "Krokoms", "Kumla", "Kungsbacka", "Kungsörs", "Kungälvs",
        "Kävlinge", "Köpings", "Laholms", "Landskrona", "Laxå", "Lekebergs", "Leksands", "Lerums", "Lessebo", "Lidingö", "Lidköpings", "Lilla",
        "Lindesbergs", "Linköpings", "Ljungby", "Ljusdals", "Ljusnarsbergs", "Lomma", "Ludvika", "Luleå", "Lunds", "Lycksele", "Lysekils",
        "Malmö", "Malung-Sälens", "Malå", "Mariestads", "Markaryds", "Marks", "Melleruds", "Mjölby", "Mora", "Motala", "Mullsjö", "Munkedals",
        "Munkfors", "Mölndals", "Mönsterås", "Mörbylånga", "Nacka", "Nora", "Norbergs", "Nordanstigs", "Nordmalings", "Norrköpings",
        "Norrtälje", "Norsjö", "Nybro", "Nykvarns", "Nyköpings", "Nynäshamns", "Nässjö", "Ockelbo", "Olofströms", "Orsa", "Orust", "Osby",
        "Oskarshamns", "Ovanåkers", "Oxelösunds", "Pajala", "Partille", "Perstorps", "Piteå", "Ragunda", "Robertsfors", "Ronneby", "Rättviks",
        "Sala", "Salems", "Sandvikens", "Sigtuna", "Simrishamns", "Sjöbo", "Skara", "Skellefteå", "Skinnskattebergs", "Skurups", "Skövde",
        "Smedjebackens", "Sollefteå", "Sollentuna", "Solna", "Sorsele", "Sotenäs", "Staffanstorps", "Stenungsunds", "Stockholms", "Storfors",
        "Storumans", "Strängnäs", "Strömstads", "Strömsunds", "Sundbybergs", "Sundsvalls", "Sunne", "Surahammars", "Svalövs", "Svedala",
        "Svenljunga", "Säffle", "Säters", "Sävsjö", "Söderhamns", "Söderköpings", "Södertälje", "Sölvesborgs", "Tanums", "Tibro", "Tidaholms",
        "Tierps", "Timrå", "Tingsryds", "Tjörns", "Tomelilla", "Torsby", "Torsås", "Tranemo", "Tranås", "Trelleborgs", "Trollhättans", "Trosa",
        "Tyresö", "Täby", "Töreboda", "Uddevalla", "Ulricehamns", "Umeå", "Upplands", "Upplands-Bro", "Uppsala", "Uppvidinge", "Vadstena",
        "Vaggeryds", "Valdemarsviks", "Vallentuna", "Vansbro", "Vara", "Varbergs", "Vaxholms", "Vellinge", "Vetlanda", "Vilhelmina", "Vimmerby",
        "Vindelns", "Vingåkers", "Vårgårda", "Vänersborgs", "Vännäs", "Värmdö", "Värnamo", "Västerviks", "Västerås", "Växjö", "Ydre", "Ystads",
        "Åmåls", "Ånge", "Åre", "Årjängs", "Åsele", "Åstorps", "Åtvidabergs", "Älmhults", "Älvdalens", "Älvkarleby", "Älvsbyns", "Ängelholms",
        "Öckerö", "Ödeshögs", "Örebro", "Örkelljunga", "Örnsköldsviks", "Östersunds", "Österåkers", "Östhammars", "Östra", "Överkalix", "Övertorneå"
    ];
    states.every(element => {
        const elementLower = element.toLowerCase();

        if (elementLower.substring(0, elementLower.length - 1).startsWith(state.substring(0, state.length - 1))) {
            state = `${element} kommun`;
            document.getElementById("rightHeader").innerHTML = `FAKTA OM ${element.substring(0, element.length - 1).toUpperCase()}`;
            document.title = `${state} — Ekko!`;
            return;
        }
        return true;
    });

    if (document.title === "Ekko!") {
        window.location.assign("404.html");
    } else {
        document.getElementById("header").innerHTML = state;

        const searchBar = document.getElementById("searchBar");
        searchBar.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                search(searchBar.value);
            }
        })
    }
}

function search(product) {
    if (product.toLowerCase().startsWith("smör")) {
        document.getElementById("statisticsImage").src = "images/butter.png";
        document.getElementById("statisticsContent").innerHTML = (
            "Vara: <b>Smör</b><br>" +
            "Märke: <b>Arla</b><br>" +
            "Ekologiska fotavtryck: <b>1 kg CO<sub>2</sub></b><br>" +
            "Säljs i: <b>ICA, Willy's & Netto</b><br>"
        );
    } else if (product.toLowerCase().startsWith("mjöl")) {
        document.getElementById("statisticsImage").src = "images/milk.png";
        document.getElementById("statisticsContent").innerHTML = (
            "Vara: <b>Mjölk</b><br>" +
            "Märke: <b>Arla</b><br>" +
            "Ekologiska fotavtryck: <b>2 kg CO<sub>2</sub></b><br>" +
            "Säljs i: <b>ICA, Willy's & Lidl</b><br>"
        );
    } else if (product.toLowerCase().startsWith("vete")) {
        document.getElementById("statisticsImage").src = "images/dust.png";
        document.getElementById("statisticsContent").innerHTML = (
            "Vara: <b>Vetemjöl</b><br>" +
            "Märke: <b>Kungsörnen</b><br>" +
            "Ekologiska fotavtryck: <b>3 kg CO<sub>2</sub></b><br>" +
            "Säljs i: <b>Coop & Circle K</b><br>"
        );
    } else if (product.toLowerCase().startsWith("strö")) {
        document.getElementById("statisticsImage").src = "images/sugar.png";
        document.getElementById("statisticsContent").innerHTML = (
            "Vara: <b>Strösocker</b><br>" +
            "Märke: <b>Garant</b><br>" +
            "Ekologiska fotavtryck: <b>1 kg CO<sub>2</sub></b><br>" +
            "Säljs i: <b>Coop, Circle K & ICA</b><br>"
        );
    } else if (product.toLowerCase().startsWith("havr")) {
        document.getElementById("statisticsImage").src = "images/flakes.png";
        document.getElementById("statisticsContent").innerHTML = (
            "Vara: <b>Havrefras</b><br>" +
            "Märke: <b>Quaker</b><br>" +
            "Ekologiska fotavtryck: <b>2 kg CO<sub>2</sub></b><br>" +
            "Säljs i: <b>Lidl, Netto & ICA</b><br>"
        );
    } else {
        document.getElementById("statisticsImage").src = "images/questionMark.png";
        document.getElementById("statisticsContent").innerHTML = (
            "Vara: <b>?</b><br>" +
            "Märke: <b>?</b><br>" +
            "Ekologiska fotavtryck: <b>?</b><br>" +
            "Säljs i: <b>?</b><br>"
        );
        alert("Vi fann tyvärr inga sökresultat.");
    }
}
