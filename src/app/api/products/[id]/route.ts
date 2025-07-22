import { ProductsRepositoryImpl } from "@/features/shop/domain/repositories/productsRepositoryImpl";
import { GetProductDetailsUseCase } from "@/features/shop/domain/use-cases/get-product-details-use-case/getProductDetailsUseCase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const productsRepository = new ProductsRepositoryImpl();
    const useCase = new GetProductDetailsUseCase(productsRepository);
    const params = await context.params;
    const data = await useCase.execute(params.id);

    if (!data) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
}