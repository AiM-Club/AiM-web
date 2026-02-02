import { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useGoogleLogin, useKakaoLogin } from "@/api/auth";
import { PageEndPoints } from "@/constants/endpoints";
import { useAuthStore } from "@/stores/authStore";

export const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider } = useParams<{ provider: string }>();
  const { mutate: googleLoginMutate } = useGoogleLogin();
  const { mutate: kakaoLoginMutate } = useKakaoLogin();
  const { setUser, setUserPhoto } = useAuthStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (!code) {
      console.error("Authorization code가 없습니다.");
      navigate(PageEndPoints.LOGIN);
      return;
    }

    // provider가 없으면 URL 경로에서 추출 시도
    let providerName = provider;
    if (!providerName) {
      // /oauth/kakao/callback 또는 /oauth/google/callback 형태에서 추출
      const pathParts = location.pathname.split("/");
      if (pathParts.length >= 3 && pathParts[1] === "oauth") {
        providerName = pathParts[2];
      }
    }

    if (!providerName) {
      console.error("OAuth provider를 찾을 수 없습니다. 경로:", location.pathname);
      navigate(PageEndPoints.LOGIN);
      return;
    }

    console.log("Authorization code:", code);
    console.log("Provider:", providerName);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

    if (providerName === "google") {
      const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

      if (!redirectUri) {
        console.error("VITE_GOOGLE_REDIRECT_URI 환경 변수가 없습니다.");
        navigate(PageEndPoints.LOGIN);
        return;
      }

      console.log("구글 로그인 요청 데이터:", { code, redirectUri });

      googleLoginMutate(
        {
          code,
          redirectUri,
        },
        {
          onSuccess: (response) => {
            console.log("구글 로그인 성공:", response);
            const data = response.data;

            if (!data || !data.user || !data.token) {
              console.error("응답 데이터 구조가 올바르지 않습니다:", data);
              navigate(PageEndPoints.LOGIN);
              return;
            }

            console.log("구글 로그인 성공 - 파싱된 데이터:", data);
            setUser(data.user);
            localStorage.setItem("accessToken", data.token.accessToken);
            localStorage.setItem("refreshToken", data.token.refreshToken);
            navigate(PageEndPoints.HOME);
          },
          onError: (error: any) => {
            console.error("구글 로그인 실패:", error);
            // navigate(PageEndPoints.LOGIN);
          },
        }
      );
    } else if (providerName === "kakao") {
      const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

      if (!redirectUri) {
        console.error("VITE_KAKAO_REDIRECT_URI 환경 변수가 없습니다.");
        alert("카카오 로그인 실패, 다시 시도해주세요.");
        navigate(PageEndPoints.LOGIN);
        return;
      }

      console.log("카카오 로그인 요청 데이터:", { code, redirectUri });

      kakaoLoginMutate(
        {
          code,
          redirectUri,
        },
        {
          onSuccess: (response) => {
            // console.log("카카오 로그인 성공:", response);
            const data = response.data;
            console.log(data);

            if (!data || !data.user || !data.token) {
              console.error("응답 데이터 구조가 올바르지 않습니다:", data);
              alert("카카오 로그인 실패, 다시 시도해주세요.");
              navigate(PageEndPoints.LOGIN);
              return;
            }

            console.log("카카오 로그인 성공 - 파싱된 데이터:", data);
            setUser(data.user);
            localStorage.setItem("accessToken", data.token.accessToken);
            localStorage.setItem("refreshToken", data.token.refreshToken);
            navigate(PageEndPoints.HOME);
          },
          onError: (error: any) => {
            console.error("카카오 로그인 실패:", error);
            alert("카카오 로그인 실패, 다시 시도해주세요.");
            navigate(PageEndPoints.LOGIN);
          },
        }
      );
    } else {
      console.error("알 수 없는 OAuth provider:", providerName);
      alert("카카오 로그인 실패, 다시 시도해주세요.");
      navigate(PageEndPoints.LOGIN);
    }
  }, [location, navigate, provider, googleLoginMutate, kakaoLoginMutate, setUser, setUserPhoto]);

  // 로딩 중 표시 (선택사항)
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      gap: "1rem"
    }}>
      <div>로그인 처리 중...</div>
    </div>
  );
};
