import { Toaster, toast } from 'sonner'

export const successToast = (message: string) => {
	toast.success(message)
}

export const errorToast = (message: string) => {
	toast.error(message)
}

export const infoToast = (message: string) => {
	toast.info(message)
}

const Toast = () => {
	return <Toaster position='bottom-left' richColors expand />
}

export default Toast
