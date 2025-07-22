import { City } from "../entities/city";

export class CitiesAdapter {

    static toUIEntity(department: City): City {
        return {
            id: department.id,
            name: department.name,
            departmentId: department.departmentId
        };
    }


};