import { Department } from "../entities/department";
import { SelectFormValue } from "../entities/formsEntities";

export class FormsUtils{


    static transformDepartmentsToOptions(departments: Department[]): SelectFormValue[] {
        return departments.map(department => ({
            value: department.id,
            label: department.name
        }));
    }


};