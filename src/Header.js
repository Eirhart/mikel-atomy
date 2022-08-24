import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <img src={require('./img/bg.png')} />
        <h1>Watch our videos</h1>
        <p>You can have more information by watching the videos regarding ATOMY ONLINE SHOPPING MALL</p>
        <div className='button'>Atomy Shopping Mall<FontAwesomeIcon className='caret' icon={faAngleRight} /></div>
        <div className='skew'></div>
    </div>
  )
}

export default Header