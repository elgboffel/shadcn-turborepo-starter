import { test, expect } from "vitest";
import { Error } from "./error";

test("AppError", () => {
  test("serializeError method works correctly", () => {
    const error = new Error("Something went wrong");
    const appError = new Error(error);

    expect(appError.isSuccess).toBe(false);
    // expect(appError.raw).toEqual(error.stack);
    expect(appError.url).toBeNull();
    expect(appError.message?.code).toBeNull();
    expect(appError.message?.value).toEqual("Something went wrong");
    expect(appError.statusCode).toBe(500);
  });

  test("serializeAppErrorType method works correctly", () => {
    const appErrorType = {
      error: true,
      isSuccess: true,
      raw: "some raw data",
      url: "https://example.com",
      message: {
        code: 123,
        value: "Something went wrong",
      },
      statusCode: 400,
    };
    const appError = new Error(appErrorType);

    expect(appError.isSuccess).toBe(true);
    expect(appError.raw).toEqual("some raw data");
    expect(appError.url).toEqual("https://example.com");
    expect(appError.message?.code).toEqual(123);
    expect(appError.message?.value).toEqual("Something went wrong");
    expect(appError.statusCode).toBe(400);
  });

  test("throws an error for an unsupported error type", () => {
    const unsupportedErrorType = {
      error: true,
      isSuccess: true,
      raw: "some raw data",
    };

    expect(() => new Error(unsupportedErrorType)).toThrowError(
      "AppError: Error type not supported"
    );
  });
});
