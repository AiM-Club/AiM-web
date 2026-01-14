import { ApiEndpoints } from "@/constants/endpoints";

enum Method {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete",
}

export const secureRoutes = [
    { method: Method.GET, url: ApiEndpoints.PHOTO },
];