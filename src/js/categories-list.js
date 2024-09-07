import { getApiData } from "./axios";
import { generateCategoryBooks } from "./category-cont";
import { generateBestSellersBooks } from "./best-sellers-cont";

const categoryList = document.querySelector('.categories-list');
let currentCategoryId = "category-link-1";

export async function generateCategoryList(){
  let allCategories;
  let generalHTML = `
    <li>
        <a href="#" class="category-link" id="category-link-1">All categories</a>
    </li>
  `;
  if(localStorage.getItem('allCategories') == null){
    allCategories = await getApiData('/books/category-list');
    localStorage.setItem('allCategories', JSON.stringify(allCategories));
  }else{
    allCategories = JSON.parse(localStorage.getItem('allCategories'));
  }

  let number = 2;
  allCategories.forEach((item) => {
    generalHTML += `
      <li>
        <a href="#" class="category-link" id="category-link-${number}">${item.list_name}</a>
      </li>
    `;
    number++;
  });

  categoryList.innerHTML = generalHTML;

  document.getElementById(`${currentCategoryId}`)
    .classList.add('current-category');

  document.querySelectorAll('.category-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      generateCategoryBooks(e.target.textContent);
      markCategory(e.target.id);
    });
  })
}

export function markCategory(id){
  document.getElementById(`${currentCategoryId}`)
    .classList.remove('current-category');

  document.getElementById(`${id}`)
    .classList.add('current-category');
  currentCategoryId = id;
}


