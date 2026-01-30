import { ApiEndpoints } from "@/constants/endpoints";
import { usePost } from "./hooks";

//후기 작성
export const usePostReview = () => {
    return usePost<FormData, { reviewId: number }>(ApiEndpoints.REVIEW);
}
