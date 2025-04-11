const button = document.querySelector('.dropbtn');
const dropdown = document.getElementById('dropdownMenu');

button.addEventListener('click', function () {
    dropdown.classList.toggle('show');
});


window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropbtn')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});



const box = document.getElementById('colorBox');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

box.addEventListener('click', () => {
    box.style.backgroundColor = getRandomColor();
});



const textBlock = document.getElementById('textBlock');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    textBlock.classList.toggle('expanded');
    toggleBtn.textContent = textBlock.classList.contains('expanded')
        ? 'Сховати'
        : 'Показати більше';
});







let count = 0;
const btn = document.getElementById('counterBtn');
const display = document.getElementById('countDisplay');

btn.addEventListener('click', () => {
    count++;
    display.textContent = `Натискань: ${count}`;
});


function showDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // місяці з 0
    const year = now.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;
    document.getElementById('dateOutput').textContent = `Сьогодні: ${formattedDate}`;
}


function calculateSum() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const sum = a + b;

    document.getElementById('result').textContent = isNaN(sum) ? 'Некоректні дані' : sum;
}