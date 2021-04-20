import React from 'react'
import BuyerDetails from './buyer-details'
import ChooseSize from './choose-size'
import ChooseToppings from './choose-toppings'
import Divider from './divider'
import PlaceOrder from './place-order'

const PizzaFormComponent: React.FC = () => (
	<div className='form-container w-full flex-1 flex justify-center py-5 overflow-y-scroll bg-gray-200'>
		<div className='form-inner max-w-screen-xl w-full flex flex-col'>
			<BuyerDetails />
			<Divider text='Choose Pizza' />
			<ChooseSize />
			<ChooseToppings />
			<Divider text='Place Order' />
			<PlaceOrder />
		</div>
	</div>
)

export default PizzaFormComponent
