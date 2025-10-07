const liczbaA = document.querySelector("#a");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);
    a = Math.floor(liczbaA.value);
    if (isNaN(a)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    let kwadrat = a * a;
    let szescian = a * a * a;

    wynik.innerHTML = `
        <p>Kwadrat liczby ${a} = ${kwadrat}</p>
        <p>Sześcian liczby ${a} = ${szescian}</p>
    `;
})
