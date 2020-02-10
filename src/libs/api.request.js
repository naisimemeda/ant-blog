import HttpRequest from '@/libs/axios'
export const baseUrl = 'http://www.blog.test'

const axios = new HttpRequest(baseUrl)
export default axios
