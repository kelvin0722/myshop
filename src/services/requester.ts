class Requester {
  private baseUrl: string = process.env.API_URL || '';

  async get(url: string, options: RequestInit = {}): Promise<any> {
    const fullUrl = this.baseUrl + url;

    try {
      const response = await fetch(fullUrl, {
        method: 'GET',
        ...options, // Merge additional options
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json(); // Parse JSON response
    } catch (error) {
      // log error by 3rd party tool such as sentry
      console.error('Error fetching data:', error);
    }
  }

  async post(url: string, data: any, options: RequestInit = {}): Promise<any> {
    const fullUrl = new URL(url, this.baseUrl); // Construct full URL

    try {
      const response = await fetch(fullUrl.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers, // Merge additional headers
        },
        body: JSON.stringify(data), // Stringify data for POST request
        ...options,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json(); // Parse JSON response
    } catch (error) {
      // log error by 3rd party tool such as sentry
      console.error('Error posting data:', error);
    }
  }
}

export default Requester;
