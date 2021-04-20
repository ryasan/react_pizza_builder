import React, {useContext} from 'react'
import {find} from 'lodash'

import {Context, Order} from '../app'
import {toppings, ToppingData} from '../constants'
import {capitalize, classList} from '../utils'

const ChooseToppingsComponent: React.FC = () => {
	const {setOrder, order} = useContext(Context)

	const toggleSelect = (topping: ToppingData) => () => {
		setOrder((prev: Order) => {
			const exists = find(prev.toppings, {name: topping.name})
			const toppings = exists ? prev.toppings.filter((t) => t.name !== topping.name) : [...prev.toppings, topping]

			return {...prev, toppings}
		})
	}

	return (
		<div className='w-full'>
			<p className='px-10'>Toppings</p>
			<div className='topping-list grid w-full grid-cols-4 gap-4 px-10 py-5'>
				{toppings.map((t) => (
					<div
						key={t.name}
						onClick={toggleSelect(t)}
						className={classList({
							'bg-gray-200': true,
							'border': true,
							'cursor-pointer': true,
							'flex': true,
							'h-10': true,
							'leading-10': true,
							'neu-flat-light': !find(order.toppings, {name: t.name}),
							'neu-pressed-light': find(order.toppings, {name: t.name}),
							'rounded-lg': true,
							'topping-item': true,
						})}>
						<span
							className={classList({
								'bg-gray-600': !find(order.toppings, {name: t.name}),
								'bg-red-500': find(order.toppings, {name: t.name}),
								'inline-block': true,
								'justify-center': true,
								'rounded-l-lg': true,
								'w-10 h-full': true,
							})}>
							<img className='w-6 h-6 m-2' src={t.icon} alt={t.name} />
						</span>
						<span className='inline-block h-full ml-3 overflow-hidden leading-10 whitespace-no-wrap'>
							{capitalize(t.name)}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default ChooseToppingsComponent
