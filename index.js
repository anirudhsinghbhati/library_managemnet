// 📚 Library Management Template

// Array to hold all books
const myLibrary = [];

// Book constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Function to add a book object to library array
function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  displayBooks();
}

// Function to display books on the page
function displayBooks() {
  const shelf = document.querySelector(".book-shelf");
  shelf.innerHTML = ""; // clear existing shelf

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="Untitled.jpeg" alt="no image">
      <div class="description">
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;

    shelf.appendChild(card);
  });
}

// Handle Add Book button
document.getElementById("addbook").addEventListener("click", () => {
  const title = prompt("Enter book's title");
  if (!title) return;

  const author = prompt("Enter book's author");
  if (!author) return;

  const pages = +prompt("Enter book's pages");
  if (!pages || isNaN(pages)) return alert("Only numbers allowed for pages");

  addBookToLibrary(title, author, pages);
});

// Handle Remove Book button
document.querySelector(".book-shelf").addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    myLibrary.splice(index, 1); // remove from array
    displayBooks(); // re-render the shelf
  }
});
