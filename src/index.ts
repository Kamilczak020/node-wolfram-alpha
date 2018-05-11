import axios, { AxiosPromise } from 'axios';
import { QueryOptions, WolframResponse } from './interfaces';

export class WolframClient {
  protected appId: string;

  constructor(appId: string) {
    this.appId = appId;
  }

  public query(query: string, options?: QueryOptions): AxiosPromise<WolframResponse> {
    const url = `http://api.wolframalpha.com/v2/query?appid=${this.appId}&input=${encodeURIComponent(query)}&output=json`;

    // Momma once said: 'reflect yoself!', so I did.
    if (!!options) {
        const optionsUri = [...Object.entries(options)].map(([key, value]) => {
          return `${key}=${encodeURIComponent(value.toString())}`;
        }).join('&');

        return this.sendRequest([url, optionsUri].join('&'));
      }

    return this.sendRequest(url);
  }

  public getFromUrl(url: string): AxiosPromise<WolframResponse> {
   return this.sendRequest(url);
  }

  protected sendRequest(request: string): AxiosPromise<WolframResponse> {
    try {
      return axios.request<WolframResponse>({url: request});
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
