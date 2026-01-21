/**
 * Google OAuth 로그인 처리
 */
export const handleGoogleLogin = async (): Promise<void> => {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_REDIRECT_URI) {
    console.error("Google OAuth 환경 변수가 설정되지 않았습니다.");
    return;
  }

  const url =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=openid email profile`;

  window.location.href = url;
};

/**
 * Kakao OAuth 로그인 처리
 */
export const handleKakaoLogin = (): void => {
  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  if (!KAKAO_CLIENT_ID || !KAKAO_REDIRECT_URI) {
    console.error("Kakao OAuth 환경 변수가 설정되지 않았습니다.");
    return;
  }

  const url =
    `https://kauth.kakao.com/oauth/authorize?` +
    `client_id=${KAKAO_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(KAKAO_REDIRECT_URI)}` +
    `&response_type=code`;

  window.location.href = url;
};
