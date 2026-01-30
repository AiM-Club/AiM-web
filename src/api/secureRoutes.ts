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
    { method: Method.GET, url: ApiEndpoints.CHALLENGE_VS_DETAIL },
    { method: Method.GET, url: ApiEndpoints.CHALLENGE_DETAIL_WEEKS_COMMENTS },
    { method: Method.GET, url: ApiEndpoints.CHALLENGE_SOLO_DETAIL },
    { method: Method.POST, url: ApiEndpoints.CHALLENGE_DETAIL_WEEKS_COMMENTS },
    { method: Method.POST, url: ApiEndpoints.CHALLENGE_DETAIL_WEEKS_PROOF },
    { method: Method.POST, url: ApiEndpoints.CHALLENGE_LIKE },
    { method: Method.POST, url: ApiEndpoints.VS_RECRUIT },
    { method: Method.POST, url: ApiEndpoints.VS_REQUEST },
    { method: Method.GET, url: ApiEndpoints.VS_REQUEST_LIST },
    { method: Method.GET, url: ApiEndpoints.MY_CHALLENGE_LIST },
    { method: Method.GET, url: ApiEndpoints.POST_COMMENTS },
    { method: Method.POST, url: ApiEndpoints.POST_COMMENTS },
    { method: Method.POST, url: ApiEndpoints.POST_LIKE },
    { method: Method.POST, url: ApiEndpoints.LOGOUT },
];