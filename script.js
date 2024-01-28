// BUTTONS
const addBookBtn = document.querySelector('#add-book');
const modal = document.querySelector('#modal');
const cancelBtn = document.querySelector('#cancel')
const submitBtn = document.querySelector('#submit');
const readBtn = document.createElement('button');
const deleteBtn = document.createElement('button');

// ELEMENTS
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
    modal.close();
})

addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

cancelBtn.addEventListener('click', () => {
    modal.close();
})

// readBtn.addEventListener('click', () => {
//     console.log('error');
//     readBtn.classList.toggle('not-read');  
// })

const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#page-count').value;
    const read = document.querySelector('#read').value;
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    renderCard();
};

function renderCard() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardContainer.appendChild(cardDiv);
        const titleDiv = document.createElement('div');
        titleDiv.textContent = `Title: ${book.title}`;
        cardDiv.appendChild(titleDiv);
        const authorDiv = document.createElement('div');
        authorDiv.textContent = `Author: ${book.author}`;
        cardDiv.appendChild(authorDiv);
        const pagesDiv = document.createElement('div');
        pagesDiv.textContent = `Pages: ${book.pages}`
        cardDiv.appendChild(pagesDiv);
        const readBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        readBtn.classList.add('has-read');
        readBtn.textContent = 'Read';
        cardDiv.appendChild(readBtn);
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        cardDiv.appendChild(deleteBtn);
        
        readBtn.addEventListener('click', () => {
            console.log('error');
            readBtn.classList.toggle('not-read');  
        })
        
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice([i], 1);
            cardContainer.removeChild(cardDiv);
        })
    }
}