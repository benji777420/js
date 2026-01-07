const liczbaA = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);

    if (isNaN(a) || a < 1 || a > 12) {
        wynik.innerHTML = '<p>Podaj liczbę z przedziału od 1 do 7</p>';
        return;
    }

    let dzien;
    if (a === 1) dzien = "styczeń";
    else if (a === 2) dzien = "luty";
    else if (a === 3) dzien = "marzec";
    else if (a === 4) dzien = "kwiecień";
    else if (a === 5) dzien = "maj";
    else if (a === 6) dzien = "czerwiec";
    else if (a === 7) dzien = "lipiec";
    else if (a === 8) dzien = "sierpień";
    else if (a === 9) dzien = "wrzesień";
    else if (a === 10) dzien = "pażdziernik";
    else if (a === 11) dzien = "listopad";
    else if (a === 12) dzien = "grudzień";



    wynik.innerHTML = `
        <p>Podana liczba to ${a}</p>
        <p>Miesiąc to: ${dzien}</p>
    `;
});
