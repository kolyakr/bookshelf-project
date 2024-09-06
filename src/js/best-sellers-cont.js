import { allCategories } from "./data";
import { getApiData } from "./axios";
import { generateCategoryBooks } from "./category-cont";
export const mainContainer = document.querySelector('.main-container');

export async function generateBestSellersBooks(){
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
        <ul class="list-cont">
    `;
    let books = await getApiData(`/books/category?category=${category.list_name}`);
    books = books.slice(0, 5);
    books.forEach((book) => {
      generalHTML += `
        <li class="list-item-cont">
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
      generateCategoryBooks(e.target.dataset.category);
    });
  });
}