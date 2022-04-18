import { IProduct, IProductCart } from "./reducer";

export const PRODUCTS: IProduct[] = [
  {
    id: 10001,
    name: 'Кровать TATRAN',
    image: '/images/tatran.jpg',
    description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
  },
  {
    id: 10002,
    name: 'Кресло VILORA',
    image: '/images/vilora.jpg',
    description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
    price: 21000,
  },
  {
    id: 10003,
    name: 'Стол MENU',
    image: '/images/menu.jpg',
    description: 'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
  },
  {
    id: 10004,
    name: 'Диван ASKESTA',
    image: '/images/askesta.jpg',
    description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
    price: 68000,
  },
  {
    id: 10005,
    name: 'Кресло LUNAR',
    image: '/images/lunar.jpg',
    description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
    price: 40000,
  },
  {
    id: 10006,
    name: 'Шкаф Nastan',
    image: '/images/nastan.jpg',
    description: 'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
  }
]

export const PRODUCTS_CART: IProductCart[] = [
  {
    id: 10001,
    name: 'Кровать TATRAN',
    image: '/images/tatran.jpg',
    description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
    count: 3
  },
  {
    id: 10002,
    name: 'Кресло VILORA',
    image: '/images/vilora.jpg',
    description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
    price: 21000,
    count: 1
  }
]