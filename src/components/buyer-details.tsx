import React, {ChangeEvent, useContext, useState} from 'react'

import Icon from './icons'
import {join} from '../utils'
import {Context} from '../app'

const fieldClasses = join([
	'bg-gray-200',
	'border-gray-300',
	'border',
	'field',
	'flex-col',
	'flex',
	'h-32',
	'justify-around',
	'neu-flat-light',
	'p-5',
	'relative',
	'rounded-lg',
	'text-gray-700',
	'w-full',
])

const inputClasses = join(['neu-pressed-light', 'p-3', 'rounded-lg', 'w-full', 'bg-gray-200'])

type NameType = 'name' | 'email' | 'confirm' | 'address' | 'state' | 'phone'

interface Field {
	label: string
	name: NameType
	icon: string
	placeholder: string
	modifier?: (args: any) => string | number
}

const fields: Field[] = [
	{
		label: 'Name',
		name: 'name',
		icon: 'person',
		placeholder: 'Frodo Baggins',
	},
	{
		label: 'Email',
		name: 'email',
		icon: 'envelope',
		placeholder: 'fbaggins@aol.com',
	},
	{
		label: 'Confirm Email',
		name: 'confirm',
		icon: 'envelope',
		placeholder: 'fbaggins@aol.com',
	},
	{
		label: 'Address',
		name: 'address',
		icon: 'marker',
		placeholder: '123 Shire Way.',
	},
	{
		label: 'State',
		name: 'state',
		icon: 'map',
		placeholder: 'CA',
		modifier: (text: string) => text.toUpperCase(),
	},
	{
		label: 'Phone',
		name: 'phone',
		icon: 'phone',
		placeholder: '310-555-5961',
		modifier: (text: string) => {
			return text.length === 3 || text.length === 7 ? `${text}-` : text
		},
	},
]

interface Errors {
	name: string | boolean
	email: string | boolean
	confirm: string | boolean
	address: string | boolean
	state: string | boolean
	phone: string | boolean
}

const initialState = {
	name: '',
	email: '',
	confirm: '',
	address: '',
	state: '',
	phone: '',
	errors: {name: true, email: true, confirm: true, address: true, state: true, phone: true} as Errors,
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) // prettier-ignore
const validPhoneRegex = RegExp(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)

const BuyerDetailsComponent: React.FC = () => {
	const [state, setState] = useState(initialState)
	const {setFormIsValid} = useContext(Context)

	const validateForm = (errors: Errors) => {
		const isValid = Object.values(errors).every((val) => !val)
		setFormIsValid(isValid)
	}

	const validate = (name: NameType) => () => {
		const {errors} = state
		const value = state[name]

		switch (name) {
			case 'name':
				errors.name = value.length < 2 ? 'Name too short' : false
				break
			case 'email':
				errors.email = !validEmailRegex.test(value) ? 'Invalid email' : false
				break
			case 'confirm':
				errors.confirm = state.email !== value ? 'Email does not match' : false
				break
			case 'address':
				errors.address = value.trim().split(' ').length < 3 ? 'Address too short' : false
				break
			case 'state':
				errors.state = value.length !== 2 ? 'Invalid state' : false
				break
			case 'phone':
				errors.phone = !validPhoneRegex.test(value) ? 'Invalid phone' : false
				break
			default:
				break
		}

		validateForm(errors)
		setState((prev) => ({...prev, errors}))
	}

	const handleChange = (e: ChangeEvent, modifier: any) => {
		e.preventDefault()
		const {name, value} = e.target as HTMLInputElement

		setState((prev) => ({
			...prev,
			[name]: modifier ? modifier(value) : value,
		}))
	}

	return (
		<div className='input-details grid w-full grid-cols-3 gap-4 px-10 py-5'>
			{fields.map((f, i) => (
				<div className={fieldClasses} key={i}>
					{state.errors[f.name] && (
						<span className='absolute top-0 left-0 mt-1 ml-5 text-red-500'>{state.errors[f.name]}</span>
					)}
					<label className='flex items-center justify-between' htmlFor={f.name}>
						{f.label}
						<span className='icon-wrap inline-block w-6 h-6'>
							<Icon className='w-full h-full text-red-500' name={f.icon} />
						</span>
					</label>
					<input
						type='text'
						className={inputClasses}
						name={f.name}
						placeholder={f.placeholder}
						onChange={(e) => handleChange(e, f.modifier)}
						value={state[f.name]}
						onBlur={validate(f.name)}
						formNoValidate
					/>
				</div>
			))}
		</div>
	)
}

export default BuyerDetailsComponent
