import { GeographicInfoHttpClient } from "@/features/shared/infrastructure/api/geographic-info/geographicInfoHttpClient";
import { GeographicInfoRepositoryImpl } from "../../repositories/geographic-info/geographicInfoRepositoryImpl";
import { Department } from "@/features/shared/presentation/entities/department";
import { DepartmentsAdapter } from "@/features/shared/presentation/adapters/departmentsAdapter";

export class GetDepartmentsUseCase {

    private geographicInfoRepository = new GeographicInfoRepositoryImpl(new GeographicInfoHttpClient());

    async execute(): Promise<Department[]> {
        try {
            const response = await this.geographicInfoRepository.getDepartments();
            const departmentsList = response.departments.map((department) => {
                return DepartmentsAdapter.toUIEntity(department);
            });
            return departmentsList;
        } catch (error) {
            console.error("Error fetching departments:", error);
            throw error;
        }
    }


}