import { ApiEndpoints } from "@/constants/endpoints";
import { useFetch } from "./hooks";
import { buildPath } from "@/utils/buildPath";


export const useGetPhoto = (file_uuid: string) => {
    return useFetch<string>(buildPath(ApiEndpoints.PHOTO, {file_uuid}));
}