import { GeographicInfoHttpClient } from "@/features/shared/infrastructure/api/geographic-info/geographicInfoHttpClient";
import { GeographicInfoRepositoryImpl } from "../../repositories/geographic-info/geographicInfoRepositoryImpl";
import { Department } from "@/features/shared/presentation/entities/department";

export class GetDepartmentsUseCase {

    private geographicInfoRepository = new GeographicInfoRepositoryImpl(new GeographicInfoHttpClient());

    async execute(): Promise<Department[]> {
        try {
            const response = await this.geographicInfoRepository.getDepartments();
            return response.departments;
        } catch (error) {
            console.error("Error fetching departments:", error);
            throw error;
        }
    }


}