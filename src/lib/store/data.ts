import { create } from 'zustand'
import { type IDataStore } from '../types'

const initialState = {
	error: undefined,
}

export const useDataStore = create<IDataStore>((set) => ({
	...initialState,
	setError(error) {
		set(() => ({
			error,
		}))
	},
}))
