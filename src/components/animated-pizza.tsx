import React, {useState, useEffect} from 'react'

const AnimatedPizzaComponent: React.FC = (props) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setTimeout(() => setOpen(true), 300)
	}, [])

	return (
		<div className={`image-container ${open ? 'open' : ''}`.trim()} onClick={() => setOpen((prev) => !prev)}>
			<div className='lid-container'>
				<div className='lid'>
					<div className='lid__face lid__face--top'></div>
					<div className='lid__face lid__face--bottom'></div>
					<div className='lid__front'></div>
				</div>
			</div>
			<div className='box-container'>
				<div className='box'>
					<div className='box__side'></div>
					<div className='box__side'></div>
					<div className='box__side'></div>
					<div className='box__pizza'>
						<div className='box__pepperoni box__pepperoni--1'></div>
						<div className='box__pepperoni box__pepperoni--2'></div>
						<div className='box__pepperoni box__pepperoni--3'></div>
						<div className='box__pepperoni box__pepperoni--4'></div>
						<div className='box__pepperoni box__pepperoni--5'></div>
						<div className='box__pepperoni box__pepperoni--6'></div>
						<div className='box__pepperoni box__pepperoni--7'></div>
						<div className='box__pepperoni box__pepperoni--8'></div>
						<div className='box__pepperoni box__pepperoni--9'></div>
					</div>
				</div>
				<div className='box-front-container'>
					<div className='box-front'></div>
				</div>
			</div>
			<div className={`steam-container ${open ? 'open' : ''}`.trim()}>
				<div className='steam-group'>
					<div className='steam'></div>
					<div className='steam'></div>
					<div className='steam'></div>
				</div>
				<div className='steam-group'>
					<div className='steam'></div>
					<div className='steam'></div>
					<div className='steam'></div>
				</div>
				<div className='steam-group'>
					<div className='steam'></div>
					<div className='steam'></div>
					<div className='steam'></div>
				</div>
			</div>
		</div>
	)
}

export default AnimatedPizzaComponent
