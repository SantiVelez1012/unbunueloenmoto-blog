import { ProductListResponse } from "@/features/shop/infrastructure/entities/product-list/productsListResponse";
import { ProductsRepository } from "@/features/shop/infrastructure/repositories/productsRepository";



export class GetProductDetailsUseCase {
    constructor(private productRepository: ProductsRepository) {}

    async execute(productId: string): Promise<ProductListResponse | null> {
        if (!productId) {
            throw new Error('Product ID is required');
        }
        return await this.productRepository.getProductById(productId);
    }
}