import { OrdersRepositoryImpl } from "@/features/shop/domain/repositories/ordersRepositoryImpl";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){

    const repository = new OrdersRepositoryImpl();

    const body = await request.json();

    try{
        const response = await repository.createOrder(body);
        console.log("Order created successfully:", response);
        return NextResponse.json({ status: 200, message: "Order created successfully", data: response });
    }catch (error) {
        return NextResponse.json({ status: 500, message: "Error creating order", error: error instanceof Error ? error.message : "Unknown error" });
    }

}