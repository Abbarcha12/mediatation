import React from 'react'
import './white.css'
const WhilteList = () => {
  return (
    <div className=''>

      <div class='container-fluid mb-5'>
        <div class='row'>
          <div class='col-md-12 '>
            <div class='whitelist_container'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='roadmap_head text-center d-flex flex-column align-items-center py-5'>
                      <h2>Whitelist</h2>
                      <div className='roadmap_head-underline mt-4'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='team_para'>
                <p class='mt-4'>
                  To get whitelisted for this NFT-powered immersive meditation
                  experience, follow these steps
                </p>
                <ul>
                  <li>Click on the "Whitelist"  button.</li>
                  <li>
                    Fill out the form with your name, email address, and other
                    required info.
                  </li>
                  <li>
                    Wait for a confirmation email that your application has been
                    received.
                  </li>
                  <li>
                    You may be required to complete a brief survey to verify
                    your interest and eligibility for the project.
                  </li>
                  <li>
                    If your application is approved, you will receive a
                    confirmation email with instructions on how to proceed with
                    the next steps, such as purchasing an NFT or completing the
                    onboarding process.
                  </li>
                  <li>
                    Follow the instructions provided to secure your spot in the
                    immersive meditation experience.{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className='container'>
              <div className='row d-flex justify-content-center'>
                <div className='col-md-9 col-sm-8 col-xs-6'>
                  <div class=' mt-5'>
                    <from class='whitelist_form '>
                      <div className='row '>
                        <div className='col-md-6'>
                          <label>Name</label> <br />
                          <input
                            class='mt-1'
                            type='text'
                            className='InputField'
                          />
                        </div>
                        <div className='col-md-6'>
                          <label>Email</label>
                          <br />
                          <input
                            class='mt-1'
                            type='text'
                            className='InputField'
                          />
                        </div>
                      </div>
                      <div className='row whiteForm mt-lg-5'>
                        <div className='col-md-6'>
                          <label>Date Of Brith</label> <br />
                          <input
                            class='mt-1'
                            type='text'
                            className='InputField'
                          />
                        </div>
                        <div className='col-md-6'>
                          <label> Instagram/Tiktok</label> <br />
                          <input
                            class='mt-1'
                            type='text'
                            className='InputField'
                          />
                        </div>
                      </div>
                    </from>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='me-lg-5'>
              <div class='form_btn me-lg-5 text-center'>
                <button class='mt-5 me-lg-5'>Namaste</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhilteList
