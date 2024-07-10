import { create } from 'zustand'
import { type IDataStore } from '../types'

const initialState = {
	data: [],
	isLoading: false,
	error: null,
}

export const useDataStore = create<IDataStore>((set) => ({
	...initialState,
	setData(data) {
		set(() => ({
			data,
		}))
	},
	setIsLoading(value) {
		set(() => ({
			isLoading: value,
		}))
	},
	setError(error) {
		set(() => ({
			error,
		}))
	},
}))
