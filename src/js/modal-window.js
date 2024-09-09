import * as basicLightbox from 'basiclightbox';
import { getApiData } from './axios';
import { addToShList } from './shopping-list';
import { removeFromShList } from './shopping-list';
import { checkBookInShList } from './shopping-list';

export async function showBookInfo(bookItem) {
  const book = await getApiData(`/books/${bookItem.dataset.id}`);
  const instance = basicLightbox.create(
    `
    <div class="modal-window">
          <div class="modal-book-info">
            <img src="${book.book_image}" alt="" class="modal-book-img">
            <ul>
              <li class="name-and-author">
                <p class="modal-book-name">${book.title}</p>
                <p class="modal-book-author">${book.author}</p>
              </li>
              <li>
                <p class="modal-book-description">${book.description}</p>
              </li>
              <li class="modal-links">
                <a href="${book.buy_links[0].url}">
                  <img
                    class="amazon-img"
                    srcset="
                      ./img/modal/amazon_1x.png 1x,
                      ./img/modal/amazon_2x.png 2x
                    "
                    src="./img/modal/amazon_1x.png"
                  />
                </a>
                <a href="${book.buy_links[1].url}">
                  <img
                    srcset="
                      ./img/modal/book_1x.png 1x,
                      ./img/modal/book_2x.png 2x
                    "
                    src="./img/modal/book_1x.png"
                  />
                </a>
              </li>
            </ul>
          </div>
          <button class="do-shopping-list-btn">ADD TO SHOPPING LIST</button>
          <button class="x-close-btn">
            <img
                    srcset="
                      ./img/modal/x-close_1x.png 1x,
                      ./img/modal/x-close_2x.png 2x
                    "
                    src="./img/modal/x-close_1x.png"
                  />
          </button>
          <p class="congratulation-text visually-hidden">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
          </p>
        </div>
  `,
    {
      onShow: instance => {
        console.log('OPEN');

        instance.element().querySelector('.x-close-btn').onclick = instance.close;

        window.addEventListener('keydown', onKeyDown);

        const doBtn = instance.element().querySelector('.do-shopping-list-btn');
        doBtn.addEventListener('click', (e) => {
          initShoppingBtn(e.target, book);
        });

        if(checkBookInShList(book)){
          addRemoveBtnClass(doBtn);
        }
      },
      onClose: instance => {
        console.log('CLOSE');
        window.removeEventListener('keydown', onKeyDown);
      },
    }
  );

  const onKeyDown = event => {
    console.log(event.key);
    if (event.key === 'Escape') {
      instance.close();
    }
  };

  function initShoppingBtn(btn, book){
    if(!checkBookInShList(book)){
      addRemoveBtnClass(btn);
      addToShList(book);
    }else{
      btn.textContent = 'ADD TO SHOPPING LIST';
      instance.element().querySelector('.congratulation-text')
        .classList.add('visually-hidden');
      removeFromShList(book);
    }
  }

  function addRemoveBtnClass(btn){
    btn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    instance.element().querySelector('.congratulation-text')
      .classList.remove('visually-hidden');
  }

  instance.show();
  console.log(instance.visible());
}
