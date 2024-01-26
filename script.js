// BUTTONS
const addBookBtn = document.querySelector('#add-book');
const modal = document.querySelector('#modal');
const cancelBtn = document.querySelector('#cancel')
const submitBtn = document.querySelector('#submit');
const readBtn = document.querySelector('#read-button');

// ELEMENTS
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
   const newDiv = document.createElement('div');
   newDiv.classList.add('card');
   cardContainer.appendChild(newDiv);
   modal.close();
})

addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

cancelBtn.addEventListener('click', () => {
    modal.close();
})

readBtn.addEventListener('click', () => {
    readBtn.classList.toggle('not-read');  
})

const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

};

// HINTS
// USE NEW KEYWORD TO CREATE A NEW OBJECT