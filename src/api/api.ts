import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=88511e631d64958716f46a5c31c01824&per_page=20'
})

const api = {
    getImg: (searchText:string,pageNumber:number) => {
        return instance.get(`&page=${pageNumber}&text=${searchText}`)
            .then(res => res.data)
    }
}

export default api

