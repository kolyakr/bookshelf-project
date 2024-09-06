import { allCategories } from "./data";
import { getApiData } from "./axios";
const mainContainer = document.querySelector('.main-container');

export async function generateMainContainer(){
  let generalHTML = `
    <h1>Best Sellers <span class="books-word">Books</span></h1>
  `;

  const randomCategories = allCategories.slice(0, 4);
  for(const category of randomCategories){
    generalHTML += `
      <section>
        <a href="">
          <h4>${category.list_name}</h4>
        </a>
        <ul>
    `;
    let books = await getApiData(`/books/category?category=${category.list_name}`);
    books = books.slice(0, 5);
    books.forEach((book) => {
      generalHTML += `
        <li>
          <a href="">
            <img src="${book.book_image}">
            <p class="book-name">${book.title}</p>
            <p class="author-name">${book.author}</p>
          </a>
        </li>
      `;
    });
    generalHTML += `
      </ul>
      <button class="see-more-btn" data-category="${category.list_name}">SEE MORE</button>
    </section>
  `;
  }

  mainContainer.innerHTML = generalHTML;
  initializeSeeMoreBtn();
}

function initializeSeeMoreBtn(){
  const seeMoreBtn = document.querySelectorAll('.see-more-btn');
  seeMoreBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      loadCategory(e.target.dataset.category);
    });
  });
}

async function loadCategory(category){
  let generalHTML = `
    <h1>${category}</h1>
  `;
  const categoryBooks = await getApiData(`/books/category?category=${category}`);
  let counter = 0;
  categoryBooks.forEach((book) => {
    if(counter % 5 == 0){
      generalHTML += `
      <section>
        <ul>
    `;
    }

    generalHTML += `
      <li>
        <a href="">
          <img src="${book.book_image}">
          <p class="book-name">${book.title}</p>
          <p class="author-name">${book.author}</p>
        </a>
      </li>
    `;

    counter++
    if(counter % 5 == 0){
      generalHTML += `
          </ul>
        </section>
      `;
    }
  });

  mainContainer.innerHTML = generalHTML;
}

