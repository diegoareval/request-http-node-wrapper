export interface ClientResponse {
  statusCode: number;
  body: any;
  headers: { [key: string]: any };
}

export interface ClientOptions {
  apiRoot?: string;
}

export interface Options {
  apiRoot: string;
}

export interface BaseLimitOffsetQuery {
  limit?: number;
  offset?: number;
}



export interface KeyAnyObject {
  [key: string]: any;
}


type Filter = {
  relation: string,
  attribute: string,
  value: string | string[]
}
export interface BodyRequest {
    fields?: string[],
    query?: string,
    filter: Filter
}



