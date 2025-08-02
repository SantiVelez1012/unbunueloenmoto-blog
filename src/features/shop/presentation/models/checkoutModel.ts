import { SelectFormValue } from "@/features/shared/presentation/entities/formsEntities";

export interface CheckoutFormInputs{
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: SelectFormValue;
    state: SelectFormValue;
    country: string;
    phone: string;
    additionalNotes: string;
}

export interface CheckoutModel {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    province: string;
    country: string;
    phone: string;
}