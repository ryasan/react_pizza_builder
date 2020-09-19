import React from 'react'

import Board from '../assets/toppings/board.svg'
import Base from '../assets/toppings/base.svg'

const PizzaViewerComponent: React.FC = () => {
    return (
        <div className='pizza-viewer w-2/5 h-screen relative flex items-center neu-flat-dark bg-red-500'>
            <div className='pizza-container w-full'>
                <img className='base w-8/12 absolute' src={Base} alt='base'/>
                <img className='board w-full' src={Board} alt='board' />
            </div>
        </div>
    )
}

export default PizzaViewerComponent
