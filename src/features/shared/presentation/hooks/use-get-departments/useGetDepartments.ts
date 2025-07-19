import { GetDepartmentsUseCase } from "@/features/shared/domain/use-cases/get-departments/getDepartmentsUseCase";
import { useEffect, useRef, useState } from "react";
import { FormsUtils } from "../../utils/formsUtils";
import { SelectFormValue } from "../../entities/formsEntities";

export function useGetDepartments() {

    const [departments, setDepartments] = useState<SelectFormValue[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const useCase = useRef(new GetDepartmentsUseCase());

    useEffect(() => {


        const fetchData = async () => {
            try {
                useCase.current.execute().then((response) => {
                    setDepartments(FormsUtils.transformDepartmentsToOptions(response));
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