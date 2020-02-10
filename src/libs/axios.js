import axios from 'axios'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    return {
      baseURL: this.baseUrl,
      headers: {
        Authorization: this.getToken()
      }
    }
  }



  interceptors (instance) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      const { data, status } = res
      return { data, status }
    }, error => {
      // addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }

  getToken() {
    const token = 11111
    if (token) return token
    else return false
  }
}
export default HttpRequest
