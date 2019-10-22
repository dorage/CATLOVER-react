import axios from 'axios';

const api = axios.create({
    baseURL: `${
        process.env.REACT_APP_MODE === 'production'
            ? process.env.REACT_APP_API_URL
            : 'http://localhost:4000/api'
    }/api/`
});

export const serverApi = {
    todayPick: () => api.get('todaypick'),
    // tag
    tags: () => api.get(`tags`),
    getTagDetail: (name, page = -1) =>
        api.get(`tags/${name}`, { params: { page } }),
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
    postDetail: postId => api.get(`post/${postId}`),
    girlDetail: (girlId, page = -1) =>
        api.get(`girl/${girlId}`, {
            params: { page }
        }),
    // rank
    totalRank: () => api.get('total/rank'),
    // auth
    auth: tokenId =>
        api.get(`auth/validate`, {
            params: { tokenId }
        }),
    login: tokenId => api.post(`auth/login`, { tokenId })
};

export const nothing = null;
