import { HTTPMethod } from "../enums/HTTPMethod";
import { ActionDescription } from "./ActionDescription";
import { EventDescription } from "./EventDescription";
import { PropertyDescription } from "./PropertyDescription";

export type ThingDescription = {
	'@context': string,
	title: string,
	id: string,
	base: string,
	description: string,
	securityDefinitions: {
		bearer_sc: {
			scheme: string
		}
	},
	security: string,
	properties: [PropertyDescription],
	actions: [ActionDescription],
	events: [EventDescription],
	forms: [{
		op: string[],
		href: string,
		methodName: HTTPMethod,
		contentType: string
	}]
}