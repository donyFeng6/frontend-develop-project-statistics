import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.scss'

const Index: FC<any> = () => (
  <div className='wrap'>
    我是主页~
    <br />
    <Link to='/home'>
      <span>点我去home页</span>
    </Link>
  </div>
)

export default connect((state) => {
  return {}
})(Index)
