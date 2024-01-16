export type IError = {
  raw: string | null;
  url: string | null;
  isSuccess: boolean | null;
  message: ErrorMessage | null;
  statusCode: number | null;
};

export type ErrorMessage = {
  code: string | null;
  value: string | null;
};

export type NativeError = {
  name: string;
  message: string;
  stack?: string;
};

export type NativeErrorConstructor = {
  new (message?: string): NativeError;
  (message?: string): NativeError;
  readonly prototype: NativeError;
};

export declare let NativeError: NativeErrorConstructor;
