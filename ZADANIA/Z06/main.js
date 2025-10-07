const liczbaA = document.querySelector("#a");
const liczbaB = document.querySelector("#b");
const liczbaC = document.querySelector("#c");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    const a = parseFloat(liczbaA.value);
    const b = parseFloat(liczbaB.value);
    const c = parseFloat(liczbaC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }

    const s = (a + b + c) / 2;
    const heron = Math.sqrt(s *(s - a) * (s - b) * (s - c));

    wynik.innerHTML = `
        <p>Pole trójkąta o bokach:</p>
        <p>a: ${a}</p>
        <p>b: ${b}</p>
        <p>c: ${c}</p>
        <p>Wynosi:</p>
        <p>${heron}</p>
    `;
})
