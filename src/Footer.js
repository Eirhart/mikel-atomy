import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <h1>Join us now by clicking the <span>"JOIN"</span> button or send me a message for your assistance</h1>
        <div className='buttons'>
            <div className='joinButton'>JOIN</div>
            <div className='contact'>Contant Me<FontAwesomeIcon icon={faAngleRight} className="contcaret" /></div>
        </div>
    </div>
  )
}

export default Footer