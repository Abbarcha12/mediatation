import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { RxDiscordLogo } from 'react-icons/rx'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineMenuFold, AiFillYoutube } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { FaTiktok } from 'react-icons/fa'
import menu from '../Assets/logo.png'

const variants = {
  open: { opacity: 0, x: 1 },
  closed: { opacity: 1, x: '-2%' },
}

const Header = () => {
  const [Toggle, setToggle] = useState(true)
  return (
    <header>
      <div className='container-fluid '>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-11 '>
            <div className='show'>
              <div className='d-flex justify-content-between Header_Container '>
                <div className='Link__Container'>
                  <ul className=' d-flex'>
                    <li className='nav-item '>
                      <Link
                        className='Navbar__Items combo_Item_Class'
                        to='/About'
                      >
                        About the project
                      </Link>
                    </li>
                    <li className='nav-item '>
                      <Link
                        className='Navbar__Items combo_Item_Class'
                        to='/rarity'
                      >
                        Rarity
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        className='Navbar__Items combo_Item_Class'
                        to='/roadMap'
                      >
                        Road Map
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link
                        className='Navbar__Items combo_Item_Class'
                        to='/whitelist'
                      >
                        White list
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='Navbar__Items combo_Item_Class' to='#'>
                        Open sea
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link
                        className='Navbar__Items combo_Item_Class'
                        to='/Team'
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='Icons-Div  '>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://www.reddit.com/user/hmmeditations'>
                      <RxDiscordLogo />
                    </Link>
                  </div>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://www.facebook.com/hmmeditations/'>
                      <AiFillFacebook />
                    </Link>
                  </div>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://twitter.com/hmmeditations'>
                      <BsTwitter />
                    </Link>
                  </div>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://www.instagram.com/healmemeditations/'>
                      <AiFillInstagram />
                    </Link>
                  </div>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://www.linkedin.com/company/90620372/admin/'>
                      <AiFillLinkedin />
                    </Link>
                  </div>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://www.tiktok.com/@hmmeditations'>
                      <FaTiktok />
                    </Link>
                  </div>
                  <div className='box'>
                    <Link className=' combo_Item_Class' to='https://www.youtube.com/@hmmeditations'>
                      <AiFillYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='MobileMenu'>
              <div className='mobileHeader'>
                <div>
                  <div className='Icons-Div  '>
                    <div className='smallScreen'>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://www.reddit.com/user/hmmeditations'>
                          <RxDiscordLogo />
                        </Link>
                      </div>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://www.facebook.com/hmmeditations/'>
                          <AiFillFacebook />
                        </Link>
                      </div>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://twitter.com/hmmeditations'>
                          <BsTwitter />
                        </Link>
                      </div>
                    </div>
                    <div className='smallScreen'>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://www.instagram.com/healmemeditations/'>
                          <AiFillInstagram />
                        </Link>
                      </div>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://www.linkedin.com/company/90620372/admin/'>
                          <AiFillLinkedin />
                        </Link>
                      </div>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://www.tiktok.com/@hmmeditations'>
                          <FaTiktok />
                        </Link>
                      </div>
                      <div className='box'>
                        <Link className=' combo_Item_Class' to='https://www.youtube.com/@hmmeditations'>
                          <AiFillYoutube />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='logo'>
                  <Link className='Menu' onClick={(e) => setToggle(!Toggle)}>
                    <img src={menu} alt='logo' width='40px' />
                  </Link>
                </div>
              </div>

              <motion.nav
                animate={Toggle ? 'open' : 'closed'}
                variants={variants}
              >
                <div className={Toggle ? 'd-none ' : 'block '}>
                  <div className='Link__Container'>
                    <ul className=' MobileIems'>
                      <li className='nav-item '>
                        <Link
                          className='Navbar__Items combo_Item_Class'
                          to='/About'
                        >
                          About the project
                        </Link>
                      </li>
                      <li className='nav-item '>
                        <Link
                          className='Navbar__Items combo_Item_Class'
                          to='/rarity'
                        >
                          Rarity
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='Navbar__Items combo_Item_Class'
                          to='/roadMap'
                        >
                          Road Map
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link
                          className='Navbar__Items combo_Item_Class'
                          to='/whitelist'
                        >
                          White list
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='Navbar__Items combo_Item_Class' to='#'>
                          Open sea
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link
                          className='Navbar__Items combo_Item_Class'
                          to='/Team'
                        >
                          Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
