import { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";

export default function Gallery() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0svh", "200svh"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0svh", "-200svh"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0svh", "180svh"]);

    return (
        <section className="gallery">
            <div ref={container} className="container">
                <div className="sticky-item">
                    <div className="content">
                        <Column y={y1} images={[img1, img2, img3, img4]} />
                        <Column y={y2} images={[img5, img6, img7, img8]} />
                        <Column y={y3} images={[img9, img10, img11, img12]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

const Column = ({ images, y }) => {
    return (
        <motion.div style={{ y }} className="column">
            {images.map((image, index) => <img key={index} src={image} alt="image" />)}
        </motion.div>
    );
};
