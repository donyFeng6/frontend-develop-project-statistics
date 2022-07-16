import {
  getAccessToken,
  refreshToken,
  get_baby_all,
  get_parent_info,
  create_baby_info,
} from '@/request/api/user'
import Utils from '@/utils'

const initialState = { uid: '' }

const initialAction = {
  type: '',
  payload: {},
}

/**
 * 获取用户数据
 * @param param 用户数据 uid nickname
 */
export async function GetUserInfo() {
  // 获取用户信息
  const getUserInfo = () => {
    const masterInfo = Utils.local_storage().get('masterInfo')
    const donyfeng_access_token: any = Utils.local_storage().get(
      'donyfeng_access_token'
    )
    const donyfengAccessToken: any = Utils.local_storage().get(
      'donyfengAccessToken'
    )

    const urlQuery = Utils.searchOrJson(
      window.location.hash.split('?')[1] || window.location.search.split('?')[1]
    )
    // 未传用户信息
    if (!urlQuery.uid && urlQuery.token) delete urlQuery.token
    return {
      ...donyfeng_access_token.userInfo,
      ...donyfengAccessToken.userInfo,
      ...masterInfo,
      ...urlQuery,
    }
  }
  const Token = async (user: any) => {
    let token: any = {}
    if (userInfo.uid) {
      token = await getAccessToken({
        uid: userInfo.uid,
        token: userInfo.token || '',
      })
    }
    return token
  }
  let userInfo: any = getUserInfo()
  let user_token: any = {}
  if (userInfo.token && userInfo.refresh_token) {
    user_token = await refreshToken({
      refresh_token: userInfo.refresh_token,
    })
    user_token = {
      ...user_token,
      uid: userInfo.uid,
      nickname: userInfo.nickname,
    }
    if (user_token && user_token.error_no === 212) {
      user_token = await Token(userInfo)
    }
  } else if (userInfo.uid) {
    user_token = await Token(userInfo)
  }
  userInfo = { ...userInfo, ...user_token }
  UpdataUserInfo(userInfo)
  console.info('user_info->', userInfo)
  return userInfo
}

/**
 * 更新用户信息
 * @param user
 */
export async function UpdataUserInfo(user: any) {
  localStorage.setItem('masterInfo', JSON.stringify(user))
}

/**
 * 创建宝宝的默认生日
 */
const createBabyBirthday = () => {
  const nDate = +new Date()
  const dDate = 6.5 * 365 * 24 * 60 * 60 * 1000
  const babyInfo = {
    gender: 0,
    age_group: 14,
    birthday: Utils.FormatDate(nDate - dDate, 'YYYY-MM-dd'),
  }
  return babyInfo
}
/**
 * 获取小喜马宝宝信息
 * @param user 喜马用户数据 access_token device_id avatar
 */
export async function getXxmBabyInfo(user: any) {
  let babyInfo: any = {}
  const result: any = await get_baby_all({
    access_token: user.access_token,
  })
  if (result && result.length) {
    babyInfo = result[0]
  } else if (!result || !result.error_no) {
    babyInfo = {
      ...createBabyBirthday(),
      logo_pic: user.avatar_url,
      nick_name: user.nick_name,
      access_token: user.access_token,
    }
    let createBaby: any = await create_baby_info(babyInfo)
    if (createBaby && createBaby.babyId) {
      babyInfo.baby_id = createBaby.babyId
    }
  }
  if (user.is_parent) {
    const parent_info: any = await get_parent_info({
      access_token: user.access_token,
    })
    if (parent_info && parent_info.id) {
      babyInfo = { ...babyInfo, ...parent_info }
    }
  }
  if (babyInfo.gender === '女') {
    babyInfo.gender = 1
  } else if (babyInfo.gender === '男') {
    babyInfo.gender = 0
  }
  return babyInfo
}

export default function reducerUserInfo(
  state = initialState,
  action = initialAction
) {
  switch (action.type) {
    case 'SetUserInfo':
      return { ...state, ...action.payload }
    case 'ClearUserInfo':
      return { ...state, ...initialState }
    case 'SetUserSignInfo':
      return { ...state, signInfo: action.payload }
    default:
      return state
  }
}
