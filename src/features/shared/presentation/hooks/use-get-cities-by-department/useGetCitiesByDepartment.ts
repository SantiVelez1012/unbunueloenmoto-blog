import { GetCitiesByDepartmentUseCase } from "@/features/shared/domain/use-cases/get-cities-by-department/getCitiesByDepartmentUseCase";
import { useState, useCallback, useRef } from "react";
import { FormsUtils } from "../../utils/formsUtils";
import { SelectFormValue } from "../../entities/formsEntities";

export function useGetCitiesByDepartment() {

    const [cities, setCities] = useState<SelectFormValue[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const useCase = useRef(new GetCitiesByDepartmentUseCase());


    const getCitiesByDepartment = useCallback(async (stateId: string): Promise<void> => {
        try{
            setIsLoading(true);
            if (!useCase.current) throw new Error("Use case not initialized");
            const response = await useCase.current.execute(stateId);
            setCities(FormsUtils.transformCitiesToOptions(response));
        }catch (error) {
            console.error("Error fetching cities:", error);
            throw error;
        };
        setIsLoading(false);
    }, []);

    return { getCitiesByDepartment, isLoading, cities };


}