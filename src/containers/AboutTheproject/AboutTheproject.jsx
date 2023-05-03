import React from 'react'
import './about.css'
import BackgroundVideo from '../../compoents/BackgroundVideo'
const AboutTheproject = () => {
  return (
    <div>
      <BackgroundVideo/>
      <div class='container-fluid'>
      <div class='row'>
        <div class='col-md-12'>
          <div class='about_container'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='roadmap_head text-center d-flex flex-column align-items-center py-5'>
                    <h2>About the project</h2>
                    <div className='roadmap_head-underline mt-4'></div>
                  </div>
                </div>
              </div>
            </div>
            <div class='team_para '>
              <p class='mt-4'>
                Our project, heal me meditations otherwise known as hmm is the
                exclusive one-hour long 100 most beautiful travel destinations
                meditation app, and it is not just about promoting mindfulness
                and self-care. We are also dedicated to making a positive impact
                on the world. With each member's support, we give back to an
                organic healthy food initiative for kids and support
                eco-friendly sustainable missions to make our world safe for us
                and the planet.
              </p>

              <p class='mt-5'>
                In addition, your NFT unlocks exclusive access to our daily
                affirmations list, members will also be a part of our mindful
                health conscious community. As a token of appreciation for their
                support, we extend exclusive invitations to our meditation
                retreats to all NFT holders. Of which 10% of proceeds go back
                into the community where we travel to. 
              </p>

              <p class='mt-5'>
                But that's not all! We are also taking the meditation experience
                to the next level with our METAVERSE- ARVR immersive experience.
                Get ready to take a deep dive into the world of mindfulness and
                wellness like never before! Join us on our mission to create a
                better world, one mindful step at a time.
              </p>
              <div class='about_list'>
                <ul>
                  <li>
                    Exclusive access to one hour long meditations on member app 
                  </li>
                  <li>Daily affirmations list (member only feature)</li>
                  <li>Mindful health conscious community</li>
                  <li>Meditation Retreat invitations (NFT holders only) </li>
                  <li>METAVERSE ARVR immersive experience  </li>
                  <li>
                    Give back: healthy food initiative for kids, eco-friendly
                    and sustainable living,
                  </li>
                  <li>
                    Give back to the location we travel to with a member’s
                    choice charity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutTheproject
