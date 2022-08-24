import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Nav = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => [
    setShow(!show)
  ]
  return (
    <div className='nav'>
        <h3>mike atomy.</h3>
        <div
        onClick={toggleShow}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <motion.div
        className='navPop'
        initial={{height: 0}}
        animate={{height: show ? 'fit-content' : 0}}
        >
          <div onClick={() => setShow(false)} className='close'><FontAwesomeIcon icon={faXmark} /></div>
          <div className='btn'>Atomy Shopping Mall<FontAwesomeIcon icon={faAngleRight} className="contcaret" /></div>
          <div className='btn'>JOIN us now!<FontAwesomeIcon icon={faAngleRight} className="contcaret" /></div>
          <div className='btn btnlast'>Contact me<FontAwesomeIcon icon={faAngleRight} className="contcaret" /></div>
        </motion.div>
    </div>
  )
}

export default Nav