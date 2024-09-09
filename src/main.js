import { scrollList } from './js/fonds';
import { generateCategoryList } from './js/categories-list';
import { generateBestSellersBooks } from './js/best-sellers-cont';
import { markHeaderLink } from './js/header';

document.addEventListener('DOMContentLoaded', async () => {
  const currentPage = window.location.pathname;

  markHeaderLink(currentPage);
  if(currentPage.endsWith('index.html')){
    await generateCategoryList();
    await generateBestSellersBooks();
  }
});
