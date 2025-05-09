import BlogHomePage from '@/core/presentation/pages/blog-home/blogHomePage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Un Buñuelo en Moto | Aventuras y Consejos para Motociclistas',
    description: 'Explora rutas, consejos y experiencias de motociclismo con Un Buñuelo en Moto. Únete a la comunidad motera de Colombia y más allá.',
    keywords: ['motociclismo', 'rutas en moto', 'consejos para motociclistas', 'Un Buñuelo en Moto', 'viajes en moto', 'comunidad motera',
        'motociclistas en Colombia', 'aventuras en moto', 'blog de motociclismo', 'experiencias en moto', 'moto turismo', 'motociclismo en Colombia',
        'moto viajes', 'motociclismo y cultura', 'motociclismo y gastronomía', 'motociclismo y naturaleza', 'motociclismo y aventura',
        'motociclismo y paisajes', 'motociclismo y carreteras', 'motociclismo y seguridad', 'motociclismo y tecnología', 'motociclismo y comunidad',
    ],
    authors: [{ name: 'Un Buñuelo en Moto' }],
    openGraph: {
        title: 'Un Buñuelo en Moto | Aventuras y Consejos para Motociclistas',
        description: 'Explora rutas, consejos y experiencias de motociclismo con Un Buñuelo en Moto.',
        url: 'https://unbunueloenmoto.com',
        images: [
            {
                url: 'https://www.unbunueloenmoto.com/imgs/hero-banner.jpg',
                width: 1200,
                height: 630,
                alt: 'Un Buñuelo en Moto',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Un Buñuelo en Moto | Aventuras y Consejos para Motociclistas',
        description: 'Explora rutas, y conoce más sobre el mundo de las motos con Un Buñuelo en Moto.',
        images: ['https://www.unbunueloenmoto.com/imgs/hero-banner.jpg'],
    },
};

const BlogPage = () => {

    return (
        <BlogHomePage />
    );
};

export default BlogPage;