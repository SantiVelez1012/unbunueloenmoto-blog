export function showToast(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') {
  // Simple console log implementation for now
  // In a real app, this would integrate with a toast library
  console.log(`[${type.toUpperCase()}] ${message}`);
  
  // You can replace this with actual toast implementation
  if (typeof window !== 'undefined') {
    // Simple alert for demo purposes
    if (type === 'error') {
      console.error(message);
    } else {
      console.info(message);
    }
  }
}