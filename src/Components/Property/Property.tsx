import React from 'react'
import dayjs from 'dayjs'

import { LineChartData } from '../../Types/LineChartData'
import { PropertyDescription } from '../../Types/PropertyDescription'
import { LineChart } from '../LineChart/LineChart'
import { SubHeading } from '../SubHeading/SubHeading'

interface PropertyProps {
	property: PropertyDescription
	className?: string
}

export const Property: React.FC<PropertyProps> = ({ property, className }) => {
	const [data, setData] = React.useState<LineChartData[]>()

  React.useEffect(() => {
    if (property.values) {
      const dataToChart = {
        id: property.type,
        color: 'hsl(62, 70%, 50%)',
        data: property.values.slice(-10).map(data => { 
          return { x:  dayjs(data.date).format('DD/MM-HH:mm'), y: data.value }
        })
      }

      setData([dataToChart])
    }

  }, [property])

	if (data && property) {
		return (
			<>
			<SubHeading small={true}>{property.title}</SubHeading>
			<div className={className}>
				<LineChart data={data}/>
			</div>
			</>
		)
	} else {
		return null
	}

}