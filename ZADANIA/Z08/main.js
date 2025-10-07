const liczbaS = document.querySelector("#s");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let s = parseFloat(liczbaS.value);

    if (isNaN(s) ||  s<= 0) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach, lub wpisz wartość wiekszą niż 0!</p>";
        return;
    }

    let godziny = Math.floor(s / 3600);
    let minuty = Math.floor((s % 3600) / 60);
    let sekundy = s % 60;

    wynik.innerHTML = `
        <p>Wynik: ${godziny}g ${minuty}m ${sekundy}s</p>
    `;
})
