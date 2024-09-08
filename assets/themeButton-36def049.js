import{a as p}from"./vendor-0cb09735.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const l=[{link:"https://www.savethechildren.net/what-we-do/emergencies/war-ukraine",name:"save-the-children"},{link:"https://www.projecthope.org/country/ukraine/",name:"project-hope"},{link:"https://internationalmedicalcorps.org/country/ukraine/",name:"int-medical-corps"},{link:"https://www.razomforukraine.org/",name:"razom"},{link:"https://www.actionagainsthunger.org/location/europe/ukraine/",name:"action-ag-hunger"},{link:"https://prytulafoundation.org/en",name:"fond-prytula"},{link:"https://www.msf.org/ukraine",name:"med-sans-front"},{link:"https://www.wvi.org/emergencies/ukraine",name:"world-vision"},{link:"https://u24.gov.ua/uk",name:"united24"}],c=document.querySelector(".scroll-btn"),b=document.querySelector(".fonds-list");let i=6;c.addEventListener("click",()=>{$()});function $(){i++,i>9&&(i=6),S(i-5,i)}function S(e,n){let o="";for(;e<=n;)o+=`
      <li>
      <a href="${l[e-1].link}" target="_blank">
        <span>0${e}</span>
        <img
          src="./img/fonds/${l[e-1].name}_1x.png"
          srcset="./img/fonds/${l[e-1].name}_1x.png 1x,
                  ./img/fonds/${l[e-1].name}_2x.png 2x"
        >
      </a>
    </li>
    `,e++;E(),b.innerHTML=o}function E(){i!=9?c.classList.contains("position-bottom-js")||c.classList.add("position-bottom-js"):c.classList.remove("position-bottom-js")}p.defaults.baseURL="https://books-backend.p.goit.global";async function h(e){try{return(await p.get(e)).data}catch(n){throw n}}const u=document.querySelector(".main-container");async function y(){let e=`
    <h1>Best Sellers <span class="books-word">Books</span></h1>
    <ul class="categories-list">
  `;const n=JSON.parse(localStorage.getItem("allCategories"));if(!u)return;let o=2;for(const r of n){e+=`
      <li>
        <div>
          <h4>${r.list_name}</h4>
        </div>
        <ul class="list-cont">
    `;let t=await h(`/books/category?category=${r.list_name}`);t=k(t),t=t.slice(0,5),t.forEach(a=>{e+=`
        <li class="list-item-cont">
          <div>
            <img class="book-img" src="${a.book_image}" alt="${a.list_name}" width="${a.book_image_width}" height="${a.book_image_height}"  loading="lazy">
            <p class="book-name">${a.title}</p>
            <p class="author-name">${a.author}</p>
          </div>
        </li>
      `}),e+=`
      </ul>
      <button class="see-more-btn" data-category="${r.list_name}" data-id="category-link-${o}">SEE MORE</button>
    </li>
    `,o++}e+="</ul>",u.innerHTML=e,v()}function v(){document.querySelectorAll(".see-more-btn").forEach(n=>{n.addEventListener("click",o=>{w(o.target.dataset.category),L(o.target.dataset.id)})})}function k(e){let n=[];return e.filter(r=>n.find(t=>t.title==r.title)?!1:(n.push(r),!0))}async function w(e){if(e=="All categories"){y();return}const n=e.split(" "),o=n.pop();let t=`
    <h1>${n.join(" ")} <span class="books-word">${o}</span></h1>
    <ul class="category-list-cont">
  `,a=await h(`/books/category?category=${e}`);a=k(a),a.forEach(s=>{t+=`
        <li class="list-item-cont">
          <a href="">
            <img class="book-img" src="${s.book_image}" alt="${s.list_name}" width="${s.book_image_width}" height="${s.book_image_height}"  loading="lazy">
            <p class="book-name">${s.title}</p>
            <p class="author-name">${s.author}</p>
          </a>
        </li>
      `}),t+="</ul>",u.innerHTML=t}const f=document.querySelector(".categories-list");let g="category-link-1";async function _(){if(!f)return;let e,n=`
    <li>
        <a href="#" class="category-link" id="category-link-1">All categories</a>
    </li>
  `;localStorage.getItem("allCategories")==null?(e=await h("/books/category-list"),localStorage.setItem("allCategories",JSON.stringify(e))):e=JSON.parse(localStorage.getItem("allCategories"));let o=2;e.forEach(r=>{n+=`
      <li>
        <a href="#" class="category-link" id="category-link-${o}">${r.list_name}</a>
      </li>
    `,o++}),f.innerHTML=n,document.getElementById(`${g}`).classList.add("current-category"),document.querySelectorAll(".category-link").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault(),w(t.target.textContent),L(t.target.id)})})}function L(e){document.getElementById(`${g}`).classList.remove("current-category"),document.getElementById(`${e}`).classList.add("current-category"),g=e}document.addEventListener("DOMContentLoaded",async()=>{await _(),await y()});const m=document.querySelector('.theme-switch-wrapper input[type="checkbox"]'),M=window.matchMedia("(prefers-color-scheme: dark)").matches,d=localStorage.getItem("theme");d?(document.documentElement.setAttribute("data-theme",d),d==="dark"&&(m.checked=!0)):M?(document.documentElement.setAttribute("data-theme","dark"),m.checked=!0):document.documentElement.setAttribute("data-theme","light");function B(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}m.addEventListener("change",B,!1);
//# sourceMappingURL=themeButton-36def049.js.map
