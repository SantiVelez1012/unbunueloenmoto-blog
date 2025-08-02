import CheckoutPageTemplate from "@/features/shop/presentation/templates/checkout-page-template/checkoutPageTemplate";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutPage() {
  return (
    <section className="bg-base-200">
      <CheckoutPageTemplate />
    </section>
  );
}