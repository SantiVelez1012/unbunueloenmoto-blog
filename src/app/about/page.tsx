import AboutPage from '@/features/about/presentation/pages/aboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre Mí | Santiago Velez - La historia detrás de Un Buñuelo en Moto',
    description: 'Soy Santiago Velez. No soy experto, soy un buñuelo documentando su proceso. Conoce mi historia, mi TTR 200 modificada y cómo aprender de motos sin filtros ni tecnicismos innecesarios.',
    openGraph: {
        title: 'Detrás del Casco: La historia de un Buñuelo Real.',
        description: '100 videos y la TTR 200 más bonita de Colombia. Descubre por qué decidí mostrar mis errores en lugar de ocultarlos.',
        url: 'https://unbunueloenmoto.com/about',
        images: [
            {
                url: 'https://unbunueloenmoto.com/imgs/hero-banner.jpg',
                width: 1200,
                height: 630,
                alt: 'Un Buñuelo en Moto',
            },
        ],
        type: 'website',
    },
    keywords: [
        'Santiago Velez',
        'Un Buñuelo en Moto',
        'Motovlog Colombia',
        'TTR 200 modificada',
        'consejos para motociclistas principiantes',
        'Pulsar N125',
        'rutas Medellín',
        'aprendizaje en moto',
        'historias de motociclistas reales',
        'mantenimiento básico de motos',
        'viajes en moto Colombia',
        'comunidad motera sin filtros',
        'experiencias de conducción',
        'motos para principiantes',
        'modificaciones de motos económicas',
        'cultura motera en Colombia',
        'seguridad vial para motociclistas',
        'tutoriales de mecánica básica',
        'reseñas de motos económicas',
        'eventos moteros Medellín',
        'consejos de viaje en moto',
    ]
};

const Page = () => {
    return <AboutPage />;
};


export default Page;