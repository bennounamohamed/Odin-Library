const myLibrary = [];
const addBookBtn = document.getElementById("add-book-btn");
const inputName = document.getElementById("input-name");
const inputAuthor = document.getElementById("input-author");
const inputPages = document.getElementById("input-pages");
const mainDiv = document.querySelector(".main");

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(name, author, pages) {
  myLibrary.push(new Book(name, author, pages));
}

addBookToLibrary("The 7", "Mohamed", 227);
addBookToLibrary("The 8 ", "Amine", 358);

function displayLibrary(library) {
  const mainDiv = document.querySelector(".main");
  library.forEach((book, index) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${book.name} by ${book.author} and has ${book.pages} pages`;
    const button = document.createElement("button");
    button.textContent = "Remove";
    button.classList = "remove-btn";
    button.dataset.index = index;
    mainDiv.appendChild(paragraph);
    mainDiv.appendChild(button);
  });
}

displayLibrary(myLibrary);

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(inputName.value, inputAuthor.value, inputPages.value);
  mainDiv.innerHTML = "";
  displayLibrary(myLibrary);
});

mainDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = Number(e.target.dataset.index);
    myLibrary.splice(index, 1);
    mainDiv.innerHTML = "";
    displayLibrary(myLibrary);
  }
});
