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
    disabled: boolean;
    defaultValue?: SelectFormValue | null;
    /* eslint-disable-next-line */
    control: Control<any>;
}

function FormSelect({ name, options, isLoading, placeholder, isClearable, control, disabled, defaultValue }: FormSelectProps) {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <Select
                    isDisabled={disabled}
                    defaultValue={defaultValue}
                    options={options}
                    isLoading={isLoading}
                    placeholder={placeholder}
                    isClearable={isClearable}
                    classNamePrefix="react-select form-control"
                    className="react-select-container"
                    styles={{
                        control: (base) => ({
                            ...base,
                            backgroundColor: "oklch(0.25 0.02 252.45)",
                            color: "#fff",
                            borderColor: "#374151",
                            minHeight: "2.6rem",
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: "oklch(0.25 0.02 252.45)",
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
                        input: (base) => ({
                            ...base,
                            color: "#fff",
                        }),
                    }}
                    isSearchable
                    onChange={option => field.onChange(option || null)}
                    value={field.value || null}
                />
            )}
        />
    )
}

export default FormSelect