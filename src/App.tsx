import React, { useState } from 'react'

import PizzaViewer from './components/pizza-viewer'
import PizzaForm from './components/pizza-form'
import { Pepperoni, ToppingData, Topping } from './constants'

export type Order = {
    toppings: ToppingData[]
    size: string
}

export interface ContextProps {
    order: Order
    formIsValid: boolean
    setOrder: (order: any) => void
    setFormIsValid: (bool: boolean) => void
}

export const Context = React.createContext<ContextProps>({
    order: { toppings: [], size: '' },
    formIsValid: false,
    setOrder: () => {},
    setFormIsValid: () => {}
})

const App = () => {
    const [order, setOrder] = useState({
        toppings: [
            { name: 'pepperoni' as Topping, price: 150, icon: Pepperoni }
        ],
        size: 'medium'
    })
    const [formIsValid, setFormIsValid] = useState(false)

    return (
        <Context.Provider
            value={{
                order,
                formIsValid,
                setOrder,
                setFormIsValid
            }}>
            <div className='h-screen w-screen flex flex-row'>
                <PizzaViewer />
                <PizzaForm />
            </div>
        </Context.Provider>
    )
}

export default App
