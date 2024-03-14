class Requester {
  private baseUrl: string =
    'https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api';

  async get(url: string, options: RequestInit = {}): Promise<any> {
    const fullUrl = this.baseUrl + url;

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // log error by 3rd party tool such as sentry
      console.error('Error fetching data:', error);
    }
  }

  async post(url: string, data: any, options: RequestInit = {}): Promise<any> {
    const fullUrl = this.baseUrl + url;

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // log error by 3rd party tool such as sentry
      console.error('Error posting data:', error);
    }
  }
}

export default Requester;
