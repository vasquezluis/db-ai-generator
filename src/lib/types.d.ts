export interface IApiKeyStore {
	apiKey: string
	setApiKey: (key: string) => void
}
