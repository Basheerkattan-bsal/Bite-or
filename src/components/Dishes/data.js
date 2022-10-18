import chicken from '../../img/d1-img.jpeg'
import hummus from '../../img/d2-img.jpeg'
import salmon from '../../img/d3-img.jpeg'
import veggie from '../../img/d4-img.jpeg'

const dishesMenu = [
    {
        img: chicken,
        id: 'd1',
        name: 'wasabier',
        description: 'harissa chicken',
        price: 21.99,
    },
    {
        img:hummus,
        id: 'd2',
        name: 'Veggie dish',
        description: 'Curry hummus with curry dip ',
        price: 15.99,
    },
    {
        img: salmon,
        id: 'd3',
        name:' salmon fillet',
        description: 'Grilled salmon fillet garnished',
        price: 29.99,
    },
    {
        img: veggie,
        id: 'd4',
        name: 'Healthy meal',
        description: 'Roasted vegetables',
        price: 19.99,
    }
]

const getDishes = () => {
    return dishesMenu;
}


export {getDishes};