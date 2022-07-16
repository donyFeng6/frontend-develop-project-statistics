import React from 'react'
import './index.scss'

const NotFound: React.FC = () => {
  return (
    <div className='notfound__component'>
      <div className='content'>
        <img
          alt=''
          src='https://s1.xmcdn.com/yx/donyfeng-web-static/last/dist/images/404_abb944a.png'
        />
        <p>您访问的页面不存在～</p>
      </div>
    </div>
  )
}

export default NotFound
