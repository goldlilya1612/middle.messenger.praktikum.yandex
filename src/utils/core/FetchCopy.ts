const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

interface IOptions {
  headers?: { [key: string]: string },
  method?: string,
  data?: object,
  timeout?: number,
}

const queryStringify = (data: { [key: string]: any }): string => {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  return `?${Object.entries(data).map(([key, value]) => `${key}=${value}`).join('&')}`;
};
export class FetchCopy {
  protected BASE_URL = 'https://ya-praktikum.tech/api/v2';

  protected path: string;

  constructor(path: string) {
    this.path = `${this.BASE_URL}${path}`;
  }

  get = <TResponse>(url: string, options: IOptions = {}): Promise<TResponse> => {
    const { data } = options;
    if (data) {
      const query = queryStringify(data);
      const urlWithGetParams = `${this.path}${url}${query}`;
      return this.request<TResponse>(urlWithGetParams, { ...options, method: METHODS.GET }, options.timeout);
    }
    return this.request<TResponse>(`${this.path}${url}`, { ...options, method: METHODS.GET }, options.timeout);
  };

  // PUT, POST, DELETE
  put = <TResponse>(url: string, options: IOptions = {}): Promise<TResponse> => this.request<TResponse>(`${this.path}${url}`, { ...options, method: METHODS.PUT }, options.timeout);

  //
  post = <TResponse>(url: string, options: IOptions = {}): Promise<TResponse> => this.request<TResponse>(`${this.path}${url}`, { ...options, method: METHODS.POST }, options.timeout);

  //
  delete = <TResponse>(url: string, options: IOptions = {}): Promise<TResponse> => this.request<TResponse>(`${this.path}${url}`, { ...options, method: METHODS.DELETE }, options.timeout);

  request = <TResponse>(url: string, options: IOptions = {}, timeout = 5000): Promise<TResponse> => {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject(new Error('User aborted request'));
      xhr.onerror = () => reject(new Error('Network error occurred'));
      xhr.ontimeout = () => reject(new Error('Request timed out'));

      xhr.timeout = timeout;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  };
}
