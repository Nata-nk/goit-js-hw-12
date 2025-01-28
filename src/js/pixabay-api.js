export const fetchPhotosByQuery = searchedQuery => {

const searchParams = new URLSearchParams({
    key: '48486017-f8f4a4468403115709f2bbe90',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

    return fetch(
        `https://pixabay.com/api/?${searchParams}`
    ).then(response => {
            if (!response.ok) {
        throw new Error(response.status); 
            }
            return response.json();
        });
}