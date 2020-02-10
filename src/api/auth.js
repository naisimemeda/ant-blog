import axios from '@/libs/api.request'


export const getToken = params => axios.request({
    url: '/api/auth/login',
    data: params,
    method: 'post'
});
