import React from 'react'
import { v4 as uuid } from 'uuid'
import Card from '../../../../Components/Card/Card'
import { ActionDescription } from '../../../../Utils/types/ActionDescription'
import Action from './Components/Action'

interface ActionProps {
	actions: ActionDescription[]
}

export const Actions: React.FC<ActionProps> = ({ actions }) => {
	return (
		<Card>
			<h3>Actions</h3>
			{actions.map(action => {
				return <Action key={uuid()} action={action}/>
			})}
		</Card>
	)
}

export default Actions