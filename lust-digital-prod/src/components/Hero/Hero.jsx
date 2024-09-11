import { useEffect, useRef } from "react";
import Typed from 'typed.js'
import './hero.css'
import Button from "../utils/Button/Button.jsx";

const Hero = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'ЛЕНДИНГИ ^1000',
                'САЙТЫ-ВИЗИТКИ ^1000',
                'ИНТЕРНЕТ-МАГАЗИНЫ ^1000',
                'КОРПОРАТИВНЫЕ САЙТЫ ^1000',
                'ПРОМО-САЙТЫ ^1000',
            ],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            backSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className="hero-content">
            <div className="hero-heading">
                <div>
                    <h1>Разрабатываем</h1>
                </div>
                <div className="animated-div">
                    <h1 className="animated-text" ref={el}/>
                </div>
            </div>
            <div className="hero-description">
                <p><strong>LUST - Digital Agency</strong> это Российская IT - Компания, занимающаяся разработкой сайтов. <br/>
                    Изготовление сайтов под ключ, лэндинги, многостраничники. </p>
                <Button text="Перейти к услугам"/>
            </div>
        </div>
    );
};

export default Hero;