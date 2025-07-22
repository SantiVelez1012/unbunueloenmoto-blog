import { Department } from "../entities/department";

export class DepartmentsAdapter {

    static toUIEntity(department: Department): Department {
        return {
            id: department.id,
            name: department.name
        };
    }


};