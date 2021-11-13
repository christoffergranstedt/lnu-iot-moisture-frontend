import React from 'react'
import { v4 as uuid } from 'uuid'
import dayjs from 'dayjs'

import { ValueDescription } from '../../Types/ValueDescription'

interface ValuesProps {
	values: ValueDescription[]
}

const incrementNumber = 10

export const ValueList: React.FC<ValuesProps> = ({ values }) => {
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
		<>
			{valuesToDisplay.map(value => {
				return <p key={uuid()}>{`${parseInt(value.value)}%`} - {dayjs(value.date).format('YYYY-MM-DD HH:mm')}</p>
			})}
			{ numberOfValuesToShow > values.length ? null : <button onClick={loadMore}>Load more</button> }
		</>
	)
}