import React, { useState } from 'react'
import './Home.css'
import { motion } from 'framer-motion'
const show = {
  opacity: 1,
  display: 'block',
}

const hide = {
  opacity: 0,
  transitionEnd: {
    display: 'none',
  },
}
const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <div className='container mainCC'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-11'>
            <h1 className='Home_Heading'>
              Meditation x Meta x Travel x Community x Purpose
            </h1>

            <p className='Home_para'>
              Experience a new level of meditation with our NFT immersive
              meditation experience. Immerse yourself in breathtaking virtual
              environments and find inner peace as you journey to the Hanging
              Gardens of Babylon or Uluru. With each unique experience, you'll
              be guided through a relaxing method of deep relaxation, and set an
              intention for self-love, acceptance, or forgiveness and so on.
            </p>
            <motion.div animate={isVisible ? show : hide}>
              <p className=' Home_para'>
                Our guided hypnosis meditation and positive affirmations will
                transport you to new dimensions of relaxation and
                self-discovery. Elevate your mindfulness practice and cultivate
                a deeper connection with yourself through this innovative and
                transformative experience.
              </p>
              <p className=' Home_para'>
                Don't miss out on this opportunity to enhance your mental and
                emotional well-being, while giving back to others. 15% of
                profits go to support a healthy living initiative for children
                to inspire health and wellness from a young age. Own a piece of
                this one-of-a-kind NFT meditation experience today.
              </p>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(!isVisible)}
              className=' Home_btn'
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
