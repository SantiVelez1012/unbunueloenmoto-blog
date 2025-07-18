import { HttpClient } from "../httpClient";
import { DepartmentsResponse } from "../../entities/departmentsResponse";
import { Department } from "@/features/shared/presentation/entities/department";

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

};