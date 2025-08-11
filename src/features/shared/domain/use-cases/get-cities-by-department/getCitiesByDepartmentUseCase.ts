import { City } from "@/features/shared/presentation/entities/city";

export class GetCitiesByDepartmentUseCase {
    async execute(departmentId: string): Promise<City[]> {
        try {
            // Try to make actual API call first
            const response = await fetch(`/api/departments/${departmentId}/cities`, {
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
            console.warn('API not available, using mock data for cities');
            return this.getMockCities(departmentId);
        } catch (error) {
            console.warn('Error fetching cities from API, using mock data:', error);
            return this.getMockCities(departmentId);
        }
    }

    private getMockCities(departmentId: string): City[] {
        const mockCities: Record<string, City[]> = {
            '1': [ // Antioquia
                { id: 1, name: 'Medellín', departmentId: 1 },
                { id: 2, name: 'Bello', departmentId: 1 },
                { id: 3, name: 'Itagüí', departmentId: 1 },
                { id: 4, name: 'Envigado', departmentId: 1 },
                { id: 5, name: 'Sabaneta', departmentId: 1 },
                { id: 6, name: 'La Estrella', departmentId: 1 },
                { id: 7, name: 'Copacabana', departmentId: 1 },
            ],
            '2': [ // Cundinamarca
                { id: 8, name: 'Bogotá', departmentId: 2 },
                { id: 9, name: 'Soacha', departmentId: 2 },
                { id: 10, name: 'Zipaquirá', departmentId: 2 },
                { id: 11, name: 'Chía', departmentId: 2 },
                { id: 12, name: 'Cajicá', departmentId: 2 },
                { id: 13, name: 'Facatativá', departmentId: 2 },
                { id: 14, name: 'Madrid', departmentId: 2 },
            ],
            '3': [ // Valle del Cauca
                { id: 15, name: 'Cali', departmentId: 3 },
                { id: 16, name: 'Palmira', departmentId: 3 },
                { id: 17, name: 'Buenaventura', departmentId: 3 },
                { id: 18, name: 'Tulua', departmentId: 3 },
                { id: 19, name: 'Cartago', departmentId: 3 },
                { id: 20, name: 'Buga', departmentId: 3 },
            ],
            '4': [ // Atlántico
                { id: 21, name: 'Barranquilla', departmentId: 4 },
                { id: 22, name: 'Soledad', departmentId: 4 },
                { id: 23, name: 'Malambo', departmentId: 4 },
                { id: 24, name: 'Sabanagrande', departmentId: 4 },
                { id: 25, name: 'Puerto Colombia', departmentId: 4 },
            ],
            '5': [ // Santander
                { id: 26, name: 'Bucaramanga', departmentId: 5 },
                { id: 27, name: 'Floridablanca', departmentId: 5 },
                { id: 28, name: 'Girón', departmentId: 5 },
                { id: 29, name: 'Piedecuesta', departmentId: 5 },
                { id: 30, name: 'Barrancabermeja', departmentId: 5 },
            ],
        };

        return mockCities[departmentId] || [];
    }
}