import Coop from '../assets/Cooperate.png'
import Lending from '../assets/Lending.png'
import Eccom from '../assets/Eccomerce.png'
import Visit from '../assets/Visit.png'
import Promo from '../assets/Promo.png'

export const cardItems = [
    {
        id: crypto.randomUUID(),
        name: 'Корпоративный сайт',
        image: Coop,
    },
    {
        id: crypto.randomUUID(),
        name: 'Лендинг',
        image: Lending,
    },
    {
        id: crypto.randomUUID(),
        name: 'Интернет-магазин',
        image: Eccom,
    },
    {
        id: crypto.randomUUID(),
        name: 'Сайт-визитка',
        image: Visit,
    },
    {
        id: crypto.randomUUID(),
        name: 'Промо-сайт',
        image: Promo,
    }
]