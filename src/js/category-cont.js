import { mainContainer } from './best-sellers-cont';
import { getApiData } from './axios';
import { removeDuplicates } from './best-sellers-cont';
import { generateBestSellersBooks } from './best-sellers-cont';
import { initializeBookContainers } from './best-sellers-cont';

export async function generateCategoryBooks(category) {
  if (category == 'All categories') {
    generateBestSellersBooks();
    return;
  }

  const categoryWords = category.split(' ');
  const lastWord = categoryWords.pop();
  const categoryWithoutLastWord = categoryWords.join(' ');

  let generalHTML = `
    <h1>${categoryWithoutLastWord} <span class="books-word">${lastWord}</span></h1>
    <ul class="category-list-cont">
  `;
  let categoryBooks = await getApiData(`/books/category?category=${category}`);
  categoryBooks = removeDuplicates(categoryBooks);
  categoryBooks.forEach(book => {
    generalHTML += `
        <li class="list-item-cont">
          <div data-id="${book._id}">
            <img class="book-img" src="${book.book_image}" alt="${book.list_name}" width="${book.book_image_width}" height="${book.book_image_height}"  loading="lazy">
            <p class="overlay">view details</p>
            <p class="book-name">${book.title}</p>
            <p class="author-name">${book.author}</p>
          </div>
        </li>
      `;
  });

  generalHTML += `</ul>`;
  mainContainer.innerHTML = generalHTML;

  initializeBookContainers();
}
