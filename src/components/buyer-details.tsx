import React from 'react'

import Icon from './icons'
import { join } from '../utils'

const fieldClasses = join([
    'border-gray-200',
    'border',
    'field',
    'flex-col',
    'flex',
    'h-32',
    'justify-around',
    'neu-flat-light',
    'p-5',
    'rounded-lg',
    'text-gray-700',
    'w-full'
])

const inputClasses = ['neu-pressed-light', 'p-3', 'rounded-lg', 'w-full'].join(' ') // prettier-ignore

const fields = [
    {
        label: 'Name',
        icon: 'person',
        placeholder: 'Froddo Baggins'
    },
    {
        label: 'Email',
        icon: 'envelope',
        placeholder: 'fbaggins@aol.com'
    },
    {
        label: 'Confirm Email',
        icon: 'envelope',
        placeholder: 'fbaggins@aol.com'
    },
    {
        label: 'Address',
        icon: 'marker',
        placeholder: '123 Shire Way.'
    },
    {
        label: 'State',
        icon: 'map',
        placeholder: 'California'
    },
    {
        label: 'Phone',
        icon: 'phone',
        placeholder: '310-555-5961'
    }
]

const BuyerDetailsComponent: React.FC = props => {
    return (
        <div className='input-details grid grid-cols-3 gap-4 py-5 px-10 w-full'>
            {fields.map((f, i) => (
                <div className={fieldClasses} key={i}>
                    <label className='flex justify-between'>
                        {f.label}
                        <span className='icon-wrap h-6 inline-block w-6'>
                            <Icon
                                className='h-full w-full text-red-500'
                                name={f.icon}
                            />
                        </span>
                    </label>
                    <input
                        className={inputClasses}
                        type='text'
                        placeholder={f.placeholder}
                    />
                </div>
            ))}
        </div>
    )
}

export default BuyerDetailsComponent
