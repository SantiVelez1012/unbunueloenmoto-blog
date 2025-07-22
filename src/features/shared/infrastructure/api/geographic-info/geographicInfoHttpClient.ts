import { HttpClient } from "../httpClient";
import { DepartmentsResponse } from "../../entities/departmentsResponse";
import { Department } from "@/features/shared/presentation/entities/department";
import { CitiesResponse } from "../../entities/citiesResponse";
import { City } from "@/features/shared/presentation/entities/city";

const COLOMBIA_API_URL = `${process.env.NEXT_PUBLIC_COLOMBIA_API_URL}`;

const colombiaApiClient = new HttpClient(COLOMBIA_API_URL);


export class GeographicInfoHttpClient {

    private client: HttpClient;

    constructor() {
        this.client = colombiaApiClient;
    }

    async getDepartments(): Promise<DepartmentsResponse> {
        const result: Department[] = await this.client.get('Department');
        const response: DepartmentsResponse = {
            departments: result
        };
        return response;
    };

    async getCitiesByDepartment(departmentId: string): Promise<CitiesResponse> {
        const result: City[] = await this.client.get(`Department/${departmentId}/cities`);
        const response = {
            cities: result
        }
        return response;

    }

};