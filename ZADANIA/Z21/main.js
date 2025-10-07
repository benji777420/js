const liczbaA = document.querySelector("#a");
const liczbaB = document.querySelector("#b");
const liczbaH = document.querySelector("#h");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);
    let b = parseFloat(liczbaB.value);
    let h = parseFloat(liczbaH.value);
    if (isNaN(a) || isNaN(b) || isNaN(h)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    let pole = (a + b) * h / 2;
    const polezaokroglone = pole.toFixed(2)

    wynik.innerHTML = `
        <p>Pole trapezu składającego się z a: ${a} b: ${b} h: ${h} wynosi:</p>
        <p>${polezaokroglone}</p>
    `;
})
