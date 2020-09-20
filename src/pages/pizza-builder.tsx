import React from 'react'

import PizzaForm from '../components/pizza-form'
import PizzaViewer from '../components/pizza-viewer'

interface Props {}

const PizzaBuilderPage = (props: Props) => {
    return (
        <div className='h-screen w-screen flex flex-row'>
            <PizzaViewer />
            <PizzaForm />
        </div>
    )
}

export default PizzaBuilderPage
