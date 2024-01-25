const addBookBtn = document.querySelector('#add-book');
const modal = document.querySelector('#modal');
const cancelBtn = document.querySelector('#cancel')



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
// USE PROMPT 
// USE NEW KEYWORD TO CREATE A NEW OBJECT


addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

cancelBtn.addEventListener('click', () => {
    modal.close();
})