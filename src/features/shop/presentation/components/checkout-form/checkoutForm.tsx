"use client";

import { useGetDepartments } from '@/features/shared/presentation/hooks/use-get-departments/useGetDepartments';
import React, { useState } from 'react'

export default function CheckoutForm() {

    const { departments, isLoading } = useGetDepartments();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'Colombia',
        phone: '',
        additionalNotes: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-bold">Información de contacto</h2>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Correo electrónico</span>
                </label>
                <input
                    type="email"
                    placeholder="tucorreo@email.com"
                    className="input input-bordered w-full"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <h2 className="text-2xl font-bold">Dirección de envío</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="input input-bordered w-full"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    className="input input-bordered w-full"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>

            <input
                type="text"
                placeholder="Dirección"
                className="input input-bordered w-full"
                name="address"
                value={formData.address}
                onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Ciudad"
                    className="input input-bordered w-full"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Departamento"
                    className="input input-bordered w-full"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="País"
                    className="input input-bordered w-full"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                />
            </div>

            <input
                type="text"
                placeholder="Teléfono"
                className="input input-bordered w-full"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Notas Adicionales"
                className="w-full textarea textarea-bordered"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
            />

            <div className="mt-6">
                <button className="btn btn-primary w-full">Finalizar Pedido</button>
            </div>
        </section>
    )
}
