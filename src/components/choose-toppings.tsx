import React, { useState } from 'react'

import { toppings, Topping } from '../constants'
import { capitalize, classList } from '../utils'

const ChooseToppingsComponent: React.FC = () => {
    const [selected, setSelected] = useState<Topping[]>([])

    const toggleSelect = (topping: Topping) => () => {
        setSelected(prev =>
            prev.includes(topping)
                ? prev.filter(t => t !== topping)
                : [...prev, topping]
        )
    }

    return (
        <div className='w-full'>
            <p className=''>Toppings</p>
            <div className='topping-list w-full grid grid-cols-4 gap-4 py-5 px-10'>
                {toppings.map(t => (
                    <div
                        key={t.name}
                        onClick={toggleSelect(t.name)}
                        className={classList({
                            'cursor-pointer': true,
                            'h-10': true,
                            'leading-10': true,

                            'neu-flat-light': !selected.includes(t.name),
                            'neu-pressed-light': selected.includes(t.name),
                            'rounded-lg': true,
                            'topping-item': true
                        })}>
                        <span
                            className={classList({
                                'bg-gray-600': !selected.includes(t.name),
                                'bg-red-500': selected.includes(t.name),
                                'inline-block': true,
                                'justify-center': true,
                                'rounded-l-lg': true,
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
        </div>
    )
}

export default ChooseToppingsComponent
