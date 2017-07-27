import React from 'react'

const Video = ({ src, controls = true, autoplay = false, loop = false }) => (
  <div className='videoPlayer'>
    <video
      src={src}
      controls={controls}
      autoPlay={autoplay}
      loop={loop} />
  </div>
)

export default Video
