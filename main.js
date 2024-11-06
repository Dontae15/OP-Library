const library = document.querySelector('.library');
const addBookBtn = document.getElementById('add-book-btn');
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const genreInput = document.getElementById('genre');
const readRadio = document.getElementById('read');
const readingRadio = document.getElementById('reading');
const notReadRadio = document.getElementById('not-read');
const addToLibraryBtn = document.getElementById('add-to-library-btn');

bookForm.style.display = 'none';

const myLibrary = [];
console.log(myLibrary);




function Book(name, author, pages, genre, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

function getBook() {
    addBookBtn.style.display = 'none';
    bookForm.style.display = 'flex';
}

function displayLibrary() {

        library.innerHTML = '';

        myLibrary.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
    
            // Add the book details
            bookItem.innerHTML = `
                <p><strong>Title:</strong> ${book.name}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Status:</strong> ${book.read}</p>
                <button onclick="removeBook(${index})">Remove</button>
            `;
    
            library.appendChild(bookItem);
        });
    
}


function addBookToLibrary() {
    let readInput;

    if (notReadRadio.checked) {
        readInput = 'Not read';
    } else if (readingRadio.checked) {
        readInput = 'Currently reading';
    } else if (readRadio.checked) {
        readInput = 'Read';
    } else {
        console.error('No read status selected');
        return;
    }

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const genre = genreInput.value;
    const read = readInput;

    const newBook = new Book(title, author, pages, genre, read);
    console.log("New book created:", newBook); // Check if the book is created

    myLibrary.push(newBook);
    console.log("Updated myLibrary array:", myLibrary); // Check if the array is updated

    bookForm.reset();
    displayLibrary();

    bookForm.style.display = 'none';
    addBookBtn.style.display = 'inline-block';
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

addBookBtn.addEventListener('click', getBook);
addToLibraryBtn.addEventListener('click', addBookToLibrary);
