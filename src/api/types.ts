import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type Nullable<T> = T | null;

export type QueryOptions<T> = Omit<
  UseQueryOptions<T, Error, T, QueryKey>,
  "queryKey"
>;
