import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

export const serverApi = {
    top20: () => api.get('top20'),
    // like
    postPostLike: (postId, tokenId) =>
        api.post(
            `post/${postId}/like`,
            {},
            {
                params: { tokenId }
            }
        ),
    postGirlLike: (girlId, tokenId) =>
        api.post(
            `girl/${girlId}/like`,
            {},
            {
                params: { tokenId }
            }
        ),
    getPostLike: (postId, tokenId) =>
        api.get(`post/${postId}/like`, {
            params: { tokenId }
        }),
    getGirlLike: (girlId, tokenId) =>
        api.get(`girl/${girlId}/like`, {
            params: { tokenId }
        }),
    // detail
    postDetail: (postId, tokenId = '') =>
        api.get(`post/${postId}`, {
            params: { tokenId }
        }),
    girlDetail: (girlId, tokenId = '') =>
        api.get(`girl/${girlId}`, {
            params: { tokenId }
        }),
    // rank
    totalRank: () => api.get('total/rank'),
    postRank: () => api.get('post/rank'),
    girlRank: async () => api.get('girl/rank'),
    // auth
    auth: tokenId =>
        api.get(`auth/validate`, {
            params: { tokenId }
        }),
    login: tokenId => api.post(`auth/login`, { tokenId })
};

export const nothing = null;
