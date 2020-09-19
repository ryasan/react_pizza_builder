import React, { SetStateAction, useState, Dispatch } from 'react'

import PizzaViewer from './components/pizza-viewer'
import PizzaForm from './components/pizza-form'

interface ContextProps {
    total: number
    setTotal: Dispatch<SetStateAction<number>>
}

export const Context = React.createContext<ContextProps | null>(null)

const App = () => {
    const [total, setTotal] = useState(0)

    return (
        <Context.Provider
            value={{
                total,
                setTotal
            }}>
            <div className='h-screen w-screen flex flex-row'>
                <PizzaViewer />
                <PizzaForm />
            </div>
        </Context.Provider>
    )
}

export default App
