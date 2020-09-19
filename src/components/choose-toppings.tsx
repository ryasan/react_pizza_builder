import React, { useEffect, useState } from 'react'

import Anchovy from '../assets/toppings/anchovy.svg'
import Bacon from '../assets/toppings/bacon.svg'
import Basil from '../assets/toppings/basil.svg'
import Chili from '../assets/toppings/chili.svg'
import Mozzarella from '../assets/toppings/mozzarella.svg'
import Mushroom from '../assets/toppings/mushroom.svg'
import Olive from '../assets/toppings/olive.svg'
import Onion from '../assets/toppings/onion.svg'
import Pepper from '../assets/toppings/pepper.svg'
import Pepperoni from '../assets/toppings/pepperoni.svg'
import Sweetcorn from '../assets/toppings/sweetcorn.svg'
import Tomato from '../assets/toppings/tomato.svg'
import { capitalize, classList } from '../utils'

type Topping =
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

interface ToppingData {
    name: Topping
    icon: string
}

const toppings: ToppingData[] = [
    { name: 'anchovy', icon: Anchovy },
    { name: 'bacon', icon: Bacon },
    { name: 'basil', icon: Basil },
    { name: 'chili', icon: Chili },
    { name: 'mozzarella', icon: Mozzarella },
    { name: 'mushroom', icon: Mushroom },
    { name: 'olive', icon: Olive },
    { name: 'onion', icon: Onion },
    { name: 'pepper', icon: Pepper },
    { name: 'pepperoni', icon: Pepperoni },
    { name: 'sweetcorn', icon: Sweetcorn },
    { name: 'tomato', icon: Tomato }
]

const ChooseToppingsComponent: React.FC = props => {
    const [selected, setSelected] = useState<Topping[]>([])

    const toggleSelect = (topping: Topping) => () => {
        setSelected(prev =>
            prev.includes(topping)
                ? prev.filter(t => t !== topping)
                : [...prev, topping]
        )
    }

    return (
        <div className='topping-list grid grid-cols-4 gap-4 py-5 px-10'>
            {toppings.map((t, i) => (
                <div
                    key={t.name}
                    onClick={toggleSelect(t.name)}
                    className={classList({
                        'cursor-pointer': true,
                        'duration-200': true,
                        'h-10': true,
                        'leading-10': true,
                        'neu-flat-light': !selected.includes(t.name),
                        'neu-pressed-light': selected.includes(t.name),
                        'rounded-lg': true,
                        'topping-item': true,
                        transition: true
                    })}>
                    <span
                        className={classList({
                            'bg-gray-600': !selected.includes(t.name),
                            'bg-red-500': selected.includes(t.name),
                            'inline-block': true,
                            'justify-center': true,
                            'rounded-l-lg': true,
                            'topping-icon': true,
                            'w-10 h-10': true
                        })}>
                        <img
                            className='h-6 w-6 m-2'
                            src={t.icon}
                            alt={t.name}
                        />
                    </span>
                    <span className='h-full inline-block leading-10 ml-3'>
                        {capitalize(t.name)}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ChooseToppingsComponent
