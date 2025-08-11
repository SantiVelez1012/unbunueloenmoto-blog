import { GetCitiesByDepartmentUseCase } from "@/features/shared/domain/use-cases/get-cities-by-department/getCitiesByDepartmentUseCase";
import { useState, useCallback, useRef } from "react";
import { FormsUtils } from "../../utils/formsUtils";
import { SelectFormValue } from "../../entities/formsEntities";

export function useGetCitiesByDepartment() {
    const [cities, setCities] = useState<SelectFormValue[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const useCase = useRef(new GetCitiesByDepartmentUseCase());

    const getCitiesByDepartment = useCallback(async (stateId: string): Promise<void> => {
        try {
            setIsLoading(true);
            setError(null);
            setCities([]); // Clear previous cities
            
            if (!useCase.current) throw new Error("Use case not initialized");
            
            const response = await useCase.current.execute(stateId);
            const transformedCities = FormsUtils.transformCitiesToOptions(response);
            setCities(transformedCities);
        } catch (error) {
            console.error("Error fetching cities:", error);
            setError('Error al cargar ciudades');
            setCities([]);
            throw error; // Re-throw to allow component-level error handling
        } finally {
            setIsLoading(false);
        }
    }, []);

    const clearCities = useCallback(() => {
        setCities([]);
        setError(null);
    }, []);

    return { 
        getCitiesByDepartment, 
        isLoading, 
        cities, 
        error,
        clearCities
    };
}