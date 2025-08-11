"use client";

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CheckoutFormInputs } from '../../models/checkoutModel';
import { SelectFormValue } from '@/features/shared/presentation/entities/formsEntities';
import LocationSelector from '../location-selector/locationSelector';

type CheckoutFormProps = {
    submit: (data: CheckoutFormInputs) => void;
};

export default function CheckoutForm({ submit }: CheckoutFormProps) {
    const [selectedDepartment, setSelectedDepartment] = useState<SelectFormValue | null>(null);
    const [selectedCity, setSelectedCity] = useState<SelectFormValue | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormInputs>();

    const onSubmit: SubmitHandler<CheckoutFormInputs> = async (data) => {
        if (!selectedDepartment || !selectedCity) {
            return;
        }

        setIsSubmitting(true);
        try {
            const formData: CheckoutFormInputs = {
                ...data,
                state: selectedDepartment,
                city: selectedCity
            };
            await submit(formData);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getDepartmentError = () => {
        return !selectedDepartment ? 'Este campo es obligatorio' : undefined;
    };

    const getCityError = () => {
        return selectedDepartment && !selectedCity ? 'Este campo es obligatorio' : undefined;
    };

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Información de contacto</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Correo electrónico *</span>
                        </label>
                        <input
                            type="email"
                            placeholder="tucorreo@email.com"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Ingresa un correo electrónico válido"
                                }
                            })}
                        />
                        {errors.email && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.email.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="divider">Dirección de envío</div>

                    {/* Name fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nombre *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                className="input input-bordered w-full"
                                {...register("firstName", {
                                    required: "Este campo es obligatorio"
                                })}
                            />
                            {errors.firstName && (
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.firstName.message}</span>
                                </label>
                            )}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Apellido *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tu apellido"
                                className="input input-bordered w-full"
                                {...register("lastName", {
                                    required: "Este campo es obligatorio"
                                })}
                            />
                            {errors.lastName && (
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors.lastName.message}</span>
                                </label>
                            )}
                        </div>
                    </div>

                    {/* Address */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dirección *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Calle, carrera, número, apartamento"
                            className="input input-bordered w-full"
                            {...register("address", { required: "Este campo es obligatorio" })}
                        />
                        {errors.address && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.address.message}</span>
                            </label>
                        )}
                    </div>

                    {/* Country */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">País *</span>
                        </label>
                        <input
                            type="text"
                            value="Colombia"
                            className="input input-bordered w-full"
                            {...register("country", { required: true })}
                            readOnly
                        />
                    </div>

                    {/* Location Selector */}
                    <LocationSelector
                        selectedDepartment={selectedDepartment}
                        selectedCity={selectedCity}
                        onDepartmentChange={setSelectedDepartment}
                        onCityChange={setSelectedCity}
                        departmentError={getDepartmentError()}
                        cityError={getCityError()}
                        disabled={isSubmitting}
                    />

                    {/* Phone */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Celular *</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="3001234567"
                            className="input input-bordered w-full"
                            {...register("phone", {
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^3\d{9}$/,
                                    message: "Ingresa un número de celular colombiano válido (10 dígitos, empieza por 3)"
                                }
                            })}
                        />
                        {errors.phone && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.phone.message}</span>
                            </label>
                        )}
                    </div>

                    {/* Additional notes */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Notas adicionales</span>
                        </label>
                        <textarea
                            placeholder="Instrucciones especiales para la entrega..."
                            className="textarea textarea-bordered w-full"
                            rows={3}
                            {...register("additionalNotes")}
                        />
                    </div>

                    {/* Submit button */}
                    <div className="form-control mt-8">
                        <button 
                            type="submit" 
                            className={`btn btn-primary btn-lg btn-modern w-full ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting || !selectedDepartment || !selectedCity}
                        >
                            {isSubmitting ? 'Procesando...' : 'Finalizar Pedido'}
                        </button>
                        {(!selectedDepartment || !selectedCity) && (
                            <label className="label">
                                <span className="label-text-alt text-warning text-center w-full">
                                    Por favor completa todos los campos obligatorios
                                </span>
                            </label>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}