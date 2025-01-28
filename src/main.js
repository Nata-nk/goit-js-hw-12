import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import { creatOfGalleryCardTemplate } from './js/render-functions';
import {fetchPhotosByQuery} from './js/pixabay-api';



const searchFormEl = document.querySelector('.search-form')
const galleryEl = document.querySelector('.gallery')
const spanLoader  = document.querySelector('.span')



const onSearchFormSubmit = event => {
    event.preventDefault();
    const searchedQuery = event.currentTarget.elements.user_query.value.trim();

    fetchPhotosByQuery(searchedQuery)
        .finally(fy => {
            searchFormEl.reset();
            spanLoader.classList.add('loader');

})
        .then(date => {
        spanLoader.classList.remove('loader');
            if (date.hits.length === 0) {
                iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: '#ef4040',
        theme: 'dark',
                    position: 'topRight',
        iconUrl: './img/bi_x-octagon.svg',
        maxWidth: 360,
        });   
}
            const galleryTemplate = date.hits.map(el => creatOfGalleryCardTemplate(el)).join('');
            galleryEl.innerHTML = galleryTemplate;
new SimpleLightbox('.gallery-link', { captionsData: 'alt', captionDelay: 250 }).refresh();
        })
        .catch(err => {
    spanLoader.classList.remove('loader');
    console.log(err);
});
}

searchFormEl.addEventListener('submit', onSearchFormSubmit)
