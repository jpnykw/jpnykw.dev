import React, { memo } from 'react'

import NotFoundWebmPc from '../assets/webm/404_1.webm'
import NotFoundWebmMobile from '../assets/webm/404_2.webm'

const NotFound = memo(() => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'black',
    }}>
      <video
        autoPlay
        muted
        loop
        src={innerWidth < 720 ? NotFoundWebmMobile : NotFoundWebmPc}
        style={{
          width: '90vw',
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  )
})

export default NotFound
