import { getApiData } from "./axios";

const categoryList = document.querySelector('.categories-list');

export async function generateCategoryList(){
  const list = await getApiData('/books/category-list');
  let generalHTML = '';

  list.forEach((item) => {
    generalHTML += `
      <li>
        <a href="">${item.list_name}</a>
      </li>
    `;
  });

  categoryList.innerHTML = generalHTML;
}


