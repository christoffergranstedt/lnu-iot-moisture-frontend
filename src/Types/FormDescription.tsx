import { HTTPMethod } from "../enums/HTTPMethod";

export type FormDescription = {
	op: string[],
	href: string,
	methodName: HTTPMethod,
	contentType: string
}