/**
 * OAuth PKCE (Proof Key for Code Exchange) 관련 유틸리티 함수
 */

/**
 * PKCE용 code verifier 생성
 * @returns Base64 URL-safe encoded random string
 */
export const generateCodeVerifier = (): string => {
  const array = new Uint8Array(64);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
};

/**
 * PKCE용 code challenge 생성
 * @param verifier - code verifier 문자열
 * @returns Base64 URL-safe encoded SHA-256 hash
 */
export const generateCodeChallenge = async (verifier: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
  return base64;
};

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

  // 구글 로그인임을 표시
  localStorage.setItem("social_login_type", "google");

  const verifier = generateCodeVerifier();
  localStorage.setItem("code_verifier", verifier);

  const challenge = await generateCodeChallenge(verifier);

  const url =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=openid email profile` +
    `&code_challenge=${challenge}` +
    `&code_challenge_method=S256`;

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

  // 카카오 로그인임을 표시
  localStorage.setItem("social_login_type", "kakao");

  const url =
    `https://kauth.kakao.com/oauth/authorize?` +
    `client_id=${KAKAO_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(KAKAO_REDIRECT_URI)}` +
    `&response_type=code`;

  window.location.href = url;
};
