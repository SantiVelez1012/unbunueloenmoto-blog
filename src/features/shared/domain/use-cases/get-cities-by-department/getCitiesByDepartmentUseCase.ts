import { GeographicInfoHttpClient } from "@/features/shared/infrastructure/api/geographic-info/geographicInfoHttpClient";
import { GeographicInfoRepositoryImpl } from "../../repositories/geographic-info/geographicInfoRepositoryImpl";
import { CitiesAdapter } from "@/features/shared/presentation/adapters/citiesAdapter";
import { City } from "@/features/shared/presentation/entities/city";

export class GetCitiesByDepartmentUseCase {

    private geographicInfoRepository = new GeographicInfoRepositoryImpl(new GeographicInfoHttpClient());

    async execute(stateId: string): Promise<City[]> {
        try {
            const response = await this.geographicInfoRepository.getCitiesByDepartment(stateId);
            const citiesList = response.cities.map((city) => {
                return CitiesAdapter.toUIEntity(city);
            });
            return citiesList;
        } catch (error) {
            console.error("Error fetching cities:", error);
            throw error;
        }
    }


}