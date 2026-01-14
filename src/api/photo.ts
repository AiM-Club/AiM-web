import { ApiEndpoints } from "@/constants/endpoints";
import { useFetch } from "./hooks";
import { buildPath } from "@/utils/buildPath";


export const useGetPhoto = (id: string) => {
    return useFetch<string>(buildPath(ApiEndpoints.PHOTO, { id }));
}