import * as basicLightbox from 'basiclightbox';

export function showBookInfo(bookItem) {
  const instance = basicLightbox.create(
    `
    <div class="modal-window">
      <h3>Modal window</h3>
      <p>content...</p>
      <button>close</button>
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

  const onKeyDown = event => {
    console.log(event.key);
    if (event.key === 'Escape') {
      instance.close();
    }
  };

  instance.show();
  console.log(instance.visible());
}
