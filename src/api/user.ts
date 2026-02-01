import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { TopUserResponse } from "@/types/user";

export const userGetTop10 = () => {
    return useFetch<ApiResponse<TopUserResponse>>(ApiEndpoints.TOP_10_USER);
}