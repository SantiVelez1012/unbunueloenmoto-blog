import { GetDepartmentsUseCase } from "@/features/shared/domain/use-cases/get-departments/getDepartmentsUseCase";
import { useEffect, useRef, useState } from "react";
import { Department } from "../../entities/department";

export function useGetDepartments() {

    const [departments, setDepartments] = useState<Department[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const useCase = useRef(new GetDepartmentsUseCase());





    useEffect(() => {


        const fetchData = async () => {
            try {
                useCase.current.execute().then((response) => {
                    setDepartments(response);
                    console.log('Departamentos obtenidos:', response);
                    console.log('Total de departamentos:', departments);
                }).finally(() => {
                    setIsLoading(false);
                });
            }
            catch (error: unknown) {
                console.error('Error al obtener departamentos:', error);
                setDepartments([]);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [useCase]);

    return { departments, isLoading };

};