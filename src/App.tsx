import React from 'react'

import PizzaViewer from './components/pizza-viewer'
import PizzaForm from './components/pizza-form'
import Divider from './components/divider'

const App = () => {
    return (
        <div className='h-screen w-screen flex flex-row'>
            <PizzaViewer />
            <PizzaForm />
        </div>
    )
}

export default App
