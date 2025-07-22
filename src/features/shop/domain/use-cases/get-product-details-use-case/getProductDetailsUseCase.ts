
import { ProductDetailsResponse } from "@/features/shop/infrastructure/entities/product-details/productDetailsResponse";
import { ProductsRepository } from "@/features/shop/infrastructure/repositories/productsRepository";


export class GetProductDetailsUseCase {
    constructor(private productRepository: ProductsRepository) {}

    async execute(productId: string): Promise<ProductDetailsResponse> {
        if (!productId) {
            throw new Error('Product ID is required');
        }
        try {
            const product = await this.productRepository.getProductById(productId);
            
            if (!product) {
                throw new Error(`Product with ID ${productId} not found`);
            }

            return product;
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Failed to fetch product details');
        }
    }
}