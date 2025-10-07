const liczbaX1 = document.querySelector("#x1");
const liczbaY1 = document.querySelector("#y1");
const liczbaX2 = document.querySelector("#x2");
const liczbaY2 = document.querySelector("#y2");
const liczbaX3 = document.querySelector("#x3");
const liczbaY3 = document.querySelector("#y3");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let x1 = parseFloat(liczbaX1.value);
    let x2 = parseFloat(liczbaX2.value);
    let x3 = parseFloat(liczbaX3.value);
    let y1 = parseFloat(liczbaY1.value);
    let y2 = parseFloat(liczbaY2.value);
    let y3 = parseFloat(liczbaY3.value);
    if (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }


    let P = 0.5 * Math.abs(
    (x1 * y2 - x2 * y1) + (x2 * y3 - x3 * y2) + (x3 * y1 - x1 * y3));

if (P < 1e-10) {
    wynik.innerHTML = '<p>Podane wartości nie są prawidłowe!!!</p>';
    return;
}


    wynik.innerHTML = `
        <p>Pole trójkąta ABC o wierzchołkach:</p>
        <p>( ${x1} ; ${y1} )</p>
        <p>( ${x2} ; ${y2}</p>
        <p>( ${x3} ; ${y3}</p>
        <p>P = ${P}</p>
    `;
})
