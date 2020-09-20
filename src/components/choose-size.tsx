import React, { useContext } from 'react'

import { sizePrices } from '../constants'
import '../styles/choose-size.scss'
import { Context, Order } from '../app'
import { classList } from '../utils'

const ChooseSizeComponent: React.FC = () => {
    const { order, setOrder } = useContext(Context)

    const handleSetOrder = (size: string) => () => {
        setOrder((prev: Order) => ({ ...prev, size }))
    }

    return (
        <div className='w-full px-10'>
            <p>Size</p>
            <div className='size w-full max-w-3xl m-auto flex justify-evenly items-center px-10 overflow-hidden'>
                {Object.entries(sizePrices).map(([size, details], i) => (
                    <div
                        key={i}
                        onClick={handleSetOrder(size)}
                        className={classList({
                            size__dish: true,
                            [`size__dish--${size}`]: true,
                            'bg-red-500': order.size === size,
                            'border-red-600': order.size === size,
                            'text-white': order.size === size,
                            'hover:bg-red-500': order.size === size,
                            'hover:bg-gray-200': true,
                            'bg-cover': true
                        })}>
                        {details.inches}"
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChooseSizeComponent
