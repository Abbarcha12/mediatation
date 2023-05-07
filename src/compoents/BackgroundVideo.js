import React, { useEffect, useRef } from 'react'
import sampleVideo from "../Assets/Untitled.mp4"

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} className="background__Img" loop muted>
        <source src={sampleVideo} type='video/mp4' />
      </video>
    </div>
  )
}

export default BackgroundVideo
