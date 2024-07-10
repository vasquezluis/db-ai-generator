import { create } from 'zustand'
import { type IApiKeyStore } from '../types'

const initialState = {
	apiKey: '',
}

export const apiKeyStore = create<IApiKeyStore>((set) => ({
	...initialState,
	setApiKey(key) {
		set(() => ({
			apiKey: key,
		}))
	},
}))
