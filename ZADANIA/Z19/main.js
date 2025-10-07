const liczbaA = document.querySelector("#a");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);

    if (isNaN(a)){
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    const rownanie = (a *a) / Math.pow(1 + Math.abs(a), 2);


    wynik.innerHTML = `
        <p>x = ${a}</p>
        <p>Wartość wyrażenia = ${rownanie}</p>
    `;
})
