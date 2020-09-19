import React, { useState } from 'react'

import PizzaViewer from './components/pizza-viewer'
import PizzaForm from './components/pizza-form'
import { ToppingData } from './constants'

export type Order = {
    toppings: ToppingData[]
    size: string
}

export interface ContextProps {
    order: Order
    setOrder: (order: any) => void
}

export const Context = React.createContext<ContextProps>({
    order: { toppings: [], size: '' },
    setOrder: () => ({ toppings: [], size: '' })
})

const App = () => {
    const [order, setOrder] = useState({ toppings: [], size: 'medium' })

    return (
        <Context.Provider
            value={{
                order,
                setOrder
            }}>
            <div className='h-screen w-screen flex flex-row'>
                <PizzaViewer />
                <PizzaForm />
            </div>
        </Context.Provider>
    )
}

export default App
