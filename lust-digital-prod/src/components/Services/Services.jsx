import { cardItems } from "../../constants/index.js";
import './services.css'

const Services = () => {
    return (
        <div className="services-content">
            <div className="services-heading">
                <p>Выберите то, <br/>
                    что вам действительно нужно:</p>
            </div>
            <div className="services-grid">
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