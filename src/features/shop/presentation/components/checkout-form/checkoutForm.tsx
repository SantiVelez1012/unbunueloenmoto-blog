"use client";

import { useGetDepartments } from '@/features/shared/presentation/hooks/use-get-departments/useGetDepartments';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    additionalNotes: string;
}

export default function CheckoutForm() {

    const { departments, isLoading } = useGetDepartments();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();


    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Form data updated:', watch);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-bold">Información de contacto</h2>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Correo electrónico</span>
                </label>
                <input
                    type="email"
                    defaultValue=""
                    placeholder="tucorreo@email.com"
                    className="input input-bordered w-full"
                    {...register("email", { required: true })}
                    onChange={handleChange}
                />
            </div>

            <h2 className="text-2xl font-bold">Dirección de envío</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="input input-bordered w-full"
                    {...register("firstName", { required: true })}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    className="input input-bordered w-full"
                    {...register("lastName", { required: true })}
                    onChange={handleChange}
                />
            </div>

            <input
                type="text"
                placeholder="Dirección"
                className="input input-bordered w-full"
                {...register("address", { required: true })}
                onChange={handleChange}
            />

            <select id="state" {...register("state", { required: true })} onChange={() => {handleChange}} className="select select-bordered w-full">
                <option value="">Seleccione un departamento</option>
                {isLoading ? (
                    <option disabled>Cargando...</option>
                ) : (
                    departments!.map(department => (
                        <option key={department.id} value={department.name}>
                            {department.name}
                        </option>
                    ))
                )}
            </select>

            <input
                type="text"
                placeholder="Ciudad"
                className="input input-bordered w-full"
                {...register("city", { required: true })}
                onChange={handleChange}
            />


            <input
                type="text"
                placeholder="Celular"
                className="input input-bordered w-full"
                {...register("phone", { required: true })}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Notas Adicionales"
                className="w-full textarea textarea-bordered"
                {...register("additionalNotes", { required: true })}
                onChange={handleChange}
            />

            <div className="mt-6">
                <button type='submit' className="btn btn-primary w-full">Finalizar Pedido</button>
            </div>
        </form>
    )
}
