import { HTTPMethod } from "../enums/HTTPMethod";
import { ValueDescription } from "./ValueDescription";

export type PropertyDescription = {
	title: string,
	type: string,
	unit: string,
	minimum: string,
	maximum: string,
	values: ValueDescription[]
	forms: [{
		op: string[],
		href: string,
		methodName: HTTPMethod,
		contentType: string
	}]
}
