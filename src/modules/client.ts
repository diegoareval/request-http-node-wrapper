import { MethodType } from './../enums/method.enum';
import { AuthType } from './../enums/auth.enum';
import { basicRequest } from '../lib';

import { ClientResponse, BodyRequest } from '../types';

export class Client {
  public apiKey?: string;
  public url: string;
  public authType: AuthType;
  public methodType: MethodType;

    /**
   * @param {params} url: should be string and mandatory, authType: by default is Open, auth token is not required also
   * support: Bearer and Basic. method type by default is: GET otherwise should specify and apiKey if is authType open is not required
   */
  constructor(
    url: string,
    authType: AuthType = AuthType.OPEN,
    methodType: MethodType = MethodType.GET,
    apiKey?: string,
  ) {
    this.apiKey = apiKey || '';
    this.url = url;
    this.authType = authType;
    this.methodType = methodType;
  }

  /**
   * @param {BodyRequest} body Request body.
   * @returns {Promise<Response>} Http response of  Data from server.
   */

  public connectToEndpoint(body: BodyRequest): Promise<ClientResponse> {
    const postBody = { ...body };
    return basicRequest(this.url, this.methodType, this.authType, this.apiKey, postBody);
  }
}
