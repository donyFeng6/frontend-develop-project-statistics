const initialState = {
  sn: '',
  app_key: '',
  appSecret: '',
  donyfeng_app_secret: '',
  donyfeng_server_authenticate_static_key: '',
}

const initialAction = {
  type: '',
  payload: {},
}

export default function reducerUserInfo(
  state = initialState,
  action = initialAction
) {
  switch (action.type) {
    case 'ClearAppBaseInfo':
      return { ...state, ...initialState }
    case 'SetAppBaseInfo':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
