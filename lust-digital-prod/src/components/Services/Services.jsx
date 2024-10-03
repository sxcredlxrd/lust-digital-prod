import {useRef, useState} from "react";
import { cardItems } from "../../constants/index.js";
import './services.css'

const Services = () => {

    const itemsRef = useRef(null)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsMouseDown(true)
        setStartX(e.pageX - - itemsRef.current.offsetLeft)
        setScrollLeft(itemsRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsMouseDown(false)
    }

    const handleMouseUp = () => {
        setIsMouseDown(false)
    }

    const handleMouseMove = (e) => {
        if(!isMouseDown) return;
        e.preventDefault()
        const x = e.pageX - itemsRef.current.offsetLeft
        const walk = (x-startX)*1
        itemsRef.current.scrollLeft = scrollLeft - walk
    }

    return (
        <div className="services-content">
            <div className="services-heading">
                <h1>Выберите то, <br/>
                    что вам действительно нужно:</h1>
            </div>
            <div
                ref={itemsRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="services-grid"
            >
                {cardItems.map(item => (
                    <div className="services-card" key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.image} alt="photo"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;