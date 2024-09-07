import { getApiData } from "./axios";
import { allCategories } from "./data";
import { generateCategoryBooks } from "./category-cont";

const categoryList = document.querySelector('.categories-list');

export async function generateCategoryList(){
  const data = await getApiData('/books/category-list');
  let generalHTML = '';

  data.forEach((item) => {
    generalHTML += `
      <li class="category-link">
        <a href="#">${item.list_name}</a>
      </li>
    `;
  });

  categoryList.innerHTML = generalHTML;
  allCategories.length = 0;
  allCategories.push(...data);

  document.querySelectorAll('.category-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      generateCategoryBooks(e.target.textContent);
    });
  })
}


