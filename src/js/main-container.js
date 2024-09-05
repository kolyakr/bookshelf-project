import { allCategories } from "./data";
import { getApiData } from "./axios";
const mainContainer = document.querySelector('.main-container');

{/* <section>
    <a href="">
      <h4>CATEGORY ONE</h4>
    </a>
    <ul>
      <li>
        <a href="">
          <img src="">
          <p class="book-name">name of book</p>
          <p class="author-name">author</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="">
          <p class="book-name">name of book</p>
          <p class="author-name">author</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="">
          <p class="book-name">name of book</p>
          <p class="author-name">author</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="">
          <p class="book-name">name of book</p>
          <p class="author-name">author</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="">
          <p class="book-name">name of book</p>
          <p class="author-name">author</p>
        </a>
      </li>
    </ul>
    <button class="see-more-btn">SEE MORE</button>
  </section> */}

export async function generateMainContainer(){
  let generalHTML = `
    <h1>Best Sellers <span class="books-word">Books</span></h1>
  `;

  const randomCategories = allCategories.slice(0, 4);
  for(const category of randomCategories){
    generalHTML += `
      <section>
        <a href="">
          <h4>${category.list_name}</h4>
        </a>
        <ul>
    `;
    let books = await getApiData(`/books/category?category=${category.list_name}`);
    books = books.slice(0, 5);
    books.forEach((book) => {
      generalHTML += `
        <li>
          <a href="">
            <img src="${book.book_image}">
            <p class="book-name">${book.title}</p>
            <p class="author-name">${book.author}</p>
          </a>
        </li>
      `;
      console.log(book);
    })
  }

  generalHTML += `
      </ul>
      <button class="see-more-btn">SEE MORE</button>
    </section>
  `;

  mainContainer.innerHTML = generalHTML;
  //fix bugs
  //add event listener to buttons;
}