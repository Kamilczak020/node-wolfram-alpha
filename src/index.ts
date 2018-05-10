import axios from 'axios';
import { WolframResponse } from './interfaces';


export class Wolfram {
  private appId: string;

  constructor(appId: string) {
    this.appId = appId;
  }

  public async get(query: string) {
    const endpoint = `http://api.wolframalpha.com/v2/query?appid=${this.appId}&input=${query}&output=json&reinterpret=true`;

    try {
      return await axios.request<WolframResponse>({
        url: encodeURI(endpoint)
      });
    } catch (error) {
      throw new Error(error.message);
    }

  }
}

async function start() {
  const response = await new Wolfram('5YR9G2-KE3J4XULQW').get('kitty danger');
  console.log(response.data.queryresult);
}

start();
