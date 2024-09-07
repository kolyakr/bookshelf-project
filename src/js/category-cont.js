import { mainContainer } from "./best-sellers-cont";
import { getApiData } from "./axios";

export async function generateCategoryBooks(category){
  let generalHTML = `
    <h1>${category}</h1>
    <ul class="category-list-cont">
  `;
  const categoryBooks = await getApiData(`/books/category?category=${category}`);
  console.log(categoryBooks);
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