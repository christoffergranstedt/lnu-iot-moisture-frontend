import React from 'react'
import { v4 as uuid } from 'uuid'
import moment from 'moment'
import { ValueDescription } from '../../../../../../Utils/types/ValueDescription'
import styled from 'styled-components'

const StyledDiv = styled.div`
	display: block;
	width: 100%;

	button {
		margin-top: 10px;
		margin-bottom: 10px;
		margin-right: 10px;
		background: rgb(192, 116, 116);
		border-radius: 8px;
		border: none;
		color: white;
		text-decoration: none;
		font-size: 16px;
		cursor: pointer;

		&:hover {
			background:rgb(206, 129, 129);
		}		
	}
`

interface ValuesProps {
	values: ValueDescription[]
}

const incrementNumber = 10

export const Values: React.FC<ValuesProps> = ({ values }) => {
	const [valuesToDisplay, setValuesToDisplay] = React.useState<ValueDescription[]>([])
	const [numberOfValuesToShow, setNumberOfValuesToShow] = React.useState<number>(10)

	React.useEffect(() => {
		values.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		const newValues = values.slice(0, numberOfValuesToShow)
		setValuesToDisplay(newValues)
	}, [values, numberOfValuesToShow])

	const loadMore = () => {
		setNumberOfValuesToShow(numberOfValuesToShow + incrementNumber)
		const reversedValues = values.reverse()
		setValuesToDisplay(reversedValues.slice(numberOfValuesToShow, reversedValues.length - 1))
	}

	return (
		<StyledDiv>
			{valuesToDisplay.map(value => {
				return <p key={uuid()}>{`${parseInt(value.value)}%`} - {moment(value.date).format('YYYY-MM-DD HH:mm')}</p>
			})}
			{ numberOfValuesToShow > values.length ? null : <button onClick={loadMore}>Load more</button> }
		</StyledDiv>
	)
}

export default Values