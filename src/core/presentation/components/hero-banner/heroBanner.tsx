import React from 'react'

function HeroBanner() {
    return (
        <div
            className="hero h-[600px] md:min-h-[700px]"
            style={{
                backgroundImage: "url(/imgs/hero-banner.jpg)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-amber-50">El Blog de Un Buñuelo en Moto</h1>
                    <p className="mb-5 text-amber-50">
                        Aquí próximamente encontrarás diversas páginas relacionadas a las motos, a los viajes y temas variados!!, espera mucho más!!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner