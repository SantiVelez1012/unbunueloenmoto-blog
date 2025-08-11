import { GetDepartmentsUseCase } from "@/features/shared/domain/use-cases/get-departments/getDepartmentsUseCase";
import { useEffect, useRef, useState } from "react";
import { FormsUtils } from "../../utils/formsUtils";
import { SelectFormValue } from "../../entities/formsEntities";

export function useGetDepartments() {
    const [departments, setDepartments] = useState<SelectFormValue[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const useCase = useRef(new GetDepartmentsUseCase());

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const response = await useCase.current.execute();
                const transformedDepartments = FormsUtils.transformDepartmentsToOptions(response);
                setDepartments(transformedDepartments);
            } catch (error: unknown) {
                console.error('Error al obtener departamentos:', error);
                setError('Error al cargar departamentos');
                setDepartments([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const retry = () => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const response = await useCase.current.execute();
                const transformedDepartments = FormsUtils.transformDepartmentsToOptions(response);
                setDepartments(transformedDepartments);
            } catch (error: unknown) {
                console.error('Error al obtener departamentos:', error);
                setError('Error al cargar departamentos');
                setDepartments([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    };

    return { departments, isLoading, error, retry };
};