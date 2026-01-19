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

    if (!provider) {
      console.error("OAuth provider가 없습니다.");
      navigate(PageEndPoints.LOGIN);
      return;
    }

    console.log("Authorization code:", code);
    console.log("Provider:", provider);

    if (provider === "google") {
      console.log("dfdjkfjdkfjdkfdj")
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
            // const data = response.data;
            // console.log("구글 로그인 성공:", data);
            // setUser(data.user);
            // setUserPhoto(data.user.profileImage.filePath);
            // localStorage.setItem("accessToken", data.token.accessToken);
            // localStorage.setItem("refreshToken", data.token.refreshToken);
            navigate(PageEndPoints.HOME);
          },
          onError: (error: any) => {
            console.log("dddddddd")
            console.error("구글 로그인 실패:", error);
            console.error("에러 상세:", {
              status: error?.response?.status,
              statusText: error?.response?.statusText,
              data: error?.response?.data,
              message: error?.message,
            });
            navigate(PageEndPoints.LOGIN);
          },
        }
      );
    } else if (provider === "kakao") {
      const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

      if (!redirectUri) {
        console.error("VITE_KAKAO_REDIRECT_URI 환경 변수가 없습니다.");
        navigate(PageEndPoints.LOGIN);
        return;
      }

      kakaoLoginMutate(
        {
          code,
          redirectUri,
        },
        {
          onSuccess: (response) => {
            const data = response.data;
            setUser(data.user);
            setUserPhoto(data.user.profileImage.filePath);
            localStorage.setItem("accessToken", data.token.accessToken);
            localStorage.setItem("refreshToken", data.token.refreshToken);
            navigate(PageEndPoints.HOME);
          },
          onError: (error: any) => {
            console.error("카카오 로그인 실패:", error);
            navigate(PageEndPoints.LOGIN);
          },
        }
      );
    } else {
      console.error("알 수 없는 OAuth provider:", provider);
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
