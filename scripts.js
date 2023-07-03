//List Books
const cardData = [
    {
      title: 'Lorem ipsum',
      author: 'Testeroo Testy',
    },
    {
        title: 'Lorem ipsum',
        author: 'Testeroo Testy',
    },
    {
        title: 'Lorem ipsum',
        author: 'Testeroo Testy',
    },
    {
        title: 'Lorem ipsum',
        author: 'Testeroo Testy',
    },
    {
        title: 'Lorem ipsum',
        author: 'Testeroo Testy',
    },
    {
      title: 'Lorem ipsum',
      author: 'Testeroo Testy',
    },
  ];
  
  const postContainer = document.querySelector('.book-list');
  
  const postMethods = () => {
    cardData.forEach((postData) => {
      const postElement = document.createElement('article');
      postElement.classList.add('book-item');
      postElement.innerHTML = `
      <p class="book-title">${postData.title}</p>
            <p class="book-author">${postData.author}</p>
            <button>Remove</button>
      `;
      postContainer.appendChild(postElement);
    });
  };
  
  postMethods();