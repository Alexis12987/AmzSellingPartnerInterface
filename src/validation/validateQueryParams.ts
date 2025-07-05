import { z } from "zod/v4";

export function validateQueryParams<T extends z.ZodTypeAny>(
  schema: T,
  searchParams: URLSearchParams
): z.ZodSafeParseResult<z.core.output<T>> {
  // Convert query params into a plain object
  const queryObject: Record<string, string | string[]> = {};

  searchParams.forEach((value, key) => {
    if (queryObject[key]) {
      queryObject[key] = Array.isArray(queryObject[key])
        ? [...(queryObject[key] as string[]), value]
        : [queryObject[key] as string, value];
    } else {
      queryObject[key] = value;
    }
  });

  return schema.safeParse(queryObject);
}
