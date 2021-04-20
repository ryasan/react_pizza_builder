import React, {useContext} from 'react'

import Board from '../assets/toppings/board.svg'
import Base from '../assets/toppings/base.svg'
import {Context} from '../app'
import '../styles/pizza-viewer.scss'

const PizzaViewerComponent: React.FC = () => {
	const {order} = useContext(Context)

	return (
		<div className='pizza relative flex flex-col items-center h-screen overflow-hidden'>
			<h1 className='pizza__title relative w-full mt-5 text-6xl text-center text-white'>Mr. Pizza</h1>
			<div className='pizza__inner relative mt-40'>
				<div className='pizza__base-container'>
					<div className='pizza__toppings absolute w-full h-full'>
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
