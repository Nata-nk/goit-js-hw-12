import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { creatOfGalleryCardTemplate } from './js/render-functions';
import {fetchPhotosByQuery} from './js/pixabay-api';



const searchFormEl = document.querySelector('.search-form')
const galleryEl = document.querySelector('.gallery')
const spanLoader = document.querySelector('.span')
const loadMoreBtnEl  = document.querySelector('.btn')

let simpleLightbox = new SimpleLightbox('.gallery-link', { captionsData: 'alt', captionDelay: 250 });

loadMoreBtnEl.classList.add('is-hidden');

let page = 1;
let searchedQuery = '';


const onSearchFormSubmit = async event => {
    try {
        event.preventDefault();
        galleryEl.innerHTML = '';
        spanLoader.classList.add('loader');

        searchedQuery = event.currentTarget.elements.user_query.value.trim();
         searchFormEl.reset();

        
     if (searchedQuery === '') {
 iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: '#ef4040',
        theme: 'dark',
        position: 'topRight',
        iconUrl: './img/bi_x-octagon.svg',
        imageWidth: 24,
        maxWidth: 360,
        });   
    return;
  }
        page = 1;
    loadMoreBtnEl.classList.add('is-hidden');


        const {data} = await fetchPhotosByQuery(searchedQuery, page);

        spanLoader.classList.remove('loader');
        if (data.hits.length === 0) {
                
                iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: '#ef4040',
        theme: 'dark',
        position: 'topRight',
        iconUrl: './img/bi_x-octagon.svg',
        imageWidth: 24,
        maxWidth: 360,
                });   
            galleryEl.innerHTML = '';
            return;
        }
        


    if (page * 15 <= data.totalHits) {
        loadMoreBtnEl.classList.remove('is-hidden');
        loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

            const galleryTemplate = data.hits.map(el => creatOfGalleryCardTemplate(el)).join('');
            galleryEl.innerHTML = galleryTemplate;
    simpleLightbox.refresh();        
    
        
    } catch (err) {
        spanLoader.classList.remove('loader');
        console.log(err);
    }
}

searchFormEl.addEventListener('submit', onSearchFormSubmit)

const onLoadMoreBtnClick = async event => {
    try {        
    spanLoader.classList.add('loaders');
    page++;
    const { data } = await fetchPhotosByQuery(searchedQuery, page);
        
    spanLoader.classList.remove('loaders');


    const galleryTemplate = data.hits.map(el => creatOfGalleryCardTemplate(el)).join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);
    scroll();
        
    simpleLightbox.refresh();

if (page * 15 >= data.totalHits) {
        loadMoreBtnEl.classList.add('is-hidden');
    loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
    iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        maxWidth: 360,
                }); 
    }

} catch (err) {
    console.log(err);   
}
}

const scroll = () => {
  const { height: cardHeight } =
    galleryEl.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};