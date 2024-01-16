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
class FetchCopy {
  get = (url: string, options: IOptions = {}): Promise<XMLHttpRequest> => {
    const { data } = options;
    if (data) {
      const query = queryStringify(data);
      const urlWithGetParams = `${url}${query}`;
      return this.request(urlWithGetParams, { ...options, method: METHODS.GET }, options.timeout);
    }
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  // PUT, POST, DELETE
  put = (url: string, options: IOptions = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post = (url: string, options: IOptions = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete = (url: string, options: IOptions = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: IOptions = {}, timeout = 5000): Promise<XMLHttpRequest> => {
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

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      // eslint-disable-next-line func-names
      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = () => reject(new Error('User aborted request'));
      xhr.onerror = () => reject(new Error('Network error occurred'));
      xhr.ontimeout = () => reject(new Error('Request timed out'));

      xhr.timeout = timeout;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data as Document | XMLHttpRequestBodyInit);
      }
    });
  };
}
