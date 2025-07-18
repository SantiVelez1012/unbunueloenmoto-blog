import { GeographicInfoHttpClient } from "@/features/shared/infrastructure/api/geographic-info/geographicInfoHttpClient";
import { DepartmentsResponse } from "@/features/shared/infrastructure/entities/departmentsResponse";
import { GeographicInfoRepository } from "@/features/shared/infrastructure/repositories/geographic-info/geographicInfoRepository";

export class GeographicInfoRepositoryImpl implements GeographicInfoRepository {

    private geographicInfoHttpClient: GeographicInfoHttpClient;

    constructor(contentfulHttpClient: GeographicInfoHttpClient) {
        this.geographicInfoHttpClient = contentfulHttpClient;
    }

    getDepartments(): Promise<DepartmentsResponse> {
        const response = this.geographicInfoHttpClient.getDepartments().then((response) => {
            return response;
        });
        return response;
    }

};