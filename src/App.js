/*
*File: App.js
* Author: Bús Tamás
* Copyright: 2025, Bús Tamás
* Group: Szoft N/I
* Date: 2025-04-26
* Github:bustamas
* Licenc: MIT
*/


function calculateSurface() {
    const r = parseFloat(document.getElementById('radius').value);
    const h = parseFloat(document.getElementById('height').value);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
        document.getElementById('result').innerHTML = 'Adjon meg érvényes pozitív értékeket!';
        return;
    }

    const surfaceArea = 2 * Math.PI * r * (r + h);
    document.getElementById('result').innerHTML = `A henger felszíne: <strong>${surfaceArea.toFixed(2)}</strong> egység²`;
}