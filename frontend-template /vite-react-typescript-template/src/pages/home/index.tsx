import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import { GetUserInfo, getXxmBabyInfo } from '@/Store/actions/userInfo'

import './index.scss'

const HomePage: FC<any> = (props) => {
  useEffect(() => {
    document.title = '小雅听成长'
  }, [])

  useEffect(() => {
    if (!props.userInfo.uid) {
      getUserInfos()
    }
  }, [props.userInfo])
  // 获取用户信息
  const getUserInfos = async () => {
    const userInfo: any = await GetUserInfo()
    if (userInfo.uid) {
      
    }
  }

  return (
    <div className='m-home'>
      home
    </div>
  )
}

export default connect((state: any) => {
  return {
    userInfo: state.userInfo,
  }
})(HomePage)
