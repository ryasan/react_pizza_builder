import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home'
import PizzaBuilderPage from './pages/pizza-builder'
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
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/builder'>
                        <PizzaBuilderPage />
                    </Route>
                </Switch>
            </Router>
        </Context.Provider>
    )
}

export default App
