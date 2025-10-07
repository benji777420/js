const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const btn = document.querySelector('button');
const results = document.querySelector('#results');

btn.addEventListener('click', function() {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);

    if (b === 0) {
        results.innerHTML = 'Nie można dzielić przez zero cholero!';
    } else if (isNaN(a) || isNaN(b)) {
        results.innerHTML = 'Wprowadź poprawne liczby!';
    } else {
        const iloraz = a / b;
        results.innerHTML = `Iloraz: <b>${iloraz.toFixed(2)}</b>`;
    }
});