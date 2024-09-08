import * as basicLightbox from 'basiclightbox';

export function showBookInfo(bookItem){
  // const name = bookItem.querySelector('.book-name');
  // const author = bookItem.querySelector('.author-name');
  // console.log(name.textContent, author.textContent);
  const modalWindow = basicLightbox.create(`
    <div class="modal-window">
      <h3>Modal window</h3>
      <p>content...</p>
    </div>
  `);

  modalWindow.show();
  console.log(modalWindow.visible());
}