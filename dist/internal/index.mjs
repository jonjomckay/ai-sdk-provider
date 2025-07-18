var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// node_modules/.pnpm/@ai-sdk+provider@2.0.0-beta.1/node_modules/@ai-sdk/provider/dist/index.mjs
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError2 extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: name14,
    message,
    cause
  }) {
    super(message);
    this[_a] = true;
    this.name = name14;
    this.cause = cause;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(error) {
    return _AISDKError2.hasMarker(error, marker);
  }
  static hasMarker(error, marker15) {
    const markerSymbol = Symbol.for(marker15);
    return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
  }
};
_a = symbol;
var AISDKError = _AISDKError;
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
  constructor({
    message,
    url,
    requestBodyValues,
    statusCode,
    responseHeaders,
    responseBody,
    cause,
    isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500),
    // server error
    data
  }) {
    super({ name, message, cause });
    this[_a2] = true;
    this.url = url;
    this.requestBodyValues = requestBodyValues;
    this.statusCode = statusCode;
    this.responseHeaders = responseHeaders;
    this.responseBody = responseBody;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker2);
  }
};
_a2 = symbol2;
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
  // used in isInstance
  constructor({ message = "Empty response body" } = {}) {
    super({ name: name2, message });
    this[_a3] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker3);
  }
};
_a3 = symbol3;
function getErrorMessage(error) {
  if (error == null) {
    return "unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
  constructor({
    message,
    cause,
    argument
  }) {
    super({ name: name3, message, cause });
    this[_a4] = true;
    this.argument = argument;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker4);
  }
};
_a4 = symbol4;
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidPromptError = class extends AISDKError {
  constructor({
    prompt,
    message,
    cause
  }) {
    super({ name: name4, message: `Invalid prompt: ${message}`, cause });
    this[_a5] = true;
    this.prompt = prompt;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker5);
  }
};
_a5 = symbol5;
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidResponseDataError = class extends AISDKError {
  constructor({
    data,
    message = `Invalid response data: ${JSON.stringify(data)}.`
  }) {
    super({ name: name5, message });
    this[_a6] = true;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker6);
  }
};
_a6 = symbol6;
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var JSONParseError = class extends AISDKError {
  constructor({ text, cause }) {
    super({
      name: name6,
      message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a7] = true;
    this.text = text;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker7);
  }
};
_a7 = symbol7;
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
_a8 = symbol8;
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
_a9 = symbol9;
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
_a10 = symbol10;
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
_a11 = symbol11;
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
_a12 = symbol12;
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _TypeValidationError = class _TypeValidationError2 extends AISDKError {
  constructor({ value, cause }) {
    super({
      name: name12,
      message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a13] = true;
    this.value = value;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker13);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value,
    cause
  }) {
    return _TypeValidationError2.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError2({ value, cause });
  }
};
_a13 = symbol13;
var TypeValidationError = _TypeValidationError;
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var UnsupportedFunctionalityError = class extends AISDKError {
  constructor({
    functionality,
    message = `'${functionality}' functionality not supported.`
  }) {
    super({ name: name13, message });
    this[_a14] = true;
    this.functionality = functionality;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker14);
  }
};
_a14 = symbol14;

// node_modules/.pnpm/eventsource-parser@3.0.3/node_modules/eventsource-parser/dist/index.js
var ParseError = class extends Error {
  constructor(message, options) {
    super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
  }
};
function noop(_arg) {
}
function createParser(callbacks) {
  if (typeof callbacks == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
  let incompleteLine = "", isFirstChunk = true, id, data = "", eventType = "";
  function feed(newChunk) {
    const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
    for (const line of complete)
      parseLine(line);
    incompleteLine = incomplete, isFirstChunk = false;
  }
  function parseLine(line) {
    if (line === "") {
      dispatchEvent();
      return;
    }
    if (line.startsWith(":")) {
      onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
      return;
    }
    const fieldSeparatorIndex = line.indexOf(":");
    if (fieldSeparatorIndex !== -1) {
      const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
      processField(field, value, line);
      return;
    }
    processField(line, "", line);
  }
  function processField(field, value, line) {
    switch (field) {
      case "event":
        eventType = value;
        break;
      case "data":
        data = `${data}${value}
`;
        break;
      case "id":
        id = value.includes("\0") ? void 0 : value;
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(
          new ParseError(`Invalid \`retry\` value: "${value}"`, {
            type: "invalid-retry",
            value,
            line
          })
        );
        break;
      default:
        onError(
          new ParseError(
            `Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`,
            { type: "unknown-field", field, value, line }
          )
        );
        break;
    }
  }
  function dispatchEvent() {
    data.length > 0 && onEvent({
      id,
      event: eventType || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: data.endsWith(`
`) ? data.slice(0, -1) : data
    }), id = void 0, data = "", eventType = "";
  }
  function reset(options = {}) {
    incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = true, id = void 0, data = "", eventType = "", incompleteLine = "";
  }
  return { feed, reset };
}
function splitLines(chunk) {
  const lines = [];
  let incompleteLine = "", searchIndex = 0;
  for (; searchIndex < chunk.length; ) {
    const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
    let lineEnd = -1;
    if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
      incompleteLine = chunk.slice(searchIndex);
      break;
    } else {
      const line = chunk.slice(searchIndex, lineEnd);
      lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
    }
  }
  return [lines, incompleteLine];
}

