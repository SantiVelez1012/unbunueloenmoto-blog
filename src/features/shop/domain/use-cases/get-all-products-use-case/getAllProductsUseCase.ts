import { ProductListResponse } from "@/features/shop/infrastructure/entities/product-list/productsListResponse";
import { ProductsRepositoryImpl } from "../../repositories/productsRepositoryImpl";
import { ProductsRepository } from "@/features/shop/infrastructure/repositories/productsRepository";

export class GetAllProductsUseCase{

    private productsRepository: ProductsRepository = new ProductsRepositoryImpl(); 

    constructor() {}

    async execute(first: number = 20, after?: string): Promise<ProductListResponse> { 
        return this.productsRepository.getAllProducts(first, after)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                throw error; 
            });
    }

}