const liczbaA = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);

    if (isNaN(a) || a < 1 || a > 12) {
        wynik.innerHTML = '<p>Podaj liczbę z przedziału od 1 do 12</p>';
        return;
    }

    let miesiac;
    if (a === 1) miesiac = "styczeń";
    else if (a === 2) miesiac = "luty";
    else if (a === 3) miesiac = "marzec";
    else if (a === 4) miesiac = "kwiecień";
    else if (a === 5) miesiac = "maj";
    else if (a === 6) miesiac = "czerwiec";
    else if (a === 7) miesiac = "lipiec";
    else if (a === 8) miesiac = "sierpień";
    else if (a === 9) miesiac = "wrzesień";
    else if (a === 10) miesiac = "październik";
    else if (a === 11) miesiac = "listopad";
    else if (a === 12) miesiac = "grudzień";


    wynik.innerHTML = `
        <p>Podana liczba to ${a}</p>
        <p>Podany miesiąc to: ${miesiac}</p>
    `;
});
