import { HTTPMethod } from '../Contants/HTTPMethod';

export type ActionDescription = {
	title: string,
	forms: [{
		op: string[],
		href: string,
		methodName: HTTPMethod,
		contentType: string
	}]
}
