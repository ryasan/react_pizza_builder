import React from 'react'

const DividerComponent: React.FC<{text: string}> = (props) => (
	<div className='divider w-full flex items-center text-center'>{props.text}</div>
)

export default DividerComponent
