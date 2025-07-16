import { ProductsRepositoryImpl } from "@/features/shop/domain/repositories/productsRepositoryImpl";
import { GetProductDetailsUseCase } from "@/features/shop/domain/use-cases/get-product-details-use-case/getProductDetailsUseCase";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  try {
    const id = await Promise.resolve(context.params.id);
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
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}