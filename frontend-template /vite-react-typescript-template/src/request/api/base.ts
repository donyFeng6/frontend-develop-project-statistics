import { get } from '@/request/index'
import { URL, baseParams } from '@/config/envconfig'

import Utils from '@/utils'

/**
 * 获取短链接
 * @param {*} param url
 * @returns shortUrl
 */
export const setCallSaveLongUrl = async (param: any) => {
  const res: any = await get(URL.callSaveLongUrl, param)
  return (res.result && res.result.shortUrl) || ''
}

export async function getAppDeviceParam(param: any = {}) {
  let AppDeviceParam: any = Utils.session_storage().get('_app_device_param')
  const appKey = param.appKey || param.app_key
  if (AppDeviceParam) {
    if (AppDeviceParam.app_key !== appKey) {
      AppDeviceParam = {}
    }
  }
  if (!AppDeviceParam || !AppDeviceParam.app_key) {
    const res: any = await get(URL.getAppDeviceParam, { appKey })
    AppDeviceParam = res.result
    const baseParam: any = getProjectDictValueList(param)
    if (baseParam.app_key) {
      AppDeviceParam = { ...AppDeviceParam, ...baseParam }
    }
  }
  if (AppDeviceParam.appSecret) {
    AppDeviceParam.app_key = appKey
    Utils.session_storage().set('_app_device_param', AppDeviceParam)
  }
  return AppDeviceParam
}

/**
 * 获取应用配置参数
 * @param {*} param appKey
 */
export async function getProjectDictValueList(param: any) {
  let baseParam: any = {}
  const appKey = param.appKey || param.app_key
  const result: any = await get(URL.getProjectDictValueList, {
    appKey,
    keys: baseParams.join(','),
  })
  if (result && result.length) {
    result.map((d: any) => {
      if (d.value) baseParam[d.code] = d.value
      return baseParam
    })
    baseParam.app_key = appKey
  }
  return baseParam
}
