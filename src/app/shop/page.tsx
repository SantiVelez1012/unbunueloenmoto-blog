import HomePageTemplate from '@/features/shop/presentation/templates/home-template/homeTemplate';

export const metadata = {
  title: 'Un Buñuelo en Moto | Tienda de Ropa y Accesorios para Motociclistas',
  description: 'Descubre nuestra tienda de ropa y accesorios para motociclistas. Encuentra todo lo que necesitas para tu aventura en moto, desde chaquetas y cascos hasta equipamiento de seguridad. ¡Explora nuestra colección y equípate para la carretera!',
  keywords: 'ropa de moto, accesorios de moto, chaquetas, cascos, equipamiento de seguridad, tienda online, compra en línea, guantes de moto, botas de moto, pantalones de moto, mochilas para motociclistas, protecciones, impermeables de moto, outlet moto, ofertas moto, equipamiento touring, regalos para motociclistas, tienda de motos, accesorios para moto, ropa impermeable, visores, intercomunicadores, repuestos moto',
  authors: [{ name: 'Un Buñuelo en Moto' }],
  openGraph: {
    title: 'Un Buñuelo en Moto | Tienda de Ropa y Accesorios para Motociclistas',
    description: 'Descubre nuestra tienda de ropa y accesorios para motociclistas. Encuentra todo lo que necesitas para tu aventura en moto, desde chaquetas y cascos hasta equipamiento de seguridad. ¡Explora nuestra colección y equípate para la carretera!',
    url: 'https://unbunueloenmoto.com/shop',
    images: [
      {
        url: 'https://www.unbunueloenmoto.com/imgs/shop-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Un Buñuelo en Moto',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Un Buñuelo en Moto | Tienda de Ropa y Accesorios para Motociclistas',
    description: 'Descubre nuestra tienda de ropa y accesorios para motociclistas. Encuentra todo lo que necesitas para tu aventura en moto, desde chaquetas y cascos hasta equipamiento de seguridad. ¡Explora nuestra colección y equípate para la carretera!',
  }
};


function Page() {
  return (
    <div className="min-h-screen bg-base-200">
      <HomePageTemplate />
    </div>
  );
}

export default Page;