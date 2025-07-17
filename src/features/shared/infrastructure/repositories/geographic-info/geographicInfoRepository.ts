import { DepartmentsResponse } from "../../entities/departmentsResponse";

export abstract class GeographicInfoRepository {
    abstract getDepartments(): Promise<DepartmentsResponse>;
}