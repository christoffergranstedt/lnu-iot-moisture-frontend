import React from 'react'

import { ThingDescription } from '../../Types/ThingDescription'
import { SubHeading } from '../SubHeading/SubHeading'

interface ThingInfoProps {
	thing: ThingDescription;
}

export const ThingInfo: React.FC<ThingInfoProps> = ({ thing }) => {
	return (
		<>
      <SubHeading>Information about thing</SubHeading>
      <p><strong>Id: </strong> {thing.id}</p>
      <p><strong>Description:</strong> {thing.description}</p>
		</>
	)
}