import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <img className='phoneimg' src={require('./img/bg.png')} />
        <div className='headertext'>
          <h1>Watch our videos</h1>
          <p>You can have more information by watching the videos regarding ATOMY ONLINE SHOPPING MALL</p>
          <a href='https://www.atomy.com/ph/Home/Product/MallMain' className='button'>Atomy Shopping Mall<FontAwesomeIcon className='caret' icon={faAngleRight} /></a>
        </div>
        <div className='skew'></div>
        <img className='desktopimg' src={require('./img/bg.png')} />
    </div>
  )
}

export default Header