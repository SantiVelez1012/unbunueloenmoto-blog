import { ProductsRepositoryImpl } from "@/features/shop/domain/repositories/productsRepositoryImpl";
import { GetProductDetailsUseCase } from "@/features/shop/domain/use-cases/get-product-details-use-case/getProductDetailsUseCase";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  const id = await Promise.resolve(context.params.id);

  console.log("Fetching product with ID:", id);

  try {
    const productsRepository = new ProductsRepositoryImpl();
    const useCase = new GetProductDetailsUseCase(productsRepository);
    const data = await useCase.execute(id);

    if (!data) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}