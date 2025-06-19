import { ProductsRepositoryImpl } from "@/features/shop/domain/repositories/productsRepositoryImpl";
import { GetProductDetailsUseCase } from "@/features/shop/domain/use-cases/get-product-details-use-case/getProductDetailsUseCase";
import { NextResponse } from "next/server";

export async function GET(
  { params }: { params: { id: string } }
) {
  const productsRepository = new ProductsRepositoryImpl();
  try {
    const useCase = new GetProductDetailsUseCase(productsRepository);
    const data = await useCase.execute(params.id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}