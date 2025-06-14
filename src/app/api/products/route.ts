import { GetAllProductsUseCase } from "@/features/shop/domain/use-cases/get-all-products-use-case/getAllProductsUseCase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const useCase = new GetAllProductsUseCase();
    //TODO: Change the number of products to fetch, for a property from ui
    const data = await useCase.execute(20);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}