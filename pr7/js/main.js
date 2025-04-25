
const student = {
    firstName: "Олена",
    lastName: "Шевченко",
    age: 21,
    grades: [10, 9, 8, 10, 9],
    getAverageGrade() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return (sum / this.grades.length).toFixed(2);
    }
};

const studentDiv = document.getElementById("student-info");
studentDiv.innerHTML = `
    <p>Ім’я: ${student.firstName}</p>
    <p>Прізвище: ${student.lastName}</p>
    <p>Вік: ${student.age}</p>
    <p>Оцінки: ${student.grades.join(", ")}</p>
    <p>Середній бал: ${student.getAverageGrade()}</p>
  `;

const books = [
    { title: "Майстер і Маргарита", author: "М. Булгаков", year: 1966 },
    { title: "1984", author: "Дж. Оруелл", year: 1949 },
    { title: "Тіні забутих предків", author: "М. Коцюбинський", year: 1911 },
    { title: "Хоббіт", author: "Дж. Р. Р. Толкін", year: 1937 },
    { title: "Сила звички", author: "Ч. Дюгіг", year: 2012 }
];

const bookList = document.getElementById("book-list");
books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title}, ${book.author}, ${book.year}`;
    bookList.appendChild(li);
});


const oldestBook = books.reduce((prev, curr) => prev.year < curr.year ? prev : curr);
document.getElementById("oldest-book").textContent =
    `Найстаріша книга: "${oldestBook.title}", ${oldestBook.year}`;

const recentBooks = books.filter(book => book.year > 2010);
const recentBooksList = document.getElementById("recent-books");
recentBooks.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title}, ${book.year}`;
    recentBooksList.appendChild(li);
});


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
document.getElementById("doubled-numbers").textContent = `Подвоєні: ${doubled.join(", ")}`;


const propertiesList = document.getElementById("student-properties");
for (let key in student) {
    if (typeof student[key] !== 'function') {
        const li = document.createElement("li");
        li.textContent = `${key}: ${student[key]}`;
        propertiesList.appendChild(li);
    }
}

function filterExcellentStudents(students) {
    return students.filter(s => s.getAverageGrade() > 8);
}

books.sort((a, b) => a.year - b.year); 
console.log("Відсортовані книги за роком:", books);