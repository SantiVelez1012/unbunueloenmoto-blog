import CheckoutForm from '@/features/shop/presentation/components/checkout-form/checkoutForm';

export default function CheckoutPage() {

  return (
    <main className="min-h-[100dvh] bg-base-100 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-10 text-center">Finalización de compra</h1>

      <span>
        <p className='text-lg font-medium mb-10 text-center'>Recuerda que todos los envíos son contraentrega, asi que el pago lo haces cuando recibas tu pedido</p>
      </span>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <CheckoutForm />
        <section className="bg-base-200 p-6 rounded-box space-y-4">
          <h2 className="text-2xl font-bold">Resumen del pedido</h2>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
            <div className="flex-1">
              <p className="font-medium">Producto Genérico</p>
              <p className="text-sm text-gray-500">Talla M / Azul</p>
            </div>
            <p className="font-semibold">$120.000</p>
          </div>

          <div className="divider my-2" />

          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>$120.000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Envío</span>
            <span>*Se calcula dependiendo de tu ciudad</span>
          </div>
          <div className="divider my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$130.000</span>
          </div>
        </section>
      </div>
    </main>
  );
}