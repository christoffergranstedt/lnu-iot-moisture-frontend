import React from 'react'

interface InfoBoxProps {
	className?: string
  children: React.ReactNode
}

export const InfoBox: React.FC<InfoBoxProps> = ({ className, children }) => {

		return (
			<div className={`${className} w-96 h-96 rounded-2xl p-4 text-center`}>
        { children }
			</div>
		)

}