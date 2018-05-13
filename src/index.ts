import axios, { AxiosPromise } from 'axios';
import { QueryOptions, WolframResponse } from './interfaces';

/**
 * Easens interaction with Wolfram Alpha's API.
 *
 * Accepts API's App ID in the constructor.
 * You can generate your own App ID here:
 * https://developer.wolframalpha.com/portal/myapps/
 */
export class WolframClient {
  protected appId: string;

  constructor(appId: string) {
    this.appId = appId;
  }

  /**
   * Sends a query to the Wolfram Alpha's API.
   *
   * @param query Non Uri-encoded, base query. i.e. what you would type into Wolfram's input field
   * @param options Optional parameters that are added to the query
   * @returns AxiosPromise with a WolframResponse object.
   */
  public query(query: string, options?: QueryOptions): AxiosPromise<WolframResponse> {
    const baseUrl = `http://api.wolframalpha.com/v2/query?appid=${this.appId}&input=${encodeURIComponent(query)}&output=json`;

    // Momma once said: 'reflect yoself!', so I did.
    if (!!options) {
        const optionsUri = [...Object.entries(options)].map(([key, value]) => {
          return `${key}=${encodeURIComponent(value.toString())}`;
        }).join('&');
        return this.sendRequest([baseUrl, optionsUri].join('&'));
      }
    return this.sendRequest(baseUrl);
  }

  /**
   * Sends a request to a given url of Wolfram Alpha's API.
   *
   * @param url Uri-encoded url as a Wolfram API query.
   * @returns AxiosPromise with a WolframResponse object.
   */
  public getFromUrl(url: string): AxiosPromise<WolframResponse> {
   return this.sendRequest(url);
  }

  /**
   * Generic request wrapper, uses axios to send a request using axios.
   * @param request Request to be sent.
   */
  protected sendRequest(request: string): AxiosPromise<WolframResponse> {
    try {
      return axios.request<WolframResponse>({url: request});
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
