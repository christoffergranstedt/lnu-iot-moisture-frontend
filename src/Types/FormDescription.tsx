import { HTTPMethod } from '../Contants/HTTPMethod'

export type FormDescription = {
	op: string[],
	href: string,
	methodName: HTTPMethod,
	contentType: string
}