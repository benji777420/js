const btnRysuj = document.querySelector('#rysuj');
const poleA = document.querySelector('#a');
const poleB = document.querySelector('#b');
const kontenerWynik = document.querySelector('#wynik');

function rysujRamke(szerokosc, wysokosc) {
    let wynikowaRamka = "";

    for (let i = 0; i < wysokosc; i++) {
        for (let j = 0; j < szerokosc; j++) {

            if (i === 0 || i === wysokosc - 1 || j === 0 || j === szerokosc - 1) {
                wynikowaRamka += "|";
            } else {
                wynikowaRamka += " ";
            }
        }
        wynikowaRamka += "\n";
    }

    return wynikowaRamka;
}

btnRysuj.addEventListener('click', function() {

    const a = parseInt(poleA.value);
    const b = parseInt(poleB.value);

    if (!isNaN(a) && !isNaN(b)) {
        kontenerWynik.textContent = rysujRamke(a, b);
    } else {
        kontenerWynik.textContent = "Podaj prawidłowe wymiary!";
    }
});