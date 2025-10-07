const liczbaA = document.querySelector("#a");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);

    if (isNaN(a)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    let kelwin = a *274.15;
    let f = a * 33.8;

    wynik.innerHTML = `
        <p>Temperatura w <sup>o</sup>C : ${a}</p>
        <p>Temperatura w <sup>o</sup>Kelvina : ${kelwin}</p>
        <p>Temperatura w <sup>o</sup>Fahrenhaita : ${f}</p>
    `;
})
