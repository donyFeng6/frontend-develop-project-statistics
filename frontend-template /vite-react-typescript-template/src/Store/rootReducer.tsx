import { combineReducers } from 'redux'

import userInfo from './actions/userInfo'
import baseParam from './actions/baseInfo'

export default combineReducers({ userInfo, baseParam })
