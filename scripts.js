//List Books
const addButton = document.querySelector(".add-btn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const form = document.querySelector(".add-book-form");

// localStorage.setItem('bookData', JSON.stringify());

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = Math.random().toString() //unique id declaration
}

const postContainer = document.querySelector(".book-list");

function postMethods() {
  //create
  const bookDB = JSON.parse(localStorage.getItem("bookData"));
  // check the local storage if there is any database for books list
  if (bookDB === null || bookDB.length === 0) {
    // exit before
    return;
  }
  bookDB.forEach((book) => {
    console.log(book);
    const postElement = document.createElement("article");
    postElement.classList.add("book-item");
    postElement.innerHTML = `
    <p class="book-title">${book.title}</p>
          <p class="book-author">${book.author}</p>
    `;
    postContainer.appendChild(postElement);

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerText = "Remove";
    removeBtn.id = book.id;
    postElement.appendChild(removeBtn);

  });
}

postMethods();

function addBook() {
  /* event.preventDefault(); */
  /* if inputs are not empty */
  const bookDB = JSON.parse(localStorage.getItem("bookData")) || [];
  if (titleInput.value && authorInput.value) {
    const book = new Book(titleInput.value, authorInput.value);
    const newBookData = [...bookDB, book];
    // bookData.push(book)
    localStorage.setItem("bookData", JSON.stringify(newBookData));
    postMethods(newBookData);
    console.log(newBookData);
  }
  /* var newbookData = JSON.parse(localStorage.getItem('bookData')) */
}

form.addEventListener("submit", addBook);
