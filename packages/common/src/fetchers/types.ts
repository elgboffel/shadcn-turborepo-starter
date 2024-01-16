import { Error } from "../errors/app-error/error";

export type BaseFetcher = {
  url: string;
  config?: RequestInit | null;
  preview?: boolean;
};

export type ErrorHandlers = {
  response?: (response: Response) => Error;
  catch?: (error: unknown) => Promise<Error>;
};

export type FetcherArgs = {
  url: string;
  isText?: boolean;
  config?: RequestInit;
  errorHandlers?: ErrorHandlers;
};

export type GraphQLResponse<T = unknown> = {
  data: T;
  errors?: GraphQLError[];
  extensions?: unknown;
};

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: unknown;
}

export type GraphQLFetcher = BaseFetcher & {
  query: string;
  variables?: { [key: string]: unknown };
};
