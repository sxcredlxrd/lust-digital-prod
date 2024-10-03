import ButtonModal from "../utils/ButtonModal/ButtonModal.jsx";
import './products.css'

const Products = () => {

    return (
        <div className="products-content">
            <div className="products-heading">
                <h1>Наши услуги</h1>
            </div>
            <div className="products-grid">
                <div className="div1 block">
                    <h2>Разработка сайта</h2>
                    <p>Качественно и оперативно <br/>
                        создадим онлайн-ресурс для <br/>
                        любой компании</p>
                    <div className="block-flex">
                        <div>Создание с нуля</div>
                        <div>Готовые решения</div>
                        <div>Доработка вашего проекта</div>
                    </div>
                </div>
                <ButtonModal className="products-btn first" children={'от 25 000 ₽'}/>
                <div className="div3 block">
                    <h2>SEO</h2>
                    <p>Займемся продвижением ресурса, <br/>
                        чтобы о вашем продукте знали</p>
                    <div className="block-flex">
                        <div>Вывод в ТОП-10</div>
                        <div>Яндекс</div>
                        <div>Google</div>
                    </div>
                </div>
                <ButtonModal className="products-btn second" children={'от 10 000 ₽'}/>
                <div className="div5 block">
                    <h2>Дизайн</h2>
                    <p>Наша команда профессионалов <br/>
                        готова разрабатывать дизайн любой <br/>
                        сложности</p>
                    <div className="block-flex">
                        <div>Логотип</div>
                        <div>Отрисовка дизайна</div>
                        <div>Доработка действующего дизайна</div>
                    </div>
                </div>
                <ButtonModal className="products-btn third" children={'от 15 000 ₽'}/>
                <div className="div7 block">
                    <h2>SMM</h2>
                    <p>Используем популярные социальные <br/>
                        сети для привлечения новой <br/>
                        аудитории</p>
                    <div className="block-flex">
                        <div>Настройка рекламы</div>
                        <div>Узнаваемость бренда</div>
                        <div>Заявки-переходы на сайт</div>
                    </div>
                </div>
                <ButtonModal className="products-btn fourth" children={'от 20 000 ₽'}/>
                <div className="div9 block">
                    <h2>Интернет-магазины</h2>
                    <p>Создадим полноценный интернет- <br/>
                        магазин за несколько дней</p>
                    <div className="block-flex">
                        <div>Каталог</div>
                        <div>Корзина</div>
                        <div>Любые формы оплаты</div>
                    </div>
                </div>
                <ButtonModal className="products-btn fivth" children={'от 50 000 ₽'}/>
            </div>
        </div>
    );
};

export default Products;