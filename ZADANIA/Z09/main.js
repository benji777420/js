const liczbaA = document.querySelector("#a");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);

    if (isNaN(a)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    let liczba_w_mm = a * 25.3995;

    wynik.innerHTML = `
        <p>Liczba ${a} w mm wynosi: ${liczba_w_mm}</p>
    `;
})