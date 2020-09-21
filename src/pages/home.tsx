import React from 'react'

import '../styles/home.scss'
import { Link } from 'react-router-dom'
import AnimatedTitle from '../components/animated-title'

const HomePage: React.FC = props => (
    <div className='home-page w-screen h-screen flex flex-col justify-center items-center'>
        <AnimatedTitle />
        <div className='slice mt-20' />
        <Link
            to='builder'
            className='bg-transparent border-4 border-solid rounded-lg px-6 py-3 text-2xl mt-20'>
            Build Pizza
        </Link>
    </div>
)

export default HomePage
