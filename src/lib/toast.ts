import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export type ToastArray = Array<ToastItem>

export type ToastItem = {
  type: 'info' | 'success' | 'warning' | 'error' | 'default'
  text: string
}

export function immediatelyToast({ text, type = 'default' }: ToastItem): void {
  if (type === 'info') {
    toast.info(text)
  } else if (type === 'success') {
    toast.success(text)
  } else if (type === 'warning') {
    toast.warning(text)
  } else if (type === 'error') {
    toast.error(text)
  } else {
    toast(text)
  }
}
