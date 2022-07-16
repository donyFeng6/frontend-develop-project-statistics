import axios from 'axios'
import Qs from 'qs'

import { HandleRequests } from '@/utils'
import Config from '@/config/envconfig'

// 监听全局请求
const handleRequests = new HandleRequests()
handleRequests.stateChange((state: any) => {
  if (state === 'start') {
    // T.loading()
  } else {
  }
})

// 配置拦截器的自定义axios
const customAxios = axios.create({
  timeout: 16000,
  responseType: 'json',
})

customAxios.interceptors.response.use(
  (response) => response.data,
  (err) => {
    handleRequests.removeRequest()
    Promise.reject(err.response)
    return err.response && err.response.data
  }
)

const request =
  (method: string, baseURL = Config.Base) =>
  async (url: string, params = {}, headers?: any) => {
    handleRequests.addRequest()

    const paramet: any = {
      url,
      method,
      baseURL,
      headers: {
        'content-Type': 'application/x-www-form-urlencoded',
      },
    }
    if (headers) paramet.headers = { ...paramet.headers, ...headers }
    if (paramet.method.match(new RegExp('GET', 'i'))) {
      paramet.params = params
    } else {
      paramet.data = Qs.stringify(params)
    }

    return customAxios(paramet).then((data) => {
      handleRequests.removeRequest()
      return data
    })
  }

export const get = request('GET')
export const post = request('POST')
