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

    if (b === 0) {
        wynik.innerHTML = "<p>Mianownik nie może być równy 0!</p>";
        return;
    }

    const calkowita = Math.floor(a / b);
    const reszta = a % b;

    if (reszta === 0) {
        wynik.innerHTML = `<p>Ułamek ${a} / ${b} to liczba całkowita: <b>${calkowita}</b></p>`;
    }
    else if (calkowita === 0) {
        wynik.innerHTML = `<p>Ułamek ${a} / ${b} to ułamek właściwy: <b>${reszta}/${b}</b></p>`;
    }
    else {
        wynik.innerHTML = `<p>Ułamek ${a} / ${b} = ${calkowita} i <b>${reszta}/${b}</b></p>`;
    }
});
