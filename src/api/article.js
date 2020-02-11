import axios from '@/libs/api.request'


export const ArticleList = params => axios.request({
    url: 'api/article/list',
    data: params,
    method: 'get'
});
