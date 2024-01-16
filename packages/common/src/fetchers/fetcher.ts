import isomorphicFetch from "isomorphic-fetch";
import { Error } from "../errors/app-error/error";
import { FetcherArgs } from "./types";

export async function fetcher<TResponse>({
  url,
  isText,
  config,
}: FetcherArgs): Promise<TResponse | Error> {
  try {
    const response = await isomorphicFetch(url, config);

    const body: any = isText ? await response.text() : await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(body));
    }

    return body;
  } catch (error: unknown) {
    return Promise.reject(new Error(error));
  }
}
