import React from 'react'
import sampleVideo from "../Assets/Untitled.mp4"

const BackgroundVideo = () => {
  return (
    <div> <video  className="background__Img" autoPlay loop muted>
    <source src={sampleVideo} type='video/mp4' />
    </video></div>
  )
}

export default BackgroundVideo