import image from '../assets/hero.jpg'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'


import { useDispatch } from 'react-redux';
import { cursorActions } from '../store';

import { useRef } from 'react';

import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";

export default function Hero(){

    const dispatch = useDispatch();

    function handleTextHover(isHovered) {
        if (isHovered) {
            dispatch(cursorActions.show());
        } else {
            dispatch(cursorActions.hide());
        }
    }


    return(
        <main className="hero">
            <div className="container">
                <div className="title">
                    <span>Paweł</span>
                    <img src={image} alt="image" />
                    <span>Garncarz</span>
                </div>
                <div className="about">
                    <span>Creative designer consistiently building </span>
                    <span>memorable and influencial brands</span>
                </div>
                <div className="social-media">
                    <img src={facebook} alt="image" onMouseEnter={()=>handleTextHover(true)} onMouseLeave={()=>handleTextHover(false)}/>
                    <img src={instagram} alt="image" onMouseEnter={()=>handleTextHover(true)} onMouseLeave={()=>handleTextHover(false)}/>
                </div>
            </div>
        </main>
    )
}