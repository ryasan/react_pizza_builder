import React from 'react'

import { classList } from '../utils'

const PlaceOrderComponent: React.FC = () => (
    <div className='w-full py-5 px-10'>
        <button
            className={classList({
                'bg-red-500': true,
                'h-12': true,
                'my-5': true,
                'neu-flat-red': true,
                'place-order-btn': true,
                'rounded-md': true,
                'text-center': true,
                'text-gray-100': true,
                'w-full': true,
                'active:neu-pressed-red': true
            })}>
            Place Order
        </button>
    </div>
)

export default PlaceOrderComponent
