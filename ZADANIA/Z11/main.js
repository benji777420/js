const liczbaA = document.querySelector("#a");
const liczbaB = document.querySelector("#b");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);
    let b = parseFloat(liczbaB.value);

    if (isNaN(a) || isNaN(b)){
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    const wynik1 = (a * b) / 100;


    wynik.innerHTML = `
        <p>${b}% z liczby ${a} wynosi: ${wynik1}</p>
    `;
})
