import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/'
});

export const serverApi = {
    top20: () => api.get('api/top20'),
    postDetail: postId => api.get(`api/post/detail/${postId}`),
    girlDetail: girlId => api.get(`api/girl/detail/${girlId}`),
    totalRank: () => api.get('api/total/rank'),
    postRank: () => api.get('api/post/rank'),
    girlRank: async () => api.get('api/girl/rank')
};

export const nothing = null;
