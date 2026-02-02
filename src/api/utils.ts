import axios from "axios";
import { secureRoutes } from "./secureRoutes";
import { ApiEndpoints } from "@/constants/endpoints";
import { PageEndPoints } from "@/constants/endpoints";

const domain = import.meta.env.VITE_API_DOMAIN;

export const getDomain = (url?: string) => {
  return `${domain}${url ? `${url}` : ""}`;
};

type Api = {
  get: <T>(url: string, params?: object) => Promise<T>;
  post: <T>(url: string, data?: object) => Promise<T>;
  put: <T>(url: string, data?: object) => Promise<T>;
  patch: <T>(url: string, data?: object) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
};


const axiosInstance = axios.create({
  baseURL: domain,
  headers: {
    // "Content-Type": "application/json",
  },
});

export const api: Api = {
  get: (url, params) => {
    const queryString = new URLSearchParams();
    Object.entries(params || {}).forEach(([key, value]) => {
      if (Array.isArray(value))
        value.forEach((v) => queryString.append(key, v));
      else queryString.append(key, value);
    });

    return axiosInstance.get(getDomain(url), {
      params: Object.fromEntries(queryString),
    });
  },

  post: (url, data) => {
    return axiosInstance.post(getDomain(url), data);
  },

  put: (url, data) => {
    return axiosInstance.put(getDomain(url), data);
  },

  patch: (url, data) => {
    return axiosInstance.patch(getDomain(url), data);
  },

  delete: (url) => {
    return axiosInstance.delete(getDomain(url));
  },
};

axiosInstance.interceptors.request.use((config) => {
  const url = new URL(config.url as string);
  const pathname = url.pathname.replace("/api", "");

  const isProtected = secureRoutes.some((endpoint) => {
    if (endpoint.method !== config.method) return false;

    // :param 형태의 동적 파라미터를 정규식으로 변환
    const pattern = endpoint.url.replace(/:[^/]+/g, "[^/]+");
    const regex = new RegExp(`^${pattern}$`);

    return regex.test(pathname);
  });

  if (isProtected) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

//토큰 갱신
axiosInstance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  console.log(error);
  if (error.status === 401 && error.config.url !== ApiEndpoints.REFRESH_TOKEN && !error.config.url.includes("/auth")) {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      {
        try {
          const refreshRes = await axiosInstance.post(
            getDomain(ApiEndpoints.REFRESH_TOKEN),
            { refreshToken: refreshToken },
          );
          const newAccessToken = refreshRes.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
          localStorage.setItem("refreshToken", refreshRes.data.refreshToken);

          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance.request(error.config);
        } catch (error) {
          console.log(error);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = PageEndPoints.LOGIN;
          return Promise.reject(error);
        }
      }

    }
    return Promise.reject(error);
  }
});