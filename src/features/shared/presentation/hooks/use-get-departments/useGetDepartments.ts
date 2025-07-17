import { GetDepartmentsUseCase } from "@/features/shared/domain/use-cases/get-departments/getDepartmentsUseCase";
import { useEffect, useRef, useState } from "react";
import { Department } from "../../entities/department";

export function useGetDepartments() {

    const [departments, setDepartments] = useState<Department[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const useCase = useRef(new GetDepartmentsUseCase());

    useEffect(() => {
        useCase.current.execute().then((response) => {
            setDepartments(response);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return { departments, isLoading };

};