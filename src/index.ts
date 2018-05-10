import axios from 'axios';

export interface WolframResult {

}

export interface QueryResult {
  success: boolean;
  error: boolean;
  numpods: number;
  datatypes: string;
  timing: number;
  parsetiming: number;
  parsetimedout: boolean;
  recalculate: string;
  pods: Array<Pod>;
}

export interface Pod {
  title: string;
  scanner: string;
  id: string;
  position: boolean;
  error: boolean;
  numsubpods: number;
  subpods: Array<SubPod>;
}

export interface SubPod {
  title: string;
  img?: Image;
  plaintext?: string;
}

export interface Image {
  src: string;
  alt: string;
  title: string;
  width: string;
  height: string;
}

export class Wolfram {
  private appId: string;

  constructor(appId: string) {
    this.appId = appId;
  }

  public async get(query: string) {
    const endpoint = `http://api.wolframalpha.com/v2/query?appid=${this.appId}&input=${query}&output=json`;

    try {
      return await axios.request<string>({
        url: encodeURI(endpoint)
      });
    } catch (error) {
      throw new Error(error.message);
    }

  }
}

async function start() {
  const response: any = await new Wolfram('5YR9G2-KE3J4XULQW').get('all api elements');
  console.log(response.data.queryresult.pods[0]);
}

start();
