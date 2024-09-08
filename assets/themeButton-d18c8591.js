import{a as h}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const l=[{link:"https://www.savethechildren.net/what-we-do/emergencies/war-ukraine",name:"save-the-children"},{link:"https://www.projecthope.org/country/ukraine/",name:"project-hope"},{link:"https://internationalmedicalcorps.org/country/ukraine/",name:"int-medical-corps"},{link:"https://www.razomforukraine.org/",name:"razom"},{link:"https://www.actionagainsthunger.org/location/europe/ukraine/",name:"action-ag-hunger"},{link:"https://prytulafoundation.org/en",name:"fond-prytula"},{link:"https://www.msf.org/ukraine",name:"med-sans-front"},{link:"https://www.wvi.org/emergencies/ukraine",name:"world-vision"},{link:"https://u24.gov.ua/uk",name:"united24"}],c=document.querySelector(".scroll-btn"),L=document.querySelector(".fonds-list");let i=6;c.addEventListener("click",()=>{b()});function b(){i++,i>9&&(i=6),$(i-5,i)}function $(e,o){let n="";for(;e<=o;)n+=`
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
    `,e++;S(),L.innerHTML=n}function S(){i!=9?c.classList.contains("position-bottom-js")||c.classList.add("position-bottom-js"):c.classList.remove("position-bottom-js")}h.defaults.baseURL="https://books-backend.p.goit.global";async function m(e){try{return(await h.get(e)).data}catch(o){throw console.log(o),o}}const p=document.querySelector(".main-container");async function f(){let e=`
    <h1>Best Sellers <span class="books-word">Books</span></h1>
    <ul class="categories-list">
  `;const o=JSON.parse(localStorage.getItem("allCategories"));console.log(o);let n=2;for(const r of o){e+=`
      <li>
        <div>
          <h4>${r.list_name}</h4>
        </div>
        <ul class="list-cont">
    `;let t=await m(`/books/category?category=${r.list_name}`);t=y(t),t=t.slice(0,5),t.forEach(a=>{e+=`
        <li class="list-item-cont">
          <div>
            <img class="book-img" src="${a.book_image}" alt="${a.list_name}" width="${a.book_image_width}" height="${a.book_image_height}"  loading="lazy">
            <p class="book-name">${a.title}</p>
            <p class="author-name">${a.author}</p>
          </div>
        </li>
      `}),e+=`
      </ul>
      <button class="see-more-btn" data-category="${r.list_name}" data-id="category-link-${n}">SEE MORE</button>
    </li>
    `,n++}e+="</ul>",p.innerHTML=e,E()}function E(){document.querySelectorAll(".see-more-btn").forEach(o=>{o.addEventListener("click",n=>{k(n.target.dataset.category),w(n.target.dataset.id)})})}function y(e){let o=[];return e.filter(r=>o.find(t=>t.title==r.title)?!1:(o.push(r),!0))}async function k(e){if(e=="All categories"){f();return}const o=e.split(" "),n=o.pop();let t=`
    <h1>${o.join(" ")} <span class="books-word">${n}</span></h1>
    <ul class="category-list-cont">
  `,a=await m(`/books/category?category=${e}`);a=y(a),a.forEach(s=>{t+=`
        <li class="list-item-cont">
          <a href="">
            <img class="book-img" src="${s.book_image}" alt="${s.list_name}" width="${s.book_image_width}" height="${s.book_image_height}"  loading="lazy">
            <p class="book-name">${s.title}</p>
            <p class="author-name">${s.author}</p>
          </a>
        </li>
      `}),t+="</ul>",p.innerHTML=t}const v=document.querySelector(".categories-list");let g="category-link-1";async function _(){let e,o=`
    <li>
        <a href="#" class="category-link" id="category-link-1">All categories</a>
    </li>
  `;localStorage.getItem("allCategories")==null?(e=await m("/books/category-list"),localStorage.setItem("allCategories",JSON.stringify(e))):e=JSON.parse(localStorage.getItem("allCategories"));let n=2;e.forEach(r=>{o+=`
      <li>
        <a href="#" class="category-link" id="category-link-${n}">${r.list_name}</a>
      </li>
    `,n++}),v.innerHTML=o,document.getElementById(`${g}`).classList.add("current-category"),document.querySelectorAll(".category-link").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault(),k(t.target.textContent),w(t.target.id)})})}function w(e){document.getElementById(`${g}`).classList.remove("current-category"),document.getElementById(`${e}`).classList.add("current-category"),g=e}document.addEventListener("DOMContentLoaded",async()=>{await _(),await f()});const u=document.querySelector('.theme-switch-wrapper input[type="checkbox"]'),M=window.matchMedia("(prefers-color-scheme: dark)").matches,d=localStorage.getItem("theme");d?(document.documentElement.setAttribute("data-theme",d),d==="dark"&&(u.checked=!0)):M?(document.documentElement.setAttribute("data-theme","dark"),u.checked=!0):document.documentElement.setAttribute("data-theme","light");function B(e){e.target.checked?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}u.addEventListener("change",B,!1);
//# sourceMappingURL=themeButton-d18c8591.js.map
