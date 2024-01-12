import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    //TODO: Buscar um post em específico

    const {data} = await api.get(`/posts?id=eq.${id}`);
    
    if(data) {
        let [posts] = data
        return posts ;
    }

    return []
}

