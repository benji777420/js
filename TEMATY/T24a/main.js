const liczbaA = document.querySelector("#a");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#calculate-btn");

btn.addEventListener("click", function () {

    const dane = liczbaA.value.trim();

    const [imieRaw, nazwiskoRaw] = dane.split(' ');

    const imie =
        imieRaw.charAt(0).toUpperCase() + imieRaw.slice(1).toLowerCase();
    const nazwisko =
        nazwiskoRaw.charAt(0).toUpperCase() + nazwiskoRaw.slice(1).toLowerCase();

    wynik.innerHTML = `
<p>Twoje imię i nazwisko to: ${imie} ${nazwisko}</p>
    `;
});
