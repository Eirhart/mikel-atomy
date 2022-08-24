import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <h1>Join us now by clicking the <span>"JOIN"</span> button or send me a message for your assistance</h1>
        <div className='buttons'>
            <a href='https://formaloo.net/fkok2' className='joinButton'>JOIN</a>
            <a href='https://www.messenger.com/t/100001646731426/' className='contact'>Contant Me<FontAwesomeIcon icon={faAngleRight} className="contcaret" /></a>
        </div>
    </div>
  )
}

export default Footer