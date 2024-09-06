import { scrollList } from "./js/fonds";
import { generateCategoryList } from "./js/categories-list";
import { allCategories } from "./js/data";
import { getApiData } from "./js/axios";
import { generateBestSellersBooks } from "./js/best-sellers-cont";

document.addEventListener("DOMContentLoaded",async () => {
  await generateCategoryList();
  await generateBestSellersBooks();
})
