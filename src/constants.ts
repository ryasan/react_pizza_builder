import Anchovy from './assets/toppings/anchovy.svg'
import Bacon from './assets/toppings/bacon.svg'
import Basil from './assets/toppings/basil.svg'
import Chili from './assets/toppings/chili.svg'
import Mozzarella from './assets/toppings/mozzarella.svg'
import Mushroom from './assets/toppings/mushroom.svg'
import Olive from './assets/toppings/olive.svg'
import Onion from './assets/toppings/onion.svg'
import Pepper from './assets/toppings/pepper.svg'
import Pepperoni from './assets/toppings/pepperoni.svg'
import Sweetcorn from './assets/toppings/sweetcorn.svg'
import Tomato from './assets/toppings/tomato.svg'

export type Topping =
    | 'anchovy'
    | 'bacon'
    | 'basil'
    | 'chili'
    | 'mozzarella'
    | 'mushroom'
    | 'olive'
    | 'onion'
    | 'pepper'
    | 'pepperoni'
    | 'sweetcorn'
    | 'tomato'

export interface ToppingData {
    name: Topping
    icon: string
    price: number
}

export const toppings: ToppingData[] = [
    { name: 'anchovy', price: 300, icon: Anchovy },
    { name: 'bacon', price: 150, icon: Bacon },
    { name: 'basil', price: 100, icon: Basil },
    { name: 'chili', price: 250, icon: Chili },
    { name: 'mozzarella', price: 200, icon: Mozzarella },
    { name: 'mushroom', price: 99, icon: Mushroom },
    { name: 'olive', price: 125, icon: Olive },
    { name: 'onion', price: 99, icon: Onion },
    { name: 'pepper', price: 99, icon: Pepper },
    { name: 'pepperoni', price: 150, icon: Pepperoni },
    { name: 'sweetcorn', price: 150, icon: Sweetcorn },
    { name: 'tomato', price: 175, icon: Tomato }
]

interface SizePrice {
    [size: string]: number
}

export const sizePrices = { small: 999, medium: 1299, large: 1699 } as SizePrice
