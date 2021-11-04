import { FormDescription } from "./FormDescription"

export type EventDescription = {
	title: string,
	isSubscribing: boolean,
	forms: FormDescription[]
}