// node_modules/.pnpm/eventsource-parser@3.0.3/node_modules/eventsource-parser/dist/stream.js
var EventSourceParserStream = class extends TransformStream {
  constructor({ onError, onRetry, onComment } = {}) {
    let parser;
    super({
      start(controller) {
        parser = createParser({
          onEvent: (event) => {
            controller.enqueue(event);
          },
          onError(error) {
            onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
          },
          onRetry,
          onComment
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      }
    });
  }
};

// node_modules/.pnpm/@ai-sdk+provider-utils@3.0.0-beta.2_zod@3.25.74/node_modules/@ai-sdk/provider-utils/dist/index.mjs
import * as z4 from "zod/v4";

// node_modules/.pnpm/zod-to-json-schema@3.24.5_zod@3.25.74/node_modules/zod-to-json-schema/dist/esm/Options.js
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");

// node_modules/.pnpm/zod-to-json-schema@3.24.5_zod@3.25.74/node_modules/zod-to-json-schema/dist/esm/selectParser.js
import { ZodFirstPartyTypeKind as ZodFirstPartyTypeKind3 } from "zod";

// node_modules/.pnpm/zod-to-json-schema@3.24.5_zod@3.25.74/node_modules/zod-to-json-schema/dist/esm/parsers/array.js
import { ZodFirstPartyTypeKind } from "zod";

// node_modules/.pnpm/zod-to-json-schema@3.24.5_zod@3.25.74/node_modules/zod-to-json-schema/dist/esm/parsers/record.js
import { ZodFirstPartyTypeKind as ZodFirstPartyTypeKind2 } from "zod";

// node_modules/.pnpm/zod-to-json-schema@3.24.5_zod@3.25.74/node_modules/zod-to-json-schema/dist/esm/parsers/string.js
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");

// node_modules/.pnpm/zod-to-json-schema@3.24.5_zod@3.25.74/node_modules/zod-to-json-schema/dist/esm/parsers/object.js
import { ZodOptional } from "zod";

// node_modules/.pnpm/@ai-sdk+provider-utils@3.0.0-beta.2_zod@3.25.74/node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
  return headers.reduce(
    (combinedHeaders, currentHeaders) => __spreadValues(__spreadValues({}, combinedHeaders), currentHeaders != null ? currentHeaders : {}),
    {}
  );
}
function extractResponseHeaders(response) {
  return Object.fromEntries([...response.headers]);
}
var createIdGenerator = ({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = () => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0; i < size; i++) {
      chars[i] = alphabet[Math.random() * alphabetLength | 0];
    }
    return chars.join("");
  };
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
function isAbortError(error) {
  return error instanceof Error && (error.name === "AbortError" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
function handleFetchError({
  error,
  url,
  requestBodyValues
}) {
  if (isAbortError(error)) {
    return error;
  }
  if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
    const cause = error.cause;
    if (cause != null) {
      return new APICallError({
        message: `Cannot connect to API: ${cause.message}`,
        cause,
        url,
        requestBodyValues,
        isRetryable: true
        // retry when network error
      });
    }
  }
  return error;
}
function removeUndefinedEntries(record) {
  return Object.fromEntries(
    Object.entries(record).filter(([_key, value]) => value != null)
  );
}
var suspectProtoRx = /"__proto__"\s*:/;
var suspectConstructorRx = /"constructor"\s*:/;
function _parse(text) {
  const obj = JSON.parse(text);
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
    return obj;
  }
  return filter(obj);
}
function filter(obj) {
  let next = [obj];
  while (next.length) {
    const nodes = next;
    next = [];
    for (const node of nodes) {
      if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      if (Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      for (const key in node) {
        const value = node[key];
        if (value && typeof value === "object") {
          next.push(value);
        }
      }
    }
  }
  return obj;
}
function secureJsonParse(text) {
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  try {
    return _parse(text);
  } finally {
    Error.stackTraceLimit = stackTraceLimit;
  }
}
var validatorSymbol = Symbol.for("vercel.ai.validator");
function validator(validate) {
  return { [validatorSymbol]: true, validate };
}
function isValidator(value) {
  return typeof value === "object" && value !== null && validatorSymbol in value && value[validatorSymbol] === true && "validate" in value;
}
function asValidator(value) {
  return isValidator(value) ? value : standardSchemaValidator(value);
}
function standardSchemaValidator(standardSchema) {
  return validator(async (value) => {
    const result = await standardSchema["~standard"].validate(value);
    return result.issues == null ? { success: true, value: result.value } : {
      success: false,
      error: new TypeValidationError({
        value,
        cause: result.issues
      })
    };
  });
}
async function validateTypes({
  value,
  schema
}) {
  const result = await safeValidateTypes({ value, schema });
  if (!result.success) {
    throw TypeValidationError.wrap({ value, cause: result.error });
  }
  return result.value;
}
async function safeValidateTypes({
  value,
  schema
}) {
  const validator2 = asValidator(schema);
  try {
    if (validator2.validate == null) {
      return { success: true, value, rawValue: value };
    }
    const result = await validator2.validate(value);
    if (result.success) {
      return { success: true, value: result.value, rawValue: value };
    }
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: result.error }),
      rawValue: value
    };
  } catch (error) {
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: error }),
      rawValue: value
    };
  }
}
async function parseJSON({
  text,
  schema
}) {
  try {
    const value = secureJsonParse(text);
    if (schema == null) {
      return value;
    }
    return validateTypes({ value, schema });
  } catch (error) {
    if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) {
      throw error;
    }
    throw new JSONParseError({ text, cause: error });
  }
}
async function safeParseJSON({
  text,
  schema
}) {
  try {
    const value = secureJsonParse(text);
    if (schema == null) {
      return { success: true, value, rawValue: value };
    }
    return await safeValidateTypes({ value, schema });
  } catch (error) {
    return {
      success: false,
      error: JSONParseError.isInstance(error) ? error : new JSONParseError({ text, cause: error }),
      rawValue: void 0
    };
  }
}
function isParsableJson(input) {
  try {
    secureJsonParse(input);
    return true;
  } catch (e) {
    return false;
  }
}
function parseJsonEventStream({
  stream,
  schema
}) {
  return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(
    new TransformStream({
      async transform({ data }, controller) {
        if (data === "[DONE]") {
          return;
        }
        controller.enqueue(await safeParseJSON({ text: data, schema }));
      }
    })
  );
}
var getOriginalFetch2 = () => globalThis.fetch;
var postJsonToApi = async ({
  url,
  headers,
  body,
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch
}) => postToApi({
  url,
  headers: __spreadValues({
    "Content-Type": "application/json"
  }, headers),
  body: {
    content: JSON.stringify(body),
    values: body
  },
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch
});
var postToApi = async ({
  url,
  headers = {},
  body,
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch = getOriginalFetch2()
}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: removeUndefinedEntries(headers),
      body: body.content,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: body.values
        });
      } catch (error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: body.values
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: body.values
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: body.values
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: body.values });
  }
};
var createJsonErrorResponseHandler = ({
  errorSchema,
  errorToMessage,
  isRetryable
}) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await response.text();
  const responseHeaders = extractResponseHeaders(response);
  if (responseBody.trim() === "") {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
  try {
    const parsedError = await parseJSON({
      text: responseBody,
      schema: errorSchema
    });
    return {
      responseHeaders,
      value: new APICallError({
        message: errorToMessage(parsedError),
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        data: parsedError,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
      })
    };
  } catch (parseError) {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response }) => {
  const responseHeaders = extractResponseHeaders(response);
  if (response.body == null) {
    throw new EmptyResponseBodyError({});
  }
  return {
    responseHeaders,
    value: parseJsonEventStream({
      stream: response.body,
      schema: chunkSchema
    })
  };
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await response.text();
  const parsedResult = await safeParseJSON({
    text: responseBody,
    schema: responseSchema
  });
  const responseHeaders = extractResponseHeaders(response);
  if (!parsedResult.success) {
    throw new APICallError({
      message: "Invalid JSON response",
      cause: parsedResult.error,
      statusCode: response.status,
      responseHeaders,
      responseBody,
      url,
      requestBodyValues
    });
  }
  return {
    responseHeaders,
    value: parsedResult.value,
    rawValue: parsedResult.rawValue
  };
};
var schemaSymbol = Symbol.for("vercel.ai.schema");
var { btoa, atob } = globalThis;
function convertUint8ArrayToBase64(array) {
  let latin1string = "";
  for (let i = 0; i < array.length; i++) {
    latin1string += String.fromCodePoint(array[i]);
  }
  return btoa(latin1string);
}

