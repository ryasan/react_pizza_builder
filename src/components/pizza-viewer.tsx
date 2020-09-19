import React, { useContext } from 'react'

import Board from '../assets/toppings/board.svg'
import Base from '../assets/toppings/base.svg'
import { Context } from '../app'
import '../styles/pizza-viewer.scss'

const PizzaViewerComponent: React.FC = () => {
    const { order } = useContext(Context)

    return (
        <div className='pizza w-2/5 h-screen relative flex items-center justify-center neu-flat-dark bg-red-500'>
            <div className='pizza__inner absolute'>
                <div className='pizza__base-container'>
                    {/* prettier-ignore */}
                    <div className='pizza__toppings w-full h-full absolute'>
                        {order.toppings.map((topping, i) => (
                            <div key={i}>
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                                <div className={`pizza__topping pizza__topping--${topping.name}`} />
                            </div>
                        ))}
                    </div>
                    <img className='pizza__base' src={Base} alt='base' />
                </div>
                <img className='pizza__board w-full' src={Board} alt='board' />
            </div>
        </div>
    )
}

export default PizzaViewerComponent
