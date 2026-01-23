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
    { method: Method.POST, url: ApiEndpoints.CHALLENGE },
    { method: Method.GET, url: ApiEndpoints.MY_PROFILE },
    { method: Method.GET, url: ApiEndpoints.CHALLENGE_SOLO },
    { method: Method.GET, url: ApiEndpoints.CHALLENGE_DETAIL_WEEKS },
];