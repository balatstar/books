//List Books
const cardData = [
    {
      title: 'Lorem ipsum 1',
      author: 'Testeroo Testy 1',
    },
    {
        title: 'Lorem ipsum 2',
        author: 'Testeroo Testy 2',
    },
    {
        title: 'Lorem ipsum 3',
        author: 'Testeroo Testy 3',
    },
    {
        title: 'Lorem ipsum 4',
        author: 'Testeroo Testy 4',
    },
    {
        title: 'Lorem ipsum 5',
        author: 'Testeroo Testy 5',
    },
    {
      title: 'Lorem ipsum 6',
      author: 'Testeroo Testy 6',
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