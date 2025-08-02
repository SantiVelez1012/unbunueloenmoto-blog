import { ProductsRepositoryImpl } from "@/features/shop/domain/repositories/productsRepositoryImpl";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const repository = new ProductsRepositoryImpl();

    try {
        const body = await request.json();
        const response = await repository.getProductsVariantIds(body.products);

        return NextResponse.json({
            status: 200,
            message: "Product variant IDs resolved successfully",
            data: response
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Error resolving product variant IDs",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }

}