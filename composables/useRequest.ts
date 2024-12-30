import type { AsyncData } from '#app'; // Importing AsyncData type

const baseURL = 'http://localhost:3333/api/v1';

type methods = 'get' | 'post' | 'put' | 'delete';
enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

const request = async <DataT, ErrorT>(method: methods, url: string, options: any) => {
  const response = await useFetch<DataT, ErrorT>(url, {
    ...options,
    method: method,
    baseURL,
    onRequest({ request, options }) {
      // 设置请求头
      options.headers = options.headers || {};
      //   options.headers.authorization = '...';
    },
    onRequestError({ request, options, error }) {
      // 处理请求错误
    },
    onResponse({ request, response, options }) {
      // 处理响应数据
    },
    onResponseError({ request, response, options }) {
      // 处理响应错误
    },
  });
  return response;
};

const useRequest = async <DataT, ErrorT>(
  methods: methods,
  url: string,
  params?: object,
  options?: any
): Promise<AsyncData<DataT, ErrorT | null>> => {
  let response: any;
  switch (methods) {
    case Methods.GET:
      response = await request<DataT, ErrorT>(methods, url, {
        ...options,
        query: params,
      });
      return response;
    case Methods.POST:
      response = await request<DataT, ErrorT>(methods, url, {
        ...options,
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;

    case Methods.PUT:
      response = await request<DataT, ErrorT>(methods, url, {
        ...options,
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;

    case Methods.DELETE:
      response = await request<DataT, ErrorT>(methods, url, {
        ...options,
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    default:
      response = await request<DataT, ErrorT>(methods, url, {
        ...options,
        params,
      });
      return response;
  }
};

export default useRequest;
