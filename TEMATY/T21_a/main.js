const liczbaA = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {
    let a = parseFloat(liczbaA.value);
    let wynikwynik = "";

    for (let i = 1; i <= 30; i++) {
        wynikwynik += i + " ";

        if (i === a) {
            break;
        }
    }

    wynik.textContent = wynikwynik;
});
