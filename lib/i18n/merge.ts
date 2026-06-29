import type { DeepPartial } from "./types";

export function deepMerge<T extends Record<string, unknown>>(
  base: T,
  override: DeepPartial<T>,
): T {
  const result = { ...base } as T;
  const patch = override as Record<string, unknown>;

  for (const key of Object.keys(patch)) {
    const baseVal = base[key];
    const overrideVal = patch[key];

    if (
      overrideVal &&
      typeof overrideVal === "object" &&
      !Array.isArray(overrideVal) &&
      baseVal &&
      typeof baseVal === "object" &&
      !Array.isArray(baseVal)
    ) {
      result[key as keyof T] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as DeepPartial<Record<string, unknown>>,
      ) as T[keyof T];
    } else if (overrideVal !== undefined) {
      result[key as keyof T] = overrideVal as T[keyof T];
    }
  }

  return result;
}
