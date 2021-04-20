import React, {useContext} from 'react'
import {sumBy} from 'lodash'

import {Context, Order} from '../app'

import {classList, formatPrice, capitalize} from '../utils'
import {sizePrices} from '../constants'

const calcTotal = (order: Order): number => {
	return sumBy(order.toppings, 'price') + sizePrices[order.size].price
}

const PlaceOrderComponent: React.FC = () => {
	const {order, formIsValid} = useContext(Context)

	return (
		<div className='order w-full flex-1 py-5 px-10 flex flex-col'>
			<div className='order__summary h-full'>
				<ul className='item-list'>
					<li className='flex justify-between'>
						<span>{capitalize(order.size)} Size</span>
						<span>{formatPrice(sizePrices[order.size].price)}</span>
					</li>
					{order.toppings.map((t) => (
						<li key={t.name} className='flex justify-between'>
							<span>{capitalize(t.name)}</span>
							<span>{formatPrice(t.price)}</span>
						</li>
					))}
				</ul>
				<div className='flex justify-between mt-5 font-bold'>
					<span>Total:</span>
					<span>{formatPrice(calcTotal(order))}</span>
				</div>
			</div>
			<button
				onClick={() => alert(formIsValid ? 'Your order is being processed. Thank you!' : 'Some fields are incomplete.')}
				className={classList({
					'active:neu-pressed-red': true,
					'bg-red-500': true,
					'h-16': true,
					'neu-flat-red': true,
					'order__btn': true,
					'rounded-md': true,
					'text-center': true,
					'text-gray-100': true,
					'w-full': true,
				})}>
				Place Order
			</button>
		</div>
	)
}

export default PlaceOrderComponent
