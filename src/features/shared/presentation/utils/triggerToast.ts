import { toast } from "react-hot-toast";

type ToastType = 'success' | 'error' | 'default';

export function showToast(
  message: string,
  type: ToastType = 'default'
) {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
}