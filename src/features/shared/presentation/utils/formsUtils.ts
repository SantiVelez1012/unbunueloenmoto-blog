import { City } from "../entities/city";
import { Department } from "../entities/department";
import { SelectFormValue } from "../entities/formsEntities";

export class FormsUtils{


    static transformDepartmentsToOptions(departments: Department[]): SelectFormValue[] {
        return departments.map(department => ({
            value: `${department.id}`,
            label: department.name
        }));
    }

    static transformCitiesToOptions(cities: City[]): SelectFormValue[] {
        const citiesList = cities.map(city => ({
            value: `${city.id}`,
            label: city.name
        }));
        return citiesList;
    }


};