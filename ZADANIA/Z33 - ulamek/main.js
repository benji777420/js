document.addEventListener('DOMContentLoaded', () => {
    const licznikInput = document.getElementById('a');
    const mianownikInput = document.getElementById('b');
    const Btn = document.getElementById('calculate-btn');
    const result = document.getElementById('wynik');

    Btn.addEventListener('click', () => {
        const licznikRaw = licznikInput.value.trim().replace(',', '.');
        const mianownikRaw = mianownikInput.value.trim().replace(',', '.');

        const licznik = Number(licznikRaw);
        const mianownik = Number(mianownikRaw);

        if (isNaN(licznik) || isNaN(mianownik) || mianownik <= 0) {
            result.textContent = 'Błąd danych.';
            return;
        }

        if (!Number.isInteger(licznik) || !Number.isInteger(mianownik)) {
            result.textContent = 'Liczba nie jest całkowita.';
            return;
        }

        if (licznik <= mianownik) {
            result.textContent = 'Ułamek właściwy: ' + licznik + '/' + mianownik;
            return;
        }

        const calosc = Math.floor(licznik / mianownik);
        const nowyyLicznik = licznik % mianownik;

        let wynik;
        if (nowyyLicznik === 0) {
            wynik = calosc;
        } else {
            wynik = calosc + ' i ' + nowyyLicznik + '/' + mianownik;
        }

        result.textContent = wynik;
    });
});
