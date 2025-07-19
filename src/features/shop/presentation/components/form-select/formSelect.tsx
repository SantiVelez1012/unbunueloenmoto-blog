"use client";

import { SelectFormValue } from '@/features/shared/presentation/entities/formsEntities';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Select from 'react-select';

type FormSelectProps = {
    name: string;
    options: SelectFormValue[];
    isLoading?: boolean;
    placeholder?: string;
    isClearable?: boolean;
    /* eslint-disable-next-line */
    control: Control<any>;
}

function FormSelect({ name, options, isLoading, placeholder, isClearable, control }: FormSelectProps) {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <Select
                    {...field}
                    options={
                        options
                    }
                    isLoading={isLoading}
                    placeholder={placeholder}
                    isClearable={isClearable}
                    classNamePrefix="react-select form-control"
                    className="react-select-container"
                    styles={{
                        control: (base) => ({
                            ...base,
                            backgroundColor: "oklch(0.25 0.02 252.45)", // Tailwind bg-base-200
                            color: "#fff",
                            borderColor: "#374151", // Tailwind border-base-300
                            minHeight: "2.6rem",
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: "oklch(0.25 0.02 252.45)", // Tailwind bg-base-300
                            color: "#fff",
                        }),
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? "#4b5563" : "oklch(0.25 0.02 252.45)",
                            color: "#fff",
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: "#fff",
                        }),
                        placeholder: (base) => ({
                            ...base,
                            color: "#fff",
                        }),
                    }}
                    isSearchable
                    onChange={(option) => {field.onChange(option ? option : "");}}
                    value={options.find(opt => opt === field.value) || null}
                />
            )}
        />
    )
}

export default FormSelect