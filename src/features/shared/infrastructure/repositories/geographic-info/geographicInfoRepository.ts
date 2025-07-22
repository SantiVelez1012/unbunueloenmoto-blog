import { CitiesResponse } from "../../entities/citiesResponse";
import { DepartmentsResponse } from "../../entities/departmentsResponse";

export abstract class GeographicInfoRepository {
    abstract getDepartments(): Promise<DepartmentsResponse>;
    abstract getCitiesByDepartment(departmentId: string): Promise<CitiesResponse>;
}