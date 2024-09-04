(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s=[{link:"https://www.savethechildren.net/what-we-do/emergencies/war-ukraine",name:"save-the-children"},{link:"https://www.projecthope.org/country/ukraine/",name:"project-hope"},{link:"https://internationalmedicalcorps.org/country/ukraine/",name:"int-medical-corps"},{link:"https://www.razomforukraine.org/",name:"razom"},{link:"https://www.actionagainsthunger.org/location/europe/ukraine/",name:"action-ag-hunger"},{link:"https://prytulafoundation.org/en",name:"fond-prytula"},{link:"https://www.msf.org/ukraine",name:"med-sans-front"},{link:"https://www.wvi.org/emergencies/ukraine",name:"world-vision"},{link:"https://u24.gov.ua/uk",name:"united24"}],c=document.querySelector(".scroll-btn"),u=document.querySelector(".fonds-list");let o=6;c.addEventListener("click",()=>{d()});function d(){o++,o>9&&(o=6),p(o-5,o)}function p(n,i){let r="";for(;n<=i;)r+=`
      <li>
      <a href="${s[n-1].link}">
        <span>0${n}</span>
        <img
          src="../img/fonds/${s[n-1].name}_1x.png"
          srcset="../img/fonds/${s[n-1].name}_1x.png 1x,
                  ../img/fonds/${s[n-1].name}_2x.png 2x"
        >
      </a>
    </li>
    `,n++;m(),u.innerHTML=r}function m(){o!=9?c.classList.contains("position-bottom-js")||c.classList.add("position-bottom-js"):c.classList.remove("position-bottom-js")}const f=document.querySelector('.theme-switch-wrapper input[type="checkbox"]');function h(n){n.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}f.addEventListener("change",h,!1);
//# sourceMappingURL=themeButton-11dc8892.js.map
