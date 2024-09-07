import { getApiData } from "./axios";
import { generateCategoryBooks } from "./category-cont";

const categoryList = document.querySelector('.categories-list');

export async function generateCategoryList(){
  let allCategories;
  let generalHTML = '';
  if(localStorage.getItem('allCategories') == null){
    allCategories = await getApiData('/books/category-list');
    localStorage.setItem('allCategories', JSON.stringify(allCategories));
  }else{
    allCategories = JSON.parse(localStorage.getItem('allCategories'));
  }

  allCategories.forEach((item) => {
    generalHTML += `
      <li class="category-link">
        <a href="#">${item.list_name}</a>
      </li>
    `;
  });

  categoryList.innerHTML = generalHTML;

  document.querySelectorAll('.category-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      generateCategoryBooks(e.target.textContent);
    });
  })
}


