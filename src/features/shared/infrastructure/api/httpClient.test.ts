import { HttpClient } from './httpClient';

global.fetch = jest.fn();

describe('HttpClient', () => {
  let httpClient: HttpClient;
  const baseUrl = 'https://api.example.com';
  const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    httpClient = new HttpClient(baseUrl);
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('creates an instance with the provided base URL', () => {
      expect(httpClient).toBeInstanceOf(HttpClient);
      expect(httpClient['baseUrl']).toBe(baseUrl);
    });
  });

  describe('request', () => {
    it('makes a successful request with default options', async () => {
      const mockData = { id: 1, name: 'Test' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      const result = await httpClient.request<typeof mockData>('/users');

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/users`,
        expect.objectContaining({
          headers: {
            'Content-Type': 'application/json',
          },
        })
      );
      expect(result).toEqual(mockData);
    });

    it('makes a request with custom options', async () => {
      const mockData = { success: true };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      const customOptions: RequestInit = {
        method: 'POST',
        headers: {
          Authorization: 'Bearer token123',
        },
      };

      await httpClient.request<typeof mockData>('/endpoint', customOptions);

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/endpoint`,
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer token123',
          },
        })
      );
    });

    it('throws an error when response is not ok', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      } as Response);

      await expect(httpClient.request('/not-found')).rejects.toThrow(
        'API Error: 404 Not Found'
      );
    });

    it('handles network errors', async () => {
      const networkError = new Error('Network error');
      mockFetch.mockRejectedValueOnce(networkError);

      await expect(httpClient.request('/endpoint')).rejects.toThrow('Network error');
      expect(console.error).toHaveBeenCalledWith('HTTP Error:', networkError);
    });
  });

  describe('get', () => {
    it('makes a GET request', async () => {
      const mockData = { items: [] };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      const result = await httpClient.get<typeof mockData>('/items');

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/items`,
        expect.objectContaining({
          method: 'GET',
        })
      );
      expect(result).toEqual(mockData);
    });

    it('makes a GET request with custom options', async () => {
      const mockData = { data: 'test' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      await httpClient.get<typeof mockData>('/endpoint', {
        headers: { 'X-Custom': 'value' },
      });

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/endpoint`,
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'X-Custom': 'value',
          }),
        })
      );
    });
  });

  describe('post', () => {
    it('makes a POST request with body', async () => {
      const mockData = { id: 1 };
      const requestBody = { name: 'New Item' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      const result = await httpClient.post<typeof mockData>('/items', requestBody);

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/items`,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(requestBody),
        })
      );
      expect(result).toEqual(mockData);
    });

    it('makes a POST request with custom options', async () => {
      const mockData = { success: true };
      const requestBody = { data: 'test' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      await httpClient.post<typeof mockData>('/endpoint', requestBody, {
        headers: { 'X-Api-Key': 'key123' },
      });

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/endpoint`,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: expect.objectContaining({
            'X-Api-Key': 'key123',
          }),
        })
      );
    });
  });

  describe('put', () => {
    it('makes a PUT request with body', async () => {
      const mockData = { updated: true };
      const requestBody = { name: 'Updated Item' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      const result = await httpClient.put<typeof mockData>('/items/1', requestBody);

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/items/1`,
        expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify(requestBody),
        })
      );
      expect(result).toEqual(mockData);
    });

    it('makes a PUT request with custom options', async () => {
      const mockData = { success: true };
      const requestBody = { data: 'updated' };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      await httpClient.put<typeof mockData>('/endpoint/1', requestBody, {
        headers: { 'X-Version': '2' },
      });

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/endpoint/1`,
        expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify(requestBody),
          headers: expect.objectContaining({
            'X-Version': '2',
          }),
        })
      );
    });
  });

  describe('delete', () => {
    it('makes a DELETE request', async () => {
      const mockData = { deleted: true };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      const result = await httpClient.delete<typeof mockData>('/items/1');

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/items/1`,
        expect.objectContaining({
          method: 'DELETE',
        })
      );
      expect(result).toEqual(mockData);
    });

    it('makes a DELETE request with custom options', async () => {
      const mockData = { success: true };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      await httpClient.delete<typeof mockData>('/endpoint/1', {
        headers: { 'X-Confirm': 'true' },
      });

      expect(mockFetch).toHaveBeenCalledWith(
        `${baseUrl}/endpoint/1`,
        expect.objectContaining({
          method: 'DELETE',
          headers: expect.objectContaining({
            'X-Confirm': 'true',
          }),
        })
      );
    });
  });
});
