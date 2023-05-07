import React from 'react'
import sampleVideo from "../Assets/one.webm"

const BackgroundVideo = () => {
  return (
    <div> <video  className="background__Img" autoPlay loop muted>
    <source src={sampleVideo} type='video/mp4' />
    </video></div>
  )
}

export default BackgroundVideo