// src/schemas/reasoning-details.ts
import { z } from "zod/v4";
var ReasoningDetailSummarySchema = z.object({
  type: z.literal("reasoning.summary" /* Summary */),
  summary: z.string()
});
var ReasoningDetailEncryptedSchema = z.object({
  type: z.literal("reasoning.encrypted" /* Encrypted */),
  data: z.string()
});
var ReasoningDetailTextSchema = z.object({
  type: z.literal("reasoning.text" /* Text */),
  text: z.string().nullish(),
  signature: z.string().nullish()
});
var ReasoningDetailUnionSchema = z.union([
  ReasoningDetailSummarySchema,
  ReasoningDetailEncryptedSchema,
  ReasoningDetailTextSchema
]);
var ReasoningDetailsWithUnknownSchema = z.union([
  ReasoningDetailUnionSchema,
  z.unknown().transform(() => null)
]);
var ReasoningDetailArraySchema = z.array(ReasoningDetailsWithUnknownSchema).transform((d) => d.filter((d2) => !!d2));

// src/schemas/error-response.ts
import { z as z2 } from "zod/v4";
var OpenRouterErrorResponseSchema = z2.object({
  error: z2.object({
    code: z2.union([z2.string(), z2.number()]).nullable(),
    message: z2.string(),
    type: z2.string().nullable(),
    param: z2.any().nullable()
  })
});
var openrouterFailedResponseHandler = createJsonErrorResponseHandler({
  errorSchema: OpenRouterErrorResponseSchema,
  errorToMessage: (data) => data.error.message
});

// src/utils/map-finish-reason.ts
function mapOpenRouterFinishReason(finishReason) {
  switch (finishReason) {
    case "stop":
      return "stop";
    case "length":
      return "length";
    case "content_filter":
      return "content-filter";
    case "function_call":
    case "tool_calls":
      return "tool-calls";
    default:
      return "unknown";
  }
}

