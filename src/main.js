import { scrollList } from './js/fonds';
import { generateCategoryList } from './js/categories-list';
import { generateBestSellersBooks } from './js/best-sellers-cont';

document.addEventListener('DOMContentLoaded', async () => {
  await generateCategoryList();
  await generateBestSellersBooks();
});
