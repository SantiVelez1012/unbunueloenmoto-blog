import { Department } from "@/features/shared/presentation/entities/department";

export class GetDepartmentsUseCase {
    async execute(): Promise<Department[]> {
        try {
            // Try to make actual API call first
            const response = await fetch('/api/departments', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            }
            
            // Fallback to mock data if API is not available
            console.warn('API not available, using mock data for departments');
            return this.getMockDepartments();
        } catch (error) {
            console.warn('Error fetching departments from API, using mock data:', error);
            return this.getMockDepartments();
        }
    }

    private getMockDepartments(): Department[] {
        return [
            { id: 1, name: 'Antioquia' },
            { id: 2, name: 'Cundinamarca' },
            { id: 3, name: 'Valle del Cauca' },
            { id: 4, name: 'Atlántico' },
            { id: 5, name: 'Santander' },
            { id: 6, name: 'Bolívar' },
            { id: 7, name: 'Córdoba' },
            { id: 8, name: 'Norte de Santander' },
            { id: 9, name: 'Tolima' },
            { id: 10, name: 'Huila' },
            { id: 11, name: 'Nariño' },
            { id: 12, name: 'Meta' },
            { id: 13, name: 'Caldas' },
            { id: 14, name: 'Risaralda' },
            { id: 15, name: 'Quindío' },
        ];
    }
}