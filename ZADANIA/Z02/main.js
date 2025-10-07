const liczbaA = document.querySelector("#a");
const liczbaB = document.querySelector("#b");
const liczbaC = document.querySelector("#c");
const liczbaD = document.querySelector("#d");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    const a = parseFloat(liczbaA.value);
    const b = parseFloat(liczbaB.value);
    const c = parseFloat(liczbaC.value);
    const d = parseFloat(liczbaD.value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    const suma = a + b + c + d;
    const srednia = suma / 4;
    const sredniaZaokraglona = srednia.toFixed(3);

    wynik.innerHTML = `
        <p>a: ${a}</p>
        <p>b: ${b}</p>
        <p>c: ${c}</p>
        <p>d: ${d}</p>
        <p>Średnia: ${srednia}</p>
        <p>Średnia (zaokrąglona do 3 miejsc): ${sredniaZaokraglona}</p>
    `;
});
