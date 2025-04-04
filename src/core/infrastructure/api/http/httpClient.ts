export class HttpClient {
    private baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }
  
    async request<T>(
      endpoint: string,
      options: RequestInit = {}
    ): Promise<T> {
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
        });
  
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
  
        return response.json() as Promise<T>;
      } catch (error) {
        console.error("HTTP Error:", error);
        throw error;
      }
    }
  
    get<T>(endpoint: string, options?: RequestInit) {
      return this.request<T>(endpoint, { method: "GET", ...options });
    }
  
    post<T>(endpoint: string, body: any, options?: RequestInit) {
      return this.request<T>(endpoint, {
        method: "POST",
        body: body,
        ...options,
      });
    }
  
    put<T>(endpoint: string, body: unknown, options?: RequestInit) {
      return this.request<T>(endpoint, {
        method: "PUT",
        body: JSON.stringify(body),
        ...options,
      });
    }
  
    delete<T>(endpoint: string, options?: RequestInit) {
      return this.request<T>(endpoint, { method: "DELETE", ...options });
    }
  }
  