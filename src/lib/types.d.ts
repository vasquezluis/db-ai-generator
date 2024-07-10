export interface IApiKeyStore {
	apiKey: string
	setApiKey: (key: string) => void
}

export interface Response {
	message: string
	body: any
}

export interface ResponseError {
	message: string
	error: any
}
