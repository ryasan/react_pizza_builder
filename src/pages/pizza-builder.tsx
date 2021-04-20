import React from 'react'

import PizzaForm from '../components/pizza-form'
import PizzaViewer from '../components/pizza-viewer'

const PizzaBuilderPage: React.FC = () => (
	<div className='flex flex-row w-screen h-screen'>
		<PizzaViewer />
		<PizzaForm />
	</div>
)

export default PizzaBuilderPage
