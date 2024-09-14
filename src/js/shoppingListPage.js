import { key } from "./shopping-list"

const shListItemsList = document.querySelector('.main-sh-list');

export function generateShoppingList(){
  let info = localStorage.getItem(key);
  if(!info || info.length == 0){
    return null;
  }else{
    let generalHTML = '';
    const shoppingList = JSON.parse(info);
    shoppingList.forEach((item) => {
      generalHTML += `
        <li class="main-sh-list-item">
          <div class="sh-img-cont">
            <img src="${item.book_image}">
          </div>
          <div class="sh-info-cont">
            <div class="sh-info-title">
              <div class="sh-title-category">
                <p class="sh-title">${item.title}</p>
                <p class="sh-category">${item.list_name}</p>
              </div>
              <div>
                <button class="delete-sh-list-item-btn">
                  <svg class="icon-trash">
                    <use href="../img/icons.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="sh-info-description">
              <p>
                ${item.description}
              </p>
            </div>
            <div class="sh-info-footer">
              <div>
                <p class="sh-author">${item.author}</p>
              </div>
              <div class="sh-info-footer-imgs">
                <img class="sh-img-amazon" src="" alt="">
                <img class="sh-img-book" src="" alt="">
              </div>
            </div>
          </div>
        </li>
      `
    });

    shListItemsList.innerHTML = generalHTML;
  }
}

