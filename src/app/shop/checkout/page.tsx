import CheckoutForm from '@/features/shop/presentation/components/checkout-form/checkoutForm';
import OrderSummary from '../../../features/shop/presentation/components/order-summary/orderSummary';

export default function CheckoutPage() {

  return (
    <main className="min-h-[100dvh] bg-base-100 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-10 text-center">Finalización de compra</h1>

      <span>
        <p className='text-lg font-medium mb-10 text-center'>Recuerda que todos los envíos son contraentrega, asi que el pago lo haces cuando recibas tu pedido</p>
      </span>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </main>
  );
}