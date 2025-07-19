"use client";

import { useGetDepartments } from '@/features/shared/presentation/hooks/use-get-departments/useGetDepartments';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormSelect from '../form-select/formSelect';
import { SelectFormValue } from '@/features/shared/presentation/entities/formsEntities';

type FormInputs = {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: SelectFormValue;
    postalCode: string;
    country: string;
    phone: string;
    additionalNotes: string;
}

export default function CheckoutForm() {

    const { departments, isLoading } = useGetDepartments();

    const { control, register, handleSubmit, watch, formState: { errors }, getValues } = useForm<FormInputs>();


    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

    const handleChange = () => {
        console.log('Form data updated:', watch("state"));
    };

    const stateValue = watch("state");

    useEffect(() => {
        console.log('State changed:', getValues("state"));
    }, [stateValue, getValues]);


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
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Ingresa un correo electrónico válido"
                        }
                    })}
                    onChange={handleChange}
                />
                {errors.email && (
                    <span className="text-error text-sm mt-1">{errors.email.message ? "Ingresa un correo electrónico válido" : "Este campo es obligatorio"}</span>
                )}
            </div>

            <h2 className="text-2xl font-bold">Dirección de envío</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Nombre*"
                    className="form-control input input-bordered w-full"
                    {...register("firstName", { required: true })}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Apellido*"
                    className="form-control input input-bordered w-full"
                    {...register("lastName", { required: true })}
                    onChange={handleChange}
                />
            </div>

            <input
                type="text"
                placeholder="Dirección*"
                className="form-control input input-bordered w-full"
                {...register("address", { required: true })}
                onChange={handleChange}
            />
            <div>
                <FormSelect name='state' control={control} options={departments} isLoading={isLoading} placeholder='Selecciona un departamento...*' />
                {errors.state && (
                    <span className="text-error text-sm mt-1">Este campo es obligatorio</span>
                )}
            </div>

            <input
                type="text"
                placeholder="Ciudad*"
                className="input input-bordered w-full"
                {...register("city", { required: true })}
                onChange={handleChange}
            />


            <input
                type="text"
                placeholder="Celular*"
                className="input input-bordered w-full"
                {...register("phone", { required: true })}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Notas Adicionales*"
                className="w-full input input-bordered"
                {...register("additionalNotes", { required: true })}
                onChange={handleChange}
            />

            <div className="mt-6">
                <button type='submit' className="btn btn-primary w-full">Finalizar Pedido</button>
            </div>
        </form>
    )
}
