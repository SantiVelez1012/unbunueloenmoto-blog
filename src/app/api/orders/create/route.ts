import { OrdersRepositoryImpl } from "@/features/shop/domain/repositories/ordersRepositoryImpl";
import { ClientResponse } from "@shopify/admin-api-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const repository = new OrdersRepositoryImpl();

    const body = await request.json();

    try {
        const response: ClientResponse = await repository.createOrder(body);
        return NextResponse.json({ status: 200, message: "Order created successfully", data: response.errors?.graphQLErrors });
    } catch (error) {
        return NextResponse.json({ status: 500, message: "Error creating order", error: error instanceof Error ? error.message : "Unknown error" });
    }

}