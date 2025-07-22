import { ProductsRepositoryImpl } from "@/features/shop/domain/repositories/productsRepositoryImpl";
import { GetAllProductsUseCase } from "@/features/shop/domain/use-cases/get-all-products-use-case/getAllProductsUseCase";
import { NextResponse } from "next/server";

export async function GET() {
  const productsRepository = new ProductsRepositoryImpl();
  try {
    const useCase = new GetAllProductsUseCase(productsRepository);
    const data = await useCase.execute(20);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}