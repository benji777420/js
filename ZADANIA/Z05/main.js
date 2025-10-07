const liczbaA = document.querySelector("#a");
const liczbaB = document.querySelector("#b");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    const a = parseFloat(liczbaA.value);
    const b = parseFloat(liczbaB.value);
    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "<p style='color: red;'>Wprowadź poprawne liczby we wszystkich polach!</p>";
        return;
    }
    let suma = a + b;
    let roznica = a - b;
    let iloczyn = a * b;
    let ilorazCalkowity = Math.floor(a / b);
    let reszta = a % b;
    if (b===0) {
        ilorazCalkowity = "Nie dzielimy przez 0"
        reszta ="Nie dzielimy przez 0"; }
    else{
        roznica = roznica
        reszta = reszta
    }
    wynik.innerHTML = `<p>a: ${a}</p>
<p>b: ${b}</p>
<p>suma: ${suma}</p>
<p>roznica: ${roznica}</p>
<p>iloczyn: ${iloczyn}</p>
<p>ilorazCalkowity: ${ilorazCalkowity}</p>
<p>reszta: ${reszta}</p>`;
})
