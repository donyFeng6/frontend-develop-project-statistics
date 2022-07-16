import React from 'react'

import './index.scss'

const Loading = (props: any) => {
  return (
    <div className={['u-page-' + props.page].join('')}>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loading