// src/chat/convert-to-openrouter-chat-messages.ts
function getCacheControl(providerMetadata) {
  var _a15, _b, _c;
  const anthropic = providerMetadata == null ? void 0 : providerMetadata.anthropic;
  const openrouter = providerMetadata == null ? void 0 : providerMetadata.openrouter;
  return (_c = (_b = (_a15 = openrouter == null ? void 0 : openrouter.cacheControl) != null ? _a15 : openrouter == null ? void 0 : openrouter.cache_control) != null ? _b : anthropic == null ? void 0 : anthropic.cacheControl) != null ? _c : anthropic == null ? void 0 : anthropic.cache_control;
}
function convertToOpenRouterChatMessages(prompt) {
  var _a15, _b, _c;
  const messages = [];
  for (const { role, content, providerOptions } of prompt) {
    switch (role) {
      case "system": {
        messages.push({
          role: "system",
          content,
          cache_control: getCacheControl(providerOptions)
        });
        break;
      }
      case "user": {
        if (content.length === 1 && ((_a15 = content[0]) == null ? void 0 : _a15.type) === "text") {
          const cacheControl = (_b = getCacheControl(providerOptions)) != null ? _b : getCacheControl(content[0].providerOptions);
          const contentWithCacheControl = cacheControl ? [
            {
              type: "text",
              text: content[0].text,
              cache_control: cacheControl
            }
          ] : content[0].text;
          messages.push({
            role: "user",
            content: contentWithCacheControl
          });
          break;
        }
        const messageCacheControl = getCacheControl(providerOptions);
        const contentParts = content.map(
          (part) => {
            var _a16, _b2, _c2, _d, _e, _f, _g;
            const cacheControl = (_a16 = getCacheControl(part.providerOptions)) != null ? _a16 : messageCacheControl;
            switch (part.type) {
              case "text":
                return {
                  type: "text",
                  text: part.text,
                  // For text parts, only use part-specific cache control
                  cache_control: cacheControl
                };
              case "file":
                if ((_b2 = part.mediaType) == null ? void 0 : _b2.startsWith("image/")) {
                  return {
                    type: "image_url",
                    image_url: {
                      url: part.data instanceof URL ? part.data.toString() : `data:${(_c2 = part.mediaType) != null ? _c2 : "image/jpeg"};base64,${convertUint8ArrayToBase64(
                        part.data instanceof Uint8Array ? part.data : new Uint8Array()
                      )}`
                    },
                    // For image parts, use part-specific or message-level cache control
                    cache_control: cacheControl
                  };
                }
                return {
                  type: "file",
                  file: {
                    filename: String(
                      (_g = (_f = (_e = (_d = part.providerOptions) == null ? void 0 : _d.openrouter) == null ? void 0 : _e.filename) != null ? _f : part.filename) != null ? _g : ""
                    ),
                    file_data: part.data instanceof Uint8Array ? `data:${part.mediaType};base64,${convertUint8ArrayToBase64(part.data)}` : `data:${part.mediaType};base64,${part.data}`
                  },
                  cache_control: cacheControl
                };
              default: {
                return {
                  type: "text",
                  text: "",
                  cache_control: cacheControl
                };
              }
            }
          }
        );
        messages.push({
          role: "user",
          content: contentParts
        });
        break;
      }
      case "assistant": {
        let text = "";
        let reasoning = "";
        const reasoningDetails = [];
        const toolCalls = [];
        for (const part of content) {
          switch (part.type) {
            case "text": {
              text += part.text;
              break;
            }
            case "tool-call": {
              toolCalls.push({
                id: part.toolCallId,
                type: "function",
                function: {
                  name: part.toolName,
                  arguments: JSON.stringify(part.input)
                }
              });
              break;
            }
            case "reasoning": {
              reasoning += part.text;
              reasoningDetails.push({
                type: "reasoning.text" /* Text */,
                text: part.text
              });
              break;
            }
            case "file":
              break;
            default: {
              break;
            }
          }
        }
        messages.push({
          role: "assistant",
          content: text,
          tool_calls: toolCalls.length > 0 ? toolCalls : void 0,
          reasoning: reasoning || void 0,
          reasoning_details: reasoningDetails.length > 0 ? reasoningDetails : void 0,
          cache_control: getCacheControl(providerOptions)
        });
        break;
      }
      case "tool": {
        for (const toolResponse of content) {
          const content2 = getToolResultContent(toolResponse);
          messages.push({
            role: "tool",
            tool_call_id: toolResponse.toolCallId,
            content: content2,
            cache_control: (_c = getCacheControl(providerOptions)) != null ? _c : getCacheControl(toolResponse.providerOptions)
          });
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  return messages;
}
function getToolResultContent(input) {
  return input.output.type === "text" ? input.output.value : JSON.stringify(input.output.value);
}

// src/chat/get-tool-choice.ts
import { z as z3 } from "zod/v4";
var ChatCompletionToolChoiceSchema = z3.union([
  z3.literal("auto"),
  z3.literal("none"),
  z3.literal("required"),
  z3.object({
    type: z3.literal("function"),
    function: z3.object({
      name: z3.string()
    })
  })
]);
function getChatCompletionToolChoice(toolChoice) {
  switch (toolChoice.type) {
    case "auto":
    case "none":
    case "required":
      return toolChoice.type;
    case "tool": {
      return {
        type: "function",
        function: { name: toolChoice.toolName }
      };
    }
    default: {
      toolChoice;
      throw new Error(`Invalid tool choice type: ${toolChoice}`);
    }
  }
}

// src/chat/schemas.ts
import { z as z5 } from "zod/v4";
var OpenRouterChatCompletionBaseResponseSchema = z5.object({
  id: z5.string().optional(),
  model: z5.string().optional(),
  usage: z5.object({
    prompt_tokens: z5.number(),
    prompt_tokens_details: z5.object({
      cached_tokens: z5.number()
    }).nullish(),
    completion_tokens: z5.number(),
    completion_tokens_details: z5.object({
      reasoning_tokens: z5.number()
    }).nullish(),
    total_tokens: z5.number(),
    cost: z5.number().optional(),
    cost_details: z5.object({
      upstream_inference_cost: z5.number().nullish()
    }).nullish()
  }).nullish()
});
var OpenRouterNonStreamChatCompletionResponseSchema = OpenRouterChatCompletionBaseResponseSchema.extend({
  choices: z5.array(
    z5.object({
      message: z5.object({
        role: z5.literal("assistant"),
        content: z5.string().nullable().optional(),
        reasoning: z5.string().nullable().optional(),
        reasoning_details: ReasoningDetailArraySchema.nullish(),
        tool_calls: z5.array(
          z5.object({
            id: z5.string().optional().nullable(),
            type: z5.literal("function"),
            function: z5.object({
              name: z5.string(),
              arguments: z5.string()
            })
          })
        ).optional()
      }),
      index: z5.number().nullish(),
      logprobs: z5.object({
        content: z5.array(
          z5.object({
            token: z5.string(),
            logprob: z5.number(),
            top_logprobs: z5.array(
              z5.object({
                token: z5.string(),
                logprob: z5.number()
              })
            )
          })
        ).nullable()
      }).nullable().optional(),
      finish_reason: z5.string().optional().nullable()
    })
  )
});
var OpenRouterStreamChatCompletionChunkSchema = z5.union([
  OpenRouterChatCompletionBaseResponseSchema.extend({
    choices: z5.array(
      z5.object({
        delta: z5.object({
          role: z5.enum(["assistant"]).optional(),
          content: z5.string().nullish(),
          reasoning: z5.string().nullish().optional(),
          reasoning_details: ReasoningDetailArraySchema.nullish(),
          tool_calls: z5.array(
            z5.object({
              index: z5.number().nullish(),
              id: z5.string().nullish(),
              type: z5.literal("function").optional(),
              function: z5.object({
                name: z5.string().nullish(),
                arguments: z5.string().nullish()
              })
            })
          ).nullish()
        }).nullish(),
        logprobs: z5.object({
          content: z5.array(
            z5.object({
              token: z5.string(),
              logprob: z5.number(),
              top_logprobs: z5.array(
                z5.object({
                  token: z5.string(),
                  logprob: z5.number()
                })
              )
            })
          ).nullable()
        }).nullish(),
        finish_reason: z5.string().nullable().optional(),
        index: z5.number().nullish()
      })
    )
  }),
  OpenRouterErrorResponseSchema
]);

// src/chat/index.ts
var OpenRouterChatLanguageModel = class {
  constructor(modelId, settings, config) {
    this.specificationVersion = "v2";
    this.provider = "openrouter";
    this.defaultObjectGenerationMode = "tool";
    this.supportedUrls = {
      "image/*": [
        /^data:image\/[a-zA-Z]+;base64,/,
        /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i
      ],
      // 'text/*': [/^data:text\//, /^https?:\/\/.+$/],
      "application/*": [/^data:application\//, /^https?:\/\/.+$/]
    };
    this.modelId = modelId;
    this.settings = settings;
    this.config = config;
  }
  getArgs({
    prompt,
    maxOutputTokens,
    temperature,
    topP,
    frequencyPenalty,
    presencePenalty,
    seed,
    stopSequences,
    responseFormat,
    topK,
    tools,
    toolChoice
  }) {
    const baseArgs = __spreadValues(__spreadValues({
      // model id:
      model: this.modelId,
      models: this.settings.models,
      // model specific settings:
      logit_bias: this.settings.logitBias,
      logprobs: this.settings.logprobs === true || typeof this.settings.logprobs === "number" ? true : void 0,
      top_logprobs: typeof this.settings.logprobs === "number" ? this.settings.logprobs : typeof this.settings.logprobs === "boolean" ? this.settings.logprobs ? 0 : void 0 : void 0,
      user: this.settings.user,
      parallel_tool_calls: this.settings.parallelToolCalls,
      // standardized settings:
      max_tokens: maxOutputTokens,
      temperature,
      top_p: topP,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
      seed,
      stop: stopSequences,
      response_format: responseFormat,
      top_k: topK,
      // messages:
      messages: convertToOpenRouterChatMessages(prompt),
      // OpenRouter specific settings:
      include_reasoning: this.settings.includeReasoning,
      reasoning: this.settings.reasoning,
      usage: this.settings.usage
    }, this.config.extraBody), this.settings.extraBody);
    if ((responseFormat == null ? void 0 : responseFormat.type) === "json") {
      return __spreadProps(__spreadValues({}, baseArgs), {
        response_format: { type: "json_object" }
      });
    }
    if (tools && tools.length > 0) {
      const mappedTools = tools.filter((tool) => tool.type === "function").map((tool) => ({
        type: "function",
        function: {
          name: tool.name,
          description: tool.type,
          parameters: tool.inputSchema
        }
      }));
      return __spreadProps(__spreadValues({}, baseArgs), {
        tools: mappedTools,
        tool_choice: toolChoice ? getChatCompletionToolChoice(toolChoice) : void 0
      });
    }
    return baseArgs;
  }
  async doGenerate(options) {
    var _a15, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    const providerOptions = options.providerOptions || {};
    const openrouterOptions = providerOptions.openrouter || {};
    const args = __spreadValues(__spreadValues({}, this.getArgs(options)), openrouterOptions);
    const { value: response, responseHeaders } = await postJsonToApi({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: combineHeaders(this.config.headers(), options.headers),
      body: args,
      failedResponseHandler: openrouterFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        OpenRouterNonStreamChatCompletionResponseSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const choice = response.choices[0];
    if (!choice) {
      throw new Error("No choice in response");
    }
    const usageInfo = response.usage ? {
      inputTokens: (_a15 = response.usage.prompt_tokens) != null ? _a15 : 0,
      outputTokens: (_b = response.usage.completion_tokens) != null ? _b : 0,
      totalTokens: ((_c = response.usage.prompt_tokens) != null ? _c : 0) + ((_d = response.usage.completion_tokens) != null ? _d : 0),
      reasoningTokens: (_f = (_e = response.usage.completion_tokens_details) == null ? void 0 : _e.reasoning_tokens) != null ? _f : 0,
      cachedInputTokens: (_h = (_g = response.usage.prompt_tokens_details) == null ? void 0 : _g.cached_tokens) != null ? _h : 0
    } : {
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
      reasoningTokens: 0,
      cachedInputTokens: 0
    };
    const reasoningDetails = (_i = choice.message.reasoning_details) != null ? _i : [];
    reasoningDetails.length > 0 ? reasoningDetails.map((detail) => {
      var _a16;
      switch (detail.type) {
        case "reasoning.text" /* Text */: {
          if (detail.text) {
            return {
              type: "text",
              text: detail.text,
              signature: (_a16 = detail.signature) != null ? _a16 : void 0
            };
          }
          break;
        }
        case "reasoning.summary" /* Summary */: {
          if (detail.summary) {
            return {
              type: "text",
              text: detail.summary
            };
          }
          break;
        }
        case "reasoning.encrypted" /* Encrypted */: {
          if (detail.data) {
            return {
              type: "redacted",
              data: detail.data
            };
          }
          break;
        }
        default: {
          detail;
        }
      }
      return null;
    }).filter((p) => p !== null) : choice.message.reasoning ? [
      {
        type: "text",
        text: choice.message.reasoning
      }
    ] : [];
    const content = [];
    if (choice.message.content) {
      content.push({
        type: "text",
        text: choice.message.content
      });
    }
    if (choice.message.tool_calls) {
      for (const toolCall of choice.message.tool_calls) {
        content.push({
          type: "tool-call",
          toolCallId: (_j = toolCall.id) != null ? _j : generateId(),
          toolName: toolCall.function.name,
          input: toolCall.function.arguments
        });
      }
    }
    return {
      content,
      finishReason: mapOpenRouterFinishReason(choice.finish_reason),
      usage: usageInfo,
      warnings: [],
      providerMetadata: {
        openrouter: {
          usage: {
            promptTokens: (_k = usageInfo.inputTokens) != null ? _k : 0,
            completionTokens: (_l = usageInfo.outputTokens) != null ? _l : 0,
            totalTokens: (_m = usageInfo.totalTokens) != null ? _m : 0,
            cost: (_n = response.usage) == null ? void 0 : _n.cost,
            promptTokensDetails: {
              cachedTokens: (_q = (_p = (_o = response.usage) == null ? void 0 : _o.prompt_tokens_details) == null ? void 0 : _p.cached_tokens) != null ? _q : 0
            },
            completionTokensDetails: {
              reasoningTokens: (_t = (_s = (_r = response.usage) == null ? void 0 : _r.completion_tokens_details) == null ? void 0 : _s.reasoning_tokens) != null ? _t : 0
            },
            costDetails: {
              upstreamInferenceCost: (_w = (_v = (_u = response.usage) == null ? void 0 : _u.cost_details) == null ? void 0 : _v.upstream_inference_cost) != null ? _w : 0
            }
          }
        }
      },
      request: { body: args },
      response: {
        id: response.id,
        modelId: response.model,
        headers: responseHeaders
      }
    };
  }
  async doStream(options) {
    var _a15;
    const providerOptions = options.providerOptions || {};
    const openrouterOptions = providerOptions.openrouter || {};
    const args = __spreadValues(__spreadValues({}, this.getArgs(options)), openrouterOptions);
    const { value: response, responseHeaders } = await postJsonToApi({
      url: this.config.url({
        path: "/chat/completions",
        modelId: this.modelId
      }),
      headers: combineHeaders(this.config.headers(), options.headers),
      body: __spreadProps(__spreadValues({}, args), {
        stream: true,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? __spreadValues({
          include_usage: true
        }, ((_a15 = this.settings.usage) == null ? void 0 : _a15.include) ? { include_usage: true } : {}) : void 0
      }),
      failedResponseHandler: openrouterFailedResponseHandler,
      successfulResponseHandler: createEventSourceResponseHandler(
        OpenRouterStreamChatCompletionChunkSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    const toolCalls = [];
    let finishReason = "other";
    const usage = {
      inputTokens: Number.NaN,
      outputTokens: Number.NaN,
      totalTokens: Number.NaN,
      reasoningTokens: Number.NaN,
      cachedInputTokens: Number.NaN
    };
    const openrouterUsage = {};
    return {
      stream: response.pipeThrough(
        new TransformStream({
          transform(chunk, controller) {
            var _a16, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
            if (!chunk.success) {
              finishReason = "error";
              controller.enqueue({ type: "error", error: chunk.error });
              return;
            }
            const value = chunk.value;
            if ("error" in value) {
              finishReason = "error";
              controller.enqueue({ type: "error", error: value.error });
              return;
            }
            if (value.id) {
              controller.enqueue({
                type: "response-metadata",
                id: value.id
              });
            }
            if (value.model) {
              controller.enqueue({
                type: "response-metadata",
                modelId: value.model
              });
            }
            if (value.usage != null) {
              usage.inputTokens = value.usage.prompt_tokens;
              usage.outputTokens = value.usage.completion_tokens;
              usage.totalTokens = value.usage.prompt_tokens + value.usage.completion_tokens;
              openrouterUsage.promptTokens = value.usage.prompt_tokens;
              if (value.usage.prompt_tokens_details) {
                const cachedInputTokens = (_a16 = value.usage.prompt_tokens_details.cached_tokens) != null ? _a16 : 0;
                usage.cachedInputTokens = cachedInputTokens;
                openrouterUsage.promptTokensDetails = {
                  cachedTokens: cachedInputTokens
                };
              }
              openrouterUsage.completionTokens = value.usage.completion_tokens;
              if (value.usage.completion_tokens_details) {
                const reasoningTokens = (_b = value.usage.completion_tokens_details.reasoning_tokens) != null ? _b : 0;
                usage.reasoningTokens = reasoningTokens;
                openrouterUsage.completionTokensDetails = {
                  reasoningTokens
                };
              }
              openrouterUsage.cost = value.usage.cost;
              openrouterUsage.totalTokens = value.usage.total_tokens;
            }
            const choice = value.choices[0];
            if ((choice == null ? void 0 : choice.finish_reason) != null) {
              finishReason = mapOpenRouterFinishReason(choice.finish_reason);
            }
            if ((choice == null ? void 0 : choice.delta) == null) {
              return;
            }
            const delta = choice.delta;
            if (delta.content != null) {
              controller.enqueue({
                type: "text-delta",
                delta: delta.content,
                id: generateId()
              });
            }
            if (delta.reasoning != null) {
              controller.enqueue({
                type: "reasoning-delta",
                delta: delta.reasoning,
                id: generateId()
              });
            }
            if (delta.reasoning_details && delta.reasoning_details.length > 0) {
              for (const detail of delta.reasoning_details) {
                switch (detail.type) {
                  case "reasoning.text" /* Text */: {
                    if (detail.text) {
                      controller.enqueue({
                        type: "reasoning-delta",
                        delta: detail.text,
                        id: generateId()
                      });
                    }
                    if (detail.signature) {
                      controller.enqueue({
                        type: "reasoning-end",
                        id: generateId()
                      });
                    }
                    break;
                  }
                  case "reasoning.encrypted" /* Encrypted */: {
                    if (detail.data) {
                      controller.enqueue({
                        type: "reasoning-delta",
                        delta: "[REDACTED]",
                        id: generateId()
                      });
                    }
                    break;
                  }
                  case "reasoning.summary" /* Summary */: {
                    if (detail.summary) {
                      controller.enqueue({
                        type: "reasoning-delta",
                        delta: detail.summary,
                        id: generateId()
                      });
                    }
                    break;
                  }
                  default: {
                    detail;
                    break;
                  }
                }
              }
            }
            if (delta.tool_calls != null) {
              for (const toolCallDelta of delta.tool_calls) {
                const index = (_c = toolCallDelta.index) != null ? _c : toolCalls.length - 1;
                if (toolCalls[index] == null) {
                  if (toolCallDelta.type !== "function") {
                    throw new InvalidResponseDataError({
                      data: toolCallDelta,
                      message: `Expected 'function' type.`
                    });
                  }
                  if (toolCallDelta.id == null) {
                    throw new InvalidResponseDataError({
                      data: toolCallDelta,
                      message: `Expected 'id' to be a string.`
                    });
                  }
                  if (((_d = toolCallDelta.function) == null ? void 0 : _d.name) == null) {
                    throw new InvalidResponseDataError({
                      data: toolCallDelta,
                      message: `Expected 'function.name' to be a string.`
                    });
                  }
                  toolCalls[index] = {
                    id: toolCallDelta.id,
                    type: "function",
                    function: {
                      name: toolCallDelta.function.name,
                      arguments: (_e = toolCallDelta.function.arguments) != null ? _e : ""
                    },
                    sent: false
                  };
                  const toolCall2 = toolCalls[index];
                  if (toolCall2 == null) {
                    throw new Error("Tool call is missing");
                  }
                  if (((_f = toolCall2.function) == null ? void 0 : _f.name) != null && ((_g = toolCall2.function) == null ? void 0 : _g.arguments) != null && isParsableJson(toolCall2.function.arguments)) {
                    controller.enqueue({
                      type: "tool-input-start",
                      id: toolCall2.id,
                      toolName: toolCall2.function.name
                    });
                    controller.enqueue({
                      type: "tool-input-delta",
                      id: toolCall2.id,
                      delta: toolCall2.function.arguments
                    });
                    controller.enqueue({
                      type: "tool-input-end",
                      id: toolCall2.id
                    });
                    controller.enqueue({
                      type: "tool-call",
                      toolCallId: toolCall2.id,
                      toolName: toolCall2.function.name,
                      input: toolCall2.function.arguments
                    });
                    toolCall2.sent = true;
                  }
                  continue;
                }
                const toolCall = toolCalls[index];
                if (toolCall == null) {
                  throw new Error("Tool call is missing");
                }
                if (((_h = toolCallDelta.function) == null ? void 0 : _h.name) != null) {
                  controller.enqueue({
                    type: "tool-input-start",
                    id: toolCall.id,
                    toolName: toolCall.function.name
                  });
                }
                if (((_i = toolCallDelta.function) == null ? void 0 : _i.arguments) != null) {
                  toolCall.function.arguments += (_k = (_j = toolCallDelta.function) == null ? void 0 : _j.arguments) != null ? _k : "";
                }
                controller.enqueue({
                  type: "tool-input-delta",
                  id: toolCall.id,
                  delta: (_l = toolCallDelta.function.arguments) != null ? _l : ""
                });
                if (((_m = toolCall.function) == null ? void 0 : _m.name) != null && ((_n = toolCall.function) == null ? void 0 : _n.arguments) != null && isParsableJson(toolCall.function.arguments)) {
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId: (_o = toolCall.id) != null ? _o : generateId(),
                    toolName: toolCall.function.name,
                    input: toolCall.function.arguments
                  });
                  toolCall.sent = true;
                }
              }
            }
          },
          flush(controller) {
            var _a16;
            if (finishReason === "tool-calls") {
              for (const toolCall of toolCalls) {
                if (!toolCall.sent) {
                  controller.enqueue({
                    type: "tool-call",
                    toolCallId: (_a16 = toolCall.id) != null ? _a16 : generateId(),
                    toolName: toolCall.function.name,
                    // Coerce invalid arguments to an empty JSON object
                    input: isParsableJson(toolCall.function.arguments) ? toolCall.function.arguments : "{}"
                  });
                  toolCall.sent = true;
                }
              }
            }
            controller.enqueue({
              type: "finish",
              finishReason,
              usage,
              providerMetadata: {
                openrouter: {
                  usage: openrouterUsage
                }
              }
            });
          }
        })
      ),
      warnings: [],
      request: { body: args },
      response: { headers: responseHeaders }
    };
  }
};

// src/completion/convert-to-openrouter-completion-prompt.ts
function convertToOpenRouterCompletionPrompt({
  prompt,
  inputFormat,
  user = "user",
  assistant = "assistant"
}) {
  if (inputFormat === "prompt" && prompt.length === 1 && prompt[0] && prompt[0].role === "user" && prompt[0].content.length === 1 && prompt[0].content[0] && prompt[0].content[0].type === "text") {
    return { prompt: prompt[0].content[0].text };
  }
  let text = "";
  if (prompt[0] && prompt[0].role === "system") {
    text += `${prompt[0].content}

`;
    prompt = prompt.slice(1);
  }
  for (const { role, content } of prompt) {
    switch (role) {
      case "system": {
        throw new InvalidPromptError({
          message: `Unexpected system message in prompt: ${content}`,
          prompt
        });
      }
      case "user": {
        const userMessage = content.map((part) => {
          switch (part.type) {
            case "text": {
              return part.text;
            }
            case "file": {
              throw new UnsupportedFunctionalityError({
                functionality: "file attachments"
              });
            }
            default: {
              return "";
            }
          }
        }).join("");
        text += `${user}:
${userMessage}

`;
        break;
      }
      case "assistant": {
        const assistantMessage = content.map(
          (part) => {
            switch (part.type) {
              case "text": {
                return part.text;
              }
              case "tool-call": {
                throw new UnsupportedFunctionalityError({
                  functionality: "tool-call messages"
                });
              }
              case "tool-result": {
                throw new UnsupportedFunctionalityError({
                  functionality: "tool-result messages"
                });
              }
              case "reasoning": {
                throw new UnsupportedFunctionalityError({
                  functionality: "reasoning messages"
                });
              }
              case "file": {
                throw new UnsupportedFunctionalityError({
                  functionality: "file attachments"
                });
              }
              default: {
                return "";
              }
            }
          }
        ).join("");
        text += `${assistant}:
${assistantMessage}

`;
        break;
      }
      case "tool": {
        throw new UnsupportedFunctionalityError({
          functionality: "tool messages"
        });
      }
      default: {
        break;
      }
    }
  }
  text += `${assistant}:
`;
  return {
    prompt: text
  };
}

// src/completion/schemas.ts
import { z as z6 } from "zod/v4";
var OpenRouterCompletionChunkSchema = z6.union([
  z6.object({
    id: z6.string().optional(),
    model: z6.string().optional(),
    choices: z6.array(
      z6.object({
        text: z6.string(),
        reasoning: z6.string().nullish().optional(),
        reasoning_details: ReasoningDetailArraySchema.nullish(),
        finish_reason: z6.string().nullish(),
        index: z6.number().nullish(),
        logprobs: z6.object({
          tokens: z6.array(z6.string()),
          token_logprobs: z6.array(z6.number()),
          top_logprobs: z6.array(z6.record(z6.string(), z6.number())).nullable()
        }).nullable().optional()
      })
    ),
    usage: z6.object({
      prompt_tokens: z6.number(),
      prompt_tokens_details: z6.object({
        cached_tokens: z6.number()
      }).nullish(),
      completion_tokens: z6.number(),
      completion_tokens_details: z6.object({
        reasoning_tokens: z6.number()
      }).nullish(),
      total_tokens: z6.number(),
      cost: z6.number().optional()
    }).nullish()
  }),
  OpenRouterErrorResponseSchema
]);

// src/completion/index.ts
var OpenRouterCompletionLanguageModel = class {
  constructor(modelId, settings, config) {
    this.specificationVersion = "v2";
    this.provider = "openrouter";
    this.supportedUrls = {
      "image/*": [
        /^data:image\/[a-zA-Z]+;base64,/,
        /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i
      ],
      "text/*": [/^data:text\//, /^https?:\/\/.+$/],
      "application/*": [/^data:application\//, /^https?:\/\/.+$/]
    };
    this.defaultObjectGenerationMode = void 0;
    this.modelId = modelId;
    this.settings = settings;
    this.config = config;
  }
  getArgs({
    prompt,
    maxOutputTokens,
    temperature,
    topP,
    frequencyPenalty,
    presencePenalty,
    seed,
    responseFormat,
    topK,
    stopSequences,
    tools,
    toolChoice
  }) {
    const { prompt: completionPrompt } = convertToOpenRouterCompletionPrompt({
      prompt,
      inputFormat: "prompt"
    });
    if (tools == null ? void 0 : tools.length) {
      throw new UnsupportedFunctionalityError({
        functionality: "tools"
      });
    }
    if (toolChoice) {
      throw new UnsupportedFunctionalityError({
        functionality: "toolChoice"
      });
    }
    return __spreadValues(__spreadValues({
      // model id:
      model: this.modelId,
      models: this.settings.models,
      // model specific settings:
      logit_bias: this.settings.logitBias,
      logprobs: typeof this.settings.logprobs === "number" ? this.settings.logprobs : typeof this.settings.logprobs === "boolean" ? this.settings.logprobs ? 0 : void 0 : void 0,
      suffix: this.settings.suffix,
      user: this.settings.user,
      // standardized settings:
      max_tokens: maxOutputTokens,
      temperature,
      top_p: topP,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
      seed,
      stop: stopSequences,
      response_format: responseFormat,
      top_k: topK,
      // prompt:
      prompt: completionPrompt,
      // OpenRouter specific settings:
      include_reasoning: this.settings.includeReasoning,
      reasoning: this.settings.reasoning
    }, this.config.extraBody), this.settings.extraBody);
  }
  async doGenerate(options) {
    var _a15, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const providerOptions = options.providerOptions || {};
    const openrouterOptions = providerOptions.openrouter || {};
    const args = __spreadValues(__spreadValues({}, this.getArgs(options)), openrouterOptions);
    const { value: response, responseHeaders } = await postJsonToApi({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: combineHeaders(this.config.headers(), options.headers),
      body: args,
      failedResponseHandler: openrouterFailedResponseHandler,
      successfulResponseHandler: createJsonResponseHandler(
        OpenRouterCompletionChunkSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    if ("error" in response) {
      throw new Error(`${response.error.message}`);
    }
    const choice = response.choices[0];
    if (!choice) {
      throw new Error("No choice in OpenRouter completion response");
    }
    return {
      content: [
        {
          type: "text",
          text: (_a15 = choice.text) != null ? _a15 : ""
        }
      ],
      finishReason: mapOpenRouterFinishReason(choice.finish_reason),
      usage: {
        inputTokens: (_c = (_b = response.usage) == null ? void 0 : _b.prompt_tokens) != null ? _c : 0,
        outputTokens: (_e = (_d = response.usage) == null ? void 0 : _d.completion_tokens) != null ? _e : 0,
        totalTokens: ((_g = (_f = response.usage) == null ? void 0 : _f.prompt_tokens) != null ? _g : 0) + ((_i = (_h = response.usage) == null ? void 0 : _h.completion_tokens) != null ? _i : 0),
        reasoningTokens: (_l = (_k = (_j = response.usage) == null ? void 0 : _j.completion_tokens_details) == null ? void 0 : _k.reasoning_tokens) != null ? _l : 0,
        cachedInputTokens: (_o = (_n = (_m = response.usage) == null ? void 0 : _m.prompt_tokens_details) == null ? void 0 : _n.cached_tokens) != null ? _o : 0
      },
      warnings: [],
      response: {
        headers: responseHeaders
      }
    };
  }
  async doStream(options) {
    const providerOptions = options.providerOptions || {};
    const openrouterOptions = providerOptions.openrouter || {};
    const args = __spreadValues(__spreadValues({}, this.getArgs(options)), openrouterOptions);
    const { value: response, responseHeaders } = await postJsonToApi({
      url: this.config.url({
        path: "/completions",
        modelId: this.modelId
      }),
      headers: combineHeaders(this.config.headers(), options.headers),
      body: __spreadProps(__spreadValues({}, args), {
        stream: true,
        // only include stream_options when in strict compatibility mode:
        stream_options: this.config.compatibility === "strict" ? { include_usage: true } : void 0
      }),
      failedResponseHandler: openrouterFailedResponseHandler,
      successfulResponseHandler: createEventSourceResponseHandler(
        OpenRouterCompletionChunkSchema
      ),
      abortSignal: options.abortSignal,
      fetch: this.config.fetch
    });
    let finishReason = "other";
    const usage = {
      inputTokens: Number.NaN,
      outputTokens: Number.NaN,
      totalTokens: Number.NaN,
      reasoningTokens: Number.NaN,
      cachedInputTokens: Number.NaN
    };
    const openrouterUsage = {};
    return {
      stream: response.pipeThrough(
        new TransformStream({
          transform(chunk, controller) {
            var _a15, _b;
            if (!chunk.success) {
              finishReason = "error";
              controller.enqueue({ type: "error", error: chunk.error });
              return;
            }
            const value = chunk.value;
            if ("error" in value) {
              finishReason = "error";
              controller.enqueue({ type: "error", error: value.error });
              return;
            }
            if (value.usage != null) {
              usage.inputTokens = value.usage.prompt_tokens;
              usage.outputTokens = value.usage.completion_tokens;
              usage.totalTokens = value.usage.prompt_tokens + value.usage.completion_tokens;
              openrouterUsage.promptTokens = value.usage.prompt_tokens;
              if (value.usage.prompt_tokens_details) {
                const cachedInputTokens = (_a15 = value.usage.prompt_tokens_details.cached_tokens) != null ? _a15 : 0;
                usage.cachedInputTokens = cachedInputTokens;
                openrouterUsage.promptTokensDetails = {
                  cachedTokens: cachedInputTokens
                };
              }
              openrouterUsage.completionTokens = value.usage.completion_tokens;
              if (value.usage.completion_tokens_details) {
                const reasoningTokens = (_b = value.usage.completion_tokens_details.reasoning_tokens) != null ? _b : 0;
                usage.reasoningTokens = reasoningTokens;
                openrouterUsage.completionTokensDetails = {
                  reasoningTokens
                };
              }
              openrouterUsage.cost = value.usage.cost;
              openrouterUsage.totalTokens = value.usage.total_tokens;
            }
            const choice = value.choices[0];
            if ((choice == null ? void 0 : choice.finish_reason) != null) {
              finishReason = mapOpenRouterFinishReason(choice.finish_reason);
            }
            if ((choice == null ? void 0 : choice.text) != null) {
              controller.enqueue({
                type: "text-delta",
                delta: choice.text,
                id: generateId()
              });
            }
          },
          flush(controller) {
            controller.enqueue({
              type: "finish",
              finishReason,
              usage,
              providerMetadata: {
                openrouter: {
                  usage: openrouterUsage
                }
              }
            });
          }
        })
      ),
      response: {
        headers: responseHeaders
      }
    };
  }
};
export {
  OpenRouterChatLanguageModel,
  OpenRouterCompletionLanguageModel
};
//# sourceMappingURL=index.mjs.map