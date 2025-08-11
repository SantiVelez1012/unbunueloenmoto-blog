'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Star, Shield, Truck, HeartHandshake } from 'lucide-react';
import SharedThemeToggle from '@/features/shared/presentation/components/theme-toggle/sharedThemeToggle';

export default function ShopRefactorPreview() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Catálogo Completo",
      description: "Amplia variedad de productos para motociclistas",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Productos de Calidad",
      description: "Solo marcas reconocidas y certificadas",
      color: "text-success"
    },
    {
      icon: Truck,
      title: "Envío Contraentrega",
      description: "Pago seguro al recibir tu pedido",
      color: "text-info"
    },
    {
      icon: HeartHandshake,
      title: "Atención Personalizada",
      description: "Soporte especializado para motociclistas",
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <SharedThemeToggle variant="dropdown" size="lg" />
      </div>
      
      {/* Hero Section */}
      <div className="hero min-h-screen gradient-primary">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              🏍️ Buñuelo Shop
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Tienda Refactorizada
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experiencia de compra moderna con modo oscuro y diseño responsivo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/shop" 
                className="btn btn-secondary btn-lg btn-modern gap-2"
              >
                <ShoppingBag size={20} />
                Explorar Tienda
                <ArrowRight size={20} />
              </Link>
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="btn btn-outline btn-lg"
              >
                Ver Características
              </button>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-base-100 text-base-content">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <Star size={32} />
                </div>
                <div className="stat-title">Calificación</div>
                <div className="stat-value text-primary">4.9</div>
                <div className="stat-desc">De 500+ reseñas</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-success">
                  <ShoppingBag size={32} />
                </div>
                <div className="stat-title">Productos</div>
                <div className="stat-value text-success">200+</div>
                <div className="stat-desc">En catálogo</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-info">
                  <Truck size={32} />
                </div>
                <div className="stat-title">Entregas</div>
                <div className="stat-value text-info">100%</div>
                <div className="stat-desc">Contraentrega</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Mejoras Implementadas</span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Navegación sticky, modo oscuro y experiencia de usuario mejorada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card bg-base-100 shadow-lg hover-lift border border-base-300">
                  <div className="card-body text-center">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-base-200 flex items-center justify-center mb-4 ${feature.color}`}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className="card-title text-lg justify-center">{feature.title}</h3>
                    <p className="text-base-content/70">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="card gradient-secondary text-white max-w-2xl mx-auto">
            <div className="card-body">
              <h2 className="card-title text-3xl justify-center mb-4">
                ¡Explora la Nueva Tienda!
              </h2>
              <p className="text-lg mb-6">
                Descubre todos los productos y funcionalidades mejoradas
              </p>
              <div className="card-actions justify-center">
                <Link href="/shop" className="btn btn-primary btn-lg btn-modern gap-2">
                  <ShoppingBag size={20} />
                  Ir a la Tienda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}