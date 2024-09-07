import { getApiData } from './axios';
import { markCategory } from './categories-list';
import { generateCategoryBooks } from './category-cont';
export const mainContainer = document.querySelector('.main-container');

export async function generateBestSellersBooks() {
  let generalHTML = `
    <h1>Best Sellers <span class="books-word">Books</span></h1>
  `;

  const categories = JSON.parse(localStorage.getItem('allCategories'));
  console.log(categories);
  let number = 2;
  for (const category of categories) {
    generalHTML += `
      <section>
        <a href="">
          <h4>${category.list_name}</h4>
        </a>
        <ul class="list-cont">
    `;
    let books = await getApiData(
      `/books/category?category=${category.list_name}`
    );
    books = removeDuplicates(books);
    books = books.slice(0, 5);
    books.forEach(book => {
      generalHTML += `
        <li class="list-item-cont">
          <a href="">
            <img class="book-img" src="${book.book_image}" alt="${book.list_name}" width="${book.book_image_width}" height="${book.book_image_height}"  loading="lazy">
            <p class="book-name">${book.title}</p>
            <p class="author-name">${book.author}</p>
          </a>
        </li>
      `;
    });
    generalHTML += `
      </ul>
      <button class="see-more-btn" data-category="${category.list_name}" data-id="category-link-${number}">SEE MORE</button>
    </section>
    `;
    number++;
  }

  mainContainer.innerHTML = generalHTML;
  initializeSeeMoreBtn();
}

function initializeSeeMoreBtn() {
  const seeMoreBtn = document.querySelectorAll('.see-more-btn');
  seeMoreBtn.forEach(button => {
    button.addEventListener('click', e => {
      generateCategoryBooks(e.target.dataset.category);
      markCategory(e.target.dataset.id);
    });
  });
}

export function removeDuplicates(array) {
  let duplicates = [];
  const newArray = array.filter(item => {
    if (!duplicates.find(duplicate => duplicate.title == item.title)) {
      duplicates.push(item);
      return true;
    } else {
      return false;
    }
  });
  return newArray;
}
