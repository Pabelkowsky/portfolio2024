import { useDispatch } from 'react-redux';
import { cursorActions } from '../store';

import arrow from '../assets/arrow.svg'
import arrowTopLeft from '../assets/arrow-top-right.svg'

export default function Footer(){

    const dispatch = useDispatch();

    function handleTextHover(isHovered) {
        if (isHovered) {
            dispatch(cursorActions.show());
        } else {
            dispatch(cursorActions.hide());
        }
    }

    return(
        <section className="footer">
            <div className="container">
                <div className="sticky-area">
                    <div className="sticky-item">
                        <div className="contact-box">
                            <p className="title">Let's Talk!</p>
                            <button className="contact" onMouseEnter={() => handleTextHover(true)} onMouseLeave={() => handleTextHover(false)}>
                                Contact Me <img src={arrow} alt="" />
                            </button>
                        </div>
                        <div className="links">
                            <ul>
                                <li  onMouseEnter={() => handleTextHover(true)} onMouseLeave={() => handleTextHover(false)} className="link">Facebook <img src={arrowTopLeft} alt="" /></li>
                                <li  onMouseEnter={() => handleTextHover(true)} onMouseLeave={() => handleTextHover(false)} className="link">Instagram <img src={arrowTopLeft} alt="" /></li>
                                <li  onMouseEnter={() => handleTextHover(true)} onMouseLeave={() => handleTextHover(false)} className="link">GitHub <img src={arrowTopLeft} alt="" /></li>
                            </ul>
                        </div>
                        <p className="name">Paweł Garncarz</p>
                    </div>
                </div>
            </div>
        </section>
    )
}