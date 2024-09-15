import { key } from "./shopping-list"
import { deleteFromShList } from "./shopping-list";

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
              <div data-id="${item._id}">
                <button class="delete-sh-list-item-btn">
                   <img
                     class="amazon-img"
                     srcset="
                      ./img/modal/trash_1x.png 1x,
                       ./img/modal/trash_2x.png 2x
                     "
                     src="./img/modal/trash_1x.png"
                   />
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
                <a href="${item.buy_links[0].url}">
                  <img
                    class="sh-img-amazon"
                    srcset="
                      ./img/modal/amazon_1x.png 1x,
                      ./img/modal/amazon_2x.png 2x
                    "
                    src="./img/modal/amazon_1x.png"
                  />
                </a>
                <a href="${item.buy_links[1].url}">
                  <img
                    class="sh-img-book"
                    srcset="
                      ./img/modal/book_1x.png 1x,
                      ./img/modal/book_2x.png 2x
                    "
                    src="./img/modal/book_1x.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
      `
    });

    shListItemsList.innerHTML = generalHTML;

    document.querySelectorAll('.delete-sh-list-item-btn')
      .forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.closest('div').dataset.id;
          if(deleteFromShList(id)){
            generateShoppingList();
          }else{
            return;
          }
        });
      });
  }
}