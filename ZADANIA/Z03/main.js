document.getElementById('calculate-btn').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);
    const resultsDiv = document.getElementById('results');
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        resultsDiv.innerHTML = '<p style="color: red;">Wprowadź poprawne wartości we wszystkich polach.</p>';
        return;
    }

    if (a < 0 || b < 0 || c < 0 || d < 0) {
        resultsDiv.innerHTML = '<p style="color: red;">Średnią geometryczną można obliczyć tylko dla liczb nieujemnych.</p>';
        return;
    }

    const product = a * b * c * d;
    const geometricMean = Math.pow(product, 1/4);
    const roundedMean = geometricMean.toFixed(3);
    resultsDiv.innerHTML = `
        <p>a: ${a}</p>
        <p>b: ${b}</p>
        <p>c: ${c}</p>
        <p>d: ${d}</p>
        <p>Średnia: ${geometricMean}</p>
        <p>Średnia zaokrąglona: ${roundedMean}</p>
    `;
});
