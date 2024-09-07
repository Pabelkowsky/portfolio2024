import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { cursorActions } from '../store';

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

import arrow from '../assets/arrow.svg';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

export default function Works({ screenSize }) {
    let itemWidth;
    if (screenSize === "lg") {
        itemWidth = 24;
    } else if (screenSize === "md") {
        itemWidth = 70;
    } else if (screenSize === "sm") {
        itemWidth = 90;
    }

    const gapSize = screenSize === "lg" ? 1 : 2;
    const paddingSize = screenSize === "lg" ? 2 : 4;
    const range = (images.length - 1) * gapSize + paddingSize + (images.length * itemWidth) - 100;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    console.log(scrollYProgress)

    const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${range}vw`]);

    return (
        <section className="works">
            <div ref={container} className="container">
                <div className="sticky-container">
                    {(screenSize == "md" || screenSize == "sm") && <p className="scroll-text">Scroll Down To See More</p>}
                    <motion.div className="carousel-container">
                        <motion.div style={{ x }} className="carousel">
                            {images.map((image, i) => (
                                <Item key={i} image={image} screenSize={screenSize} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Item({ image, screenSize }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isViewHovered, setIsViewHovered] = useState(false);

    const dispatch = useDispatch();

    function handleHover() {
        setIsHovered((prev) => !prev);
    }

    function handleViewHover() {
        setIsViewHovered((prev) => !prev);
    }

    function handleTextHover(isHovered) {
        if (isHovered) {
            dispatch(cursorActions.show());
        } else {
            dispatch(cursorActions.hide());
        }
    }

    const alwaysVisible = screenSize === 'md' || screenSize === 'sm';

    return (
        <div
            className="carousel-item"
            onMouseEnter={() => {
                handleTextHover(true);
                handleHover();
            }}
            onMouseLeave={() => {
                handleTextHover(false);
                handleHover();
            }}
        >
            <motion.img
                src={image}
                alt="image"
                animate={{ filter: isHovered ? "grayscale(0%)" : "grayscale(100%)", scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.1 }}
            />
            <AnimatePresence>
                {(isHovered || alwaysVisible) && (
                    <motion.div
                        initial={{ opacity: 0, transform: "translate(-50%, 0%)" }}
                        animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
                        exit={{ opacity: 0, transform: "translate(-50%, 0%)" }}
                        onMouseEnter={() => handleViewHover()}
                        onMouseLeave={() => handleViewHover()}
                        className="view"
                    >
                        <motion.span animate={{ y: isViewHovered ? "-150%" : "0%" }} transition={{ duration: 0.6, type: "spring" }}>View <img src={arrow} alt="" /></motion.span>
                        <motion.span initial={{ y: "150%" }} animate={{ y: isViewHovered ? "0%" : "150%" }} transition={{ duration: 0.6, type: "spring" }}>View <img src={arrow} alt="" /></motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
