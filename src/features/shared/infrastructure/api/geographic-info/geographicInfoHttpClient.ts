import { HttpClient } from "../httpClient";
import { DepartmentsResponse } from "../../entities/departmentsResponse";

const COLOMBIA_API_URL = `${process.env.NEXT_PUBLIC_COLOMBIA_API_URL}`;

const colombiaApiClient = new HttpClient(COLOMBIA_API_URL);


export class GeographicInfoHttpClient {

    private client: HttpClient;

    constructor() {
        this.client = colombiaApiClient;
    }

    async getDepartments(): Promise<DepartmentsResponse> {
        const response: DepartmentsResponse = await this.client.get('Department');
        return response;
    };

};