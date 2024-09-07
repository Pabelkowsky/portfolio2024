import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useSelector } from "react-redux"

export default function Cursor() {

    const isHovered = useSelector((state) => state.cursor.isHovered)

    const cursorSize = 50

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.6 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        return () => window.removeEventListener('mousemove', manageMouseMove)
    })

    function manageMouseMove(e) {
        const { clientX, clientY } = e
        mouse.x.set(clientX - cursorSize / 2)
        mouse.y.set(clientY - cursorSize / 2)
    }

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                width: cursorSize,
                height: cursorSize,
                scale: isHovered ? 5 : 1,
                transition: 'transform 0.5s' // Dodana animacja przejścia
            }}
            className="cursor"
        />
    )
}
