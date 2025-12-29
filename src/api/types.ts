import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";

export type Nullable<T> = T | null;

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errorCode: Nullable<string>;
}

export type QueryOptions<T> = Omit<
  UseQueryOptions<T, Error, T, QueryKey>,
  "queryKey"
>;
