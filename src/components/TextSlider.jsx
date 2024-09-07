import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/4.jpg'

import { useRef } from 'react'

import { useScroll, useTransform, motion } from 'framer-motion'





export default function TextSlider(){


    const container = useRef(null)

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })




    return(
        <section className="textSlider">
            <div className="container" ref={container}>
                <Slider src={image1} left={"-45%"} progress={scrollYProgress} dir={'right'} speed={200}/>
                <Slider src={image2} left={"-20%"} progress={scrollYProgress} dir={'left'} speed={100}/>
                <Slider src={image3} left={"-35%"} progress={scrollYProgress} dir={'right'} speed={250}/>
            </div>
        </section>
    )
}


const Slider = ({src, left, progress, dir, speed})=>{

    const direction = dir==="left" ? 1 : -1

    const x = useTransform(progress, [0, 1], [speed * -1 * direction, speed * direction])

    

    return(
        <motion.div className="slider" style={{left, x}}>
            <Phrase src={src}/>
            <Phrase src={src}/>
            <Phrase src={src}/>
        </motion.div>
    )
}

const Phrase = ({src})=>{
    return(
        <div className="phrase">
            <div className="text">My Works</div>
            <span>
                <img src={src} alt="img" />
            </span>
        </div>
    )
}