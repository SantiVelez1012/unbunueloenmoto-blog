export abstract class LocalStorageRepository {
    abstract save<T>(key: string, data: T): void;
    abstract get<T>(key: string): T | null;
}