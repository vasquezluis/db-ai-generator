import { type FormikHelpers } from 'formik'

export interface IApiKeyStore {
	apiKey: string
	setApiKey: (key: string) => void
}

export interface IDataStore {
	error: any
	setError: (value: any) => void
}

export interface Response {
	message: string
	body: any
}

export interface ResponseError {
	message: string
	error: any
}

interface Values {
	userInput: string
}

type SubmitProps = (
	values: Values,
	actions: FormikHelpers<Values>
) => Promise<void>

export interface generateProps {
	context: string
	key: string
}

interface TableProps {
	dataStream: string
}
