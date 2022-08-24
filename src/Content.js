import React, { useEffect, useRef, useState } from 'react'
import { data } from './img/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'

const Content = () => {
    const [index, setIndex] = useState(0)
    const [popUp, setPopUp] = useState(false)
    const [layout, setLayout] = useState(1)
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    const nextItem = () => {
        setIndex(index >= data.length - 1 ? 0 : index + 1)
    }

    const prevItem = () => {
        setIndex(index === 0 ? data.length - 1: index - 1)
    }

    const popFunction = (id) => {
        setPopUp(true)
        setLayout(id)
    }

    const popExit = () => {
        setPopUp(false)
    }

    const card = data.filter(item => item.id === layout)

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })

  return (
    <div className='contentContainer'>
        {/* <div className='blocker'></div> */}
        <div className='contentDesc'>
            <h1>Company's details and information</h1>
            <p>These are the videos that explain what ATOMY is all about</p>
        </div>
        <div className='content'>
            <motion.div ref={carousel} className='card'>
                <motion.div 
                drag='x' 
                className='carousel'
                dragConstraints={{right: 0, left: -width}}
                >
                    {data.map(item => (
                        <motion.div
                        className='items'
                        key={item.id}
                        onClick={() => popFunction(item.id)}
                        layoutId={item.id}
                        style={{backgroundImage: `url(${require(`./img/${item.image}`)})`}}
                        >
                            <div className='desc'>
                                <h3>{item.header}</h3>
                                <hr />
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        {popUp && 
        <div className='popUp'>
            <div className='popContainer'>
                <div onClick={popExit} className='closeButton'><FontAwesomeIcon icon={faXmark} /></div>
                {card.map(item => (
                    <motion.div
                    key={item.id}
                    className='popContent'
                    layoutId={layout}
                    >
                    <ReactPlayer
                     url={item.link}
                     light={true}
                     width={360}
                    />
                    <h3>{item.header}</h3>
                </motion.div>
                ))}
            </div>
        </div>}
    </div>
  )
}

export default Content