import React from 'react'

import PizzaForm from '../components/pizza-form'
import PizzaViewer from '../components/pizza-viewer'

const PizzaBuilderPage: React.FC = props => (
    <div className='h-screen w-screen flex flex-row'>
        <PizzaViewer />
        <PizzaForm />
    </div>
)

export default PizzaBuilderPage
