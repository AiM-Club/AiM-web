import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type Nullable<T> = T | null;

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export type QueryOptions<T> = Omit<
  UseQueryOptions<T, Error, T, QueryKey>,
  "queryKey"
>;
