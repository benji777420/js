const obrazek = document.getElementById('obrazek');
const kolorInput = document.getElementById('kolor');
const gruboscInput = document.getElementById('grubosc');
const rysujRamkeButton = document.getElementById('rysujRamke');

rysujRamkeButton.addEventListener('click', () => {

    const kolor = kolorInput.value;
    const grubosc = gruboscInput.value;

    obrazek.style.border = `${grubosc}px solid ${kolor}`;

    obrazek.style.boxShadow = `0 0 10px ${kolor}`;
});