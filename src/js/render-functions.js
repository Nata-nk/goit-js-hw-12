export const creatOfGalleryCardTemplate = imgInfo => {
    return `
    <li class="gallery-card">
    <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
       <ul class="list-gallery-card">
        <li class="item-gallery-card">
            <p class="text-gallery-card">likes</p>
            <p class="t-text-gallery-card">${imgInfo.likes}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">views</p>
            <p class="t-text-gallery-card">${imgInfo.views}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">comments</p>
            <p class="t-text-gallery-card">${imgInfo.comments}</p>
        </li>
        <li class="item-gallery-card">
            <p class="text-gallery-card">downloads</p>
            <p class="t-text-gallery-card">${imgInfo.downloads}</p>
        </li>
    </ul>
    </a>
    </li>
  `;
}
