//List Books
const addButton = document.querySelector('.add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const bookData = [];

function Books(title, author) {
  this.title = title;
  this.author = author;
};

const postContainer = document.querySelector('.book-list');
  
const postMethods = () => {
  bookData.forEach((book) => {
    const postElement = document.createElement('article');
    postElement.classList.add('book-item');
    postElement.innerHTML = `
    <p class="book-title">${book.title}</p>
          <p class="book-author">${book.author}</p>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerText = 'Remove';
    postElement.appendChild(removeBtn);
    postContainer.appendChild(postElement);

    });
  };

  function addBook() {
    let book = new Books(titleInput.value, authorInput.value);

    if(titleInput.value && authorInput.value) {
      bookData.push(book)
    }
  }

addButton.addEventListener('click', addBook);
addButton.addEventListener('click', postMethods);
