import { getApiData } from "./axios";
import { allCategories } from "./data";

const categoryList = document.querySelector('.categories-list');

export async function generateCategoryList(){
  const data = await getApiData('/books/category-list');
  let generalHTML = '';

  data.forEach((item) => {
    generalHTML += `
      <li>
        <a href="">${item.list_name}</a>
      </li>
    `;
  });

  categoryList.innerHTML = generalHTML;
  allCategories.length = 0;
  allCategories.push(...data);
}


