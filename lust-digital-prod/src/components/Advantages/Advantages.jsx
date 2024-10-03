import Background from '../../assets/BackgroundAssetAdv1.png'
import BackgroundSecond from '../../assets/BackgroundAssetAdv2.png'
import BlockUp from '../../assets/BlockUp.png'
import BlockDown from '../../assets/BlockDown.png'
import BlockRight from '../../assets/BlockRight.png'
import './advantages.css'

const Advantages = () => {
    return (
        <div className="advantages-content">
            <img className="advantages-background-first" src={Background} alt="Background"/>
            <img className="advantages-background-second" src={BackgroundSecond} alt="Background"/>
            <div className="advantages-heading">
                <h1>Наши преимущества</h1>
            </div>
            <div className="advantages-grid-content">
                <div className="advantages-block">
                    <h2>Профессиональный дизайн</h2>
                    <p>Мы следим за последними тенденциями <br/>
                        в веб-дизайне и создаем стильные и <br/>
                        эстетичные сайты, которые привлекают <br/>
                        внимание пользователей.</p>
                    <img className="block-up" src={BlockUp} alt=""/>
                </div>
                <div className="advantages-block">
                    <h2>Индивидуальный подход</h2>
                    <p>Мы учитываем все ваши пожелания и <br/>
                        требования, чтобы создать идеальное <br/>
                        решение для вашего онлайн <br/>
                        присутствия</p>
                    <img className="block-down" src={BlockDown} alt=""/>
                </div>
                <div className="advantages-block">
                    <h2>Качественная разработка</h2>
                    <p>Наши разработчики работают на <br/>
                        передовых технологиях и следуют <br/>
                        лучшим практикам веб- <br/>
                        программирования, обеспечивая <br/>
                        надежность и эффективность сайтов</p>
                    <img className="block-right" src={BlockRight} alt=""/>
                </div>
                <div className="advantages-block">
                    <h2>Поддержка и сопровождение</h2>
                    <p>Мы готовы помочь вам в любое время с <br/>
                        обновлением и поддержанием сайта, <br/>
                        чтобы он всегда работал эффективно и <br/>
                        без сбоев</p>
                </div>
                <div className="advantages-block">
                    <h2>Оптимизация под SEO</h2>
                    <p>Наши специалисты уделяют особое <br/>
                        внимание оптимизации сайтов для <br/>
                        поисковых систем, что помогает <br/>
                        улучшить их позиции в поисковой <br/>
                        выдаче</p>
                </div>
                <div className="advantages-block">
                    <h2>Доступные цены</h2>
                    <p>Мы предлагаем конкурентные цены на <br/>
                        наши услуги, чтобы сделать <br/>
                        качественные веб-решения доступными <br/>
                        для всех</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;