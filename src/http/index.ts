import { HttpResponse } from '../data/protocols/http'

import { AxiosHttpClient } from '../infra'

type Get = <P, R>(uri: string, params?: P) => Promise<HttpResponse<R>>
type Post = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Put = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Patch = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>

function API() {
  const axios = AxiosHttpClient()
  const URL = 'http://localhost:3000'

  const get: Get = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'get',
    })

  const put: Put = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'put',
    })

  const patch: Patch = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'patch',
    })

  const post: Post = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'post',
    })

  return {
    get,
    put,
    patch,
    post,
  }
}

export const Api = API()
