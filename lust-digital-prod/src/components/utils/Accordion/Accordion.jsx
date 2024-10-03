import { useState } from 'react'
import ArrDown from '../../../assets/Down.png'
import './accordion.css'

const Accordion = ({title, description}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <button onClick={() => setIsOpen(!isOpen)} className="accordion">
            <div className="accordion-head">
                <h2>{title}</h2>
                <img className={isOpen ? 'arrow opened' : 'arrow'} src={ArrDown} alt="Arrow Down"/>
            </div>
            <div className={isOpen ? 'accordion-body open' : 'accordion-body'}  >
                <p>{description}</p>
            </div>
        </button>
    );
};

export default Accordion;