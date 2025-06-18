import { LocalStorageRepository } from "../../infrastructure/repositories/localStorageRepository";

export class CartLocalStorageRepositoryImpl implements LocalStorageRepository {

    private readonly CART_KEY = process.env.NEXT_PUBLIC_CART_STORAGE_KEY!;

    save<T>(data: T): void {
        localStorage.setItem(this.CART_KEY, JSON.stringify(data));
    }

    get<T>(): T | null {
        if (typeof window === "undefined") return null;
        const data = localStorage.getItem(this.CART_KEY);
        return data ? JSON.parse(data) : null;
    }

    clear(): void {
        localStorage.removeItem(this.CART_KEY);
    }
}