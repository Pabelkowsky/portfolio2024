import { useDispatch } from 'react-redux';
import { cursorActions } from '../store';

import { motion, AnimatePresence } from 'framer-motion';

import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import { useState } from 'react';

const TITLES = [
    "Creative Websites",
    "Webflow Development",
    "Interactive Apps",
    "Animation Design"
];

const IMAGES = [
    image1,
    image2,
    image3,
    image4
];

export default function Services() {
    
    return (
        <section className="services">
            <div className="container">
                <p className="title">Services</p>
                {TITLES.map((title, i) => <ServicesItem title={title} key={i} index={i} />)}
            </div>
        </section>
    );
}

function ServicesItem({ title, index }) {
    const [isHovered, setIsHovered] = useState(false);

    const dispatch = useDispatch();

    function handleTextHover(isHovered) {
        if (isHovered) {
            dispatch(cursorActions.show());
        } else {
            dispatch(cursorActions.hide());
        }
    }

    return (
        <motion.div 
            className="item"
            onMouseEnter={() => {
                setIsHovered(true);
                handleTextHover(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                handleTextHover(false);
            }}
        >
            <motion.p
                initial={{ color: "rgb(24, 24, 24)" }}  // Initial color is dark
                animate={{ color: isHovered ? "rgb(240, 240, 240)" : "rgb(24, 24, 24)" }}  // Color change based on isHovered state
                transition={{ duration: 0.1, ease: "easeInOut" }}  // Adjusted transition for smoother color change
                className="item-title"
            >
                <motion.span animate={{ y: isHovered ? "-100%" : "0%" }} transition={{ duration: 0.6, type: "spring" }}>{title}</motion.span>
                <motion.span animate={{ y: isHovered ? "0%" : "100%" }} transition={{ duration: 0.6, type: "spring" }}>{title}</motion.span>
            </motion.p>
            <motion.div 
                className="item-background" 
                initial={{ height: "0%" }}
                animate={{ height: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <AnimatePresence>
                {isHovered && <Preview image={IMAGES[index]} key={index} />}
            </AnimatePresence>
        </motion.div>
    );
}

function Preview({ image }) {
    
    return (
        <div className="preview">
            <motion.img 
                initial={{ scale: 1.3 }} 
                animate={{ scale: 1 }} 
                exit={{ scale: 1.3  , opacity: 0 }} 
                transition={{ duration: 0.2, stiffness: 150 }} 
                src={image} 
                alt="preview" 
            />
        </div>
    );
}
