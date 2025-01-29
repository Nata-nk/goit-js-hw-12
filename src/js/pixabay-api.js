import axios from "axios";

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
    
    const axiosOptions = {
params:{
        key: '48486017-f8f4a4468403115709f2bbe90',
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page : currentPage,
        per_page: 15,
    }
    };



    return axios.get(`https://pixabay.com/api/`, axiosOptions);
};