import React, { useState, useEffect } from 'react'

const AnimatedPizzaComponent: React.FC = props => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => setOpen(true), 300)
    }, [])

    return (
        <div className='container' onClick={() => setOpen(prev => !prev)}>
            <div className='lid-container'>
                <div className={`lid-inner ${open ? 'open' : ''}`.trim()}>
                    <div className='lid lid--top'></div>
                    <div className='lid lid--bottom'></div>
                    <div className='lid__front'></div>
                </div>
            </div>
            <div className='box-container'>
                <div className='box'>
                    <div className='box__side'></div>
                    <div className='box__side'></div>
                    <div className='box__side'></div>
                    <div className='home-pizza'>
                        <div className='pepperoni pepperoni--1'></div>
                        <div className='pepperoni pepperoni--2'></div>
                        <div className='pepperoni pepperoni--3'></div>
                        <div className='pepperoni pepperoni--4'></div>
                        <div className='pepperoni pepperoni--5'></div>
                        <div className='pepperoni pepperoni--6'></div>
                        <div className='pepperoni pepperoni--7'></div>
                        <div className='pepperoni pepperoni--8'></div>
                        <div className='pepperoni pepperoni--9'></div>
                    </div>
                </div>
                <div className='box-front-container'>
                    <div className='box-front'></div>
                </div>
            </div>
            <div className={`steam-outer ${open ? 'open' : ''}`.trim()}>
                <div className='steam-container'>
                    <div className='steam'></div>
                    <div className='steam'></div>
                    <div className='steam'></div>
                </div>
                <div className='steam-container'>
                    <div className='steam'></div>
                    <div className='steam'></div>
                    <div className='steam'></div>
                </div>
                <div className='steam-container'>
                    <div className='steam'></div>
                    <div className='steam'></div>
                    <div className='steam'></div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedPizzaComponent
