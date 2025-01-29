import{a as L,S as v,i as g}from"./assets/vendor-B6jJ9_I0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const p=e=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
       <ul class="list-gallery-card">
        <li class="item-gallery-card">
            <p class="text-gallery-card">likes</p>
            <p class="t-text-gallery-card">${e.likes}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">views</p>
            <p class="t-text-gallery-card">${e.views}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">comments</p>
            <p class="t-text-gallery-card">${e.comments}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">downloads</p>
            <p class="t-text-gallery-card">${e.downloads}</p>
        </li>
    </ul>
    </a>
    </li>
  `,y=(e,t)=>{const a={params:{key:"48486017-f8f4a4468403115709f2bbe90",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return L.get("https://pixabay.com/api/",a)},u=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".span"),o=document.querySelector(".btn");let h=new v(".gallery-link",{captionsData:"alt",captionDelay:250});o.classList.add("is-hidden");let i=1,d="";const x=async e=>{try{if(e.preventDefault(),c.innerHTML="",n.classList.add("loader"),d=e.currentTarget.elements.user_query.value.trim(),u.reset(),d===""){g.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",theme:"dark",position:"topRight",iconUrl:"./img/bi_x-octagon.svg",imageWidth:24,maxWidth:360});return}i=1,o.classList.add("is-hidden");const{data:t}=await y(d,i);if(n.classList.remove("loader"),t.hits.length===0){g.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",theme:"dark",position:"topRight",iconUrl:"./img/bi_x-octagon.svg",imageWidth:24,maxWidth:360}),c.innerHTML="";return}i*15<=t.totalHits&&(o.classList.remove("is-hidden"),o.addEventListener("click",f));const a=t.hits.map(l=>p(l)).join("");c.innerHTML=a,h.refresh()}catch(t){n.classList.remove("loader"),console.log(t)}};u.addEventListener("submit",x);const f=async e=>{try{n.classList.add("loaders"),i++;const{data:t}=await y(d,i);n.classList.remove("loaders");const a=t.hits.map(l=>p(l)).join("");c.insertAdjacentHTML("beforeend",a),b(),h.refresh(),i*15>=t.totalHits&&(o.classList.add("is-hidden"),o.removeEventListener("click",f),g.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:360}))}catch(t){console.log(t)}},b=()=>{const{height:e}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
