import React from 'react'
import { Provider } from 'react-redux'

import Utils from '@/utils'
import { vConsoleWidget } from '@/utils/util'

import Router from '@/Router'
import Store from '@/Store'
import { getAppDeviceParam } from '@/request/api/base'

import './App.scss'

function appInfoInit() {
  const parames = Utils.searchOrJson(
    [
      window.location.hash.split('?')[1],
      window.location.search.split('?')[1],
    ].join('&')
  )
  const is_dev_uat =
    parames.isDev === 'true' || location.host.includes('uat.donyfeng')
  if (is_dev_uat) {
    vConsoleWidget()
  }
  getAppDeviceParam(parames).then((res) => {
    // @ts-ignore
    Store.dispatch({ type: 'SetAppBaseInfo', payload: res })
  })
}

function App() {
  // load 模板
  const app_loading = document.querySelector('div#app_loading')
  if (app_loading) app_loading.setAttribute('style', 'display:none;')

  appInfoInit()

  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  )
}
export default App
