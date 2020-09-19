import React from 'react'

import board from '../assets/toppings/board.svg'
import base from '../assets/toppings/base.svg'

// layout padding margin display color

const PizzaViewerComponent: React.FC = () => {
    return (
        <div className='pizza-viewer w-2/5 h-screen relative flex items-center neu-flat-dark bg-red-500'>
            <div className='pizza-container w-full'>
                <img className='base w-8/12 absolute' src={base} alt='base'/>
                <img className='board w-full' src={board} alt='board' />
            </div>
        </div>
    )
}

export default PizzaViewerComponent
