import { mainContainer } from "./best-sellers-cont";
import { getApiData } from "./axios";
import { removeDuplicates } from "./best-sellers-cont";
import { generateBestSellersBooks } from "./best-sellers-cont";

export async function generateCategoryBooks(category){
  if(category == 'All categories'){
    generateBestSellersBooks();
    return;
  }

  let generalHTML = `
    <h1>${category}</h1>
    <ul class="category-list-cont">
  `;
  let categoryBooks = await getApiData(`/books/category?category=${category}`);
  categoryBooks = removeDuplicates(categoryBooks);
  categoryBooks.forEach((book) => {
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

  generalHTML += `</ul>`;
  mainContainer.innerHTML = generalHTML;
}