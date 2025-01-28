import{i as n,S as d}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const u=r=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
       <ul class="list-gallery-card">
        <li class="item-gallery-card">
            <p class="text-gallery-card">likes</p>
            <p class="t-text-gallery-card">${r.likes}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">views</p>
            <p class="t-text-gallery-card">${r.views}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">comments</p>
            <p class="t-text-gallery-card">${r.comments}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">downloads</p>
            <p class="t-text-gallery-card">${r.downloads}</p>
        </li>
    </ul>
    </a>
    </li>
  `,y=r=>{const l=new URLSearchParams({key:"48486017-f8f4a4468403115709f2bbe90",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},i=document.querySelector(".search-form"),m=document.querySelector(".gallery"),o=document.querySelector(".span"),p=r=>{r.preventDefault();const l=r.currentTarget.elements.user_query.value.trim();y(l).finally(t=>{i.reset(),o.classList.add("loader")}).then(t=>{o.classList.remove("loader"),t.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",theme:"dark",position:"topRight",iconUrl:"./img/bi_x-octagon.svg",maxWidth:360});const s=t.hits.map(e=>u(e)).join("");m.innerHTML=s,new d(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{o.classList.remove("loader"),console.log(t)})};i.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
