'use client';

import React, { useEffect, useState } from 'react';
import { useGetDepartments } from '@/features/shared/presentation/hooks/use-get-departments/useGetDepartments';
import { useGetCitiesByDepartment } from '@/features/shared/presentation/hooks/use-get-cities-by-department/useGetCitiesByDepartment';
import { SelectFormValue } from '@/features/shared/presentation/entities/formsEntities';
import { Loader2, AlertCircle } from 'lucide-react';

interface LocationSelectorProps {
  selectedDepartment: SelectFormValue | null;
  selectedCity: SelectFormValue | null;
  onDepartmentChange: (department: SelectFormValue | null) => void;
  onCityChange: (city: SelectFormValue | null) => void;
  departmentError?: string;
  cityError?: string;
  disabled?: boolean;
}

export default function LocationSelector({
  selectedDepartment,
  selectedCity,
  onDepartmentChange,
  onCityChange,
  departmentError,
  cityError,
  disabled = false
}: LocationSelectorProps) {
  const { departments, isLoading: departmentsLoading } = useGetDepartments();
  const { cities, isLoading: citiesLoading, getCitiesByDepartment } = useGetCitiesByDepartment();
  const [citiesError, setCitiesError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDepartment?.value) {
      setCitiesError(null);
      getCitiesByDepartment(selectedDepartment.value)
        .catch(() => {
          setCitiesError('Error al cargar ciudades');
        });
      onCityChange(null); // Reset city when department changes
    }
  }, [selectedDepartment, getCitiesByDepartment, onCityChange]);

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = departments.find(d => d.value === e.target.value);
    onDepartmentChange(dept || null);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = cities.find(c => c.value === e.target.value);
    onCityChange(city || null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Department Selector */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Departamento *</span>
          {departmentsLoading && (
            <span className="label-text-alt">
              <Loader2 size={14} className="animate-spin" />
            </span>
          )}
        </label>
        <select
          className={`select select-bordered w-full ${departmentError ? 'select-error' : ''}`}
          disabled={disabled || departmentsLoading}
          value={selectedDepartment?.value || ''}
          onChange={handleDepartmentChange}
        >
          <option value="">
            {departmentsLoading ? 'Cargando departamentos...' : 'Selecciona un departamento'}
          </option>
          {departments.map((dept) => (
            <option key={dept.value} value={dept.value}>
              {dept.label}
            </option>
          ))}
        </select>
        {departmentError && (
          <label className="label">
            <span className="label-text-alt text-error flex items-center gap-1">
              <AlertCircle size={14} />
              {departmentError}
            </span>
          </label>
        )}
      </div>

      {/* City Selector */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Ciudad *</span>
          {citiesLoading && (
            <span className="label-text-alt">
              <Loader2 size={14} className="animate-spin" />
            </span>
          )}
        </label>
        <select
          className={`select select-bordered w-full ${cityError ? 'select-error' : ''}`}
          disabled={disabled || !selectedDepartment?.value || citiesLoading}
          value={selectedCity?.value || ''}
          onChange={handleCityChange}
        >
          <option value="">
            {!selectedDepartment?.value 
              ? 'Primero selecciona un departamento'
              : citiesLoading 
              ? 'Cargando ciudades...'
              : citiesError
              ? 'Error al cargar ciudades'
              : 'Selecciona tu ciudad'
            }
          </option>
          {cities.map((city) => (
            <option key={city.value} value={city.value}>
              {city.label}
            </option>
          ))}
        </select>
        {(cityError || citiesError) && (
          <label className="label">
            <span className="label-text-alt text-error flex items-center gap-1">
              <AlertCircle size={14} />
              {cityError || citiesError}
            </span>
          </label>
        )}
      </div>
    </div>
  );
}