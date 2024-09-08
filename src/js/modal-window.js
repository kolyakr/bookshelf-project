import * as basicLightbox from 'basiclightbox';

export function showBookInfo(bookItem) {
  const instance = basicLightbox.create(
    `
    <div class="modal-window">
          <div class="modal-book-info">
            <img src="" alt="" class="modal-book-img">
            <ul>
              <li class="name-and-author">
                <p class="modal-book-name">name</p>
                <p class="modal-book-author">author</p>
              </li>
              <li>
                <p class="modal-book-description">description</p>
              </li>
              <li class="modal-links">
                <a href="">
                  <img
                    srcset="
                      ./img/modal/amazon_1x.png 1x,
                      ./img/modal/amazon_2x.png 2x
                    "
                    src="./img/modal/amazon_1x.png"
                  />
                </a>
                <a href="">
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
            <!-- <svg class="icon-x-close">
              <use href="../img/icons.svg#icon-x-close"></use>
            </svg> -->
            x
          </button>
          <p class="congratulation-text">
            Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
          </p>
        </div>
  `,
    {
      onShow: instance => {
        console.log('OPEN');

        instance.element().querySelector('button').onclick = instance.close;

        window.addEventListener('keydown', onKeyDown);
      },
      onClose: instance => {
        console.log('CLOSE');
        window.removeEventListener('keydown', onKeyDown);
      },
    }
  );

  //add classes to img
  //add x-close img
  //add logic

  const onKeyDown = event => {
    console.log(event.key);
    if (event.key === 'Escape') {
      instance.close();
    }
  };

  instance.show();
  console.log(instance.visible());
}
