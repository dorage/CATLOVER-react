import axios from 'axios';
import { API_URL } from './config';

const api = axios.create({
    baseURL: `${API_URL}/api/`
});

export const serverApi = {
    todayPick: () => api.get('todaypick'),
    // tag
    tags: () => api.get(`tags`),
    getTagDetail: (name, page = -1) =>
        api.get(`tags/${name}`, { params: { page } }),
    // like
    postPostLike: (postId, userId) =>
        api.post(
            `post/${postId}/like`,
            {},
            {
                params: { userId }
            }
        ),
    postGirlLike: (girlId, userId) =>
        api.post(
            `girl/${girlId}/like`,
            {},
            {
                params: { userId }
            }
        ),
    getPostLike: (postId, userId) =>
        api.get(`post/${postId}/like`, {
            params: { userId }
        }),
    getGirlLike: (girlId, userId) =>
        api.get(`girl/${girlId}/like`, {
            params: { userId }
        }),
    // detail
    postDetail: postId => api.get(`post/${postId}`),
    girlDetail: (girlId, page = -1) =>
        api.get(`girl/${girlId}`, {
            params: { page }
        }),
    // rank
    totalRank: () => api.get('total/rank')
};

export const nothing = null;
