import axios from "axios";
import { ApiEndpoints } from "@/constants/endpoints";
import { useFetchMutation } from "./hooks";
import { buildPath } from "@/utils/buildPath";
import { getDomain } from "./utils";

// mutate 호출 시 file_uuid를 받아 Blob으로 가져오는 훅
export const useGetPhoto = () => {
    return useFetchMutation<{ file_uuid: string }, Blob>(ApiEndpoints.PHOTO, {
        mutationFn: async ({ file_uuid }) => {
            const res = await axios.get(
                getDomain(buildPath(ApiEndpoints.PHOTO, { file_uuid })),
                { responseType: "blob" }
            );
            return res.data;
        },
    });
};