import { scrollList } from "./js/fonds";
import { generateCategoryList } from "./js/categories";
import { allCategories } from "./js/data";
import { getApiData } from "./js/axios";
import { generateMainContainer } from "./js/main-container";

document.addEventListener("DOMContentLoaded",async () => {
  await generateCategoryList();
  await generateMainContainer();
})
