import { Utils } from '@xmly/donyfengos-utils'

/*
 * global请求状态
 * 判断是否有请求开始
 * 判断是否所有请求结束
 */
export class HandleRequests {
  // 记录是所有请求数量
  requests = 0

  // 回调
  handles: any = {}

  addRequest = () => {
    if (this.requests === 0) {
      this.trigger('stateChange', 'start')
    }
    this.requests++
  }

  removeRequest = () => {
    this.requests--
    if (this.requests === 0) {
      this.trigger('stateChange', 'finish')
    }
  }

  trigger = (event: any, params: any) => {
    this.handles[event].forEach((fn: Function) => {
      fn(params)
    })
  }

  listen = (event: any, fn: Function) => {
    if (!this.handles[event]) {
      this.handles[event] = []
    }
    this.handles[event].push(fn)
  }

  stateChange = (fn: Function) => {
    this.listen('stateChange', fn)
  }
}

export default Utils
