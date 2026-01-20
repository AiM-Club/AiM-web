export interface LoginRequest {
    loginId: string;
    password: string;
}

export interface SocialLoginRequest {
    code: string;
    redirectUri: string;
}

export interface LoginResponse {
    user: User;
    token: Token;
    isNewUser?: boolean;
}

export interface User {
    loginId: string;
    email: string | null;
    nickname: string;
    birthday: string;
    gender: string;
    badge?: string;
    tier?: {
        name: string;
    }
    socialLogin: string | null;
    isNewUser: boolean;
    profileImage: profileImage;
    createdAt: string;
    lastModifiedAt: string;
}

export interface profileImage {
    uuid: string;
    fileName: string;
    size: number;
    filePath: string;
    handlingType: string;
}

export interface Token {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: string;
    refreshTokenExpiresAt: string;
}

export interface JoinRequest{
  loginId: string;
  nickname: string;
  password: string;
  birthday: string;
  profileImage?: File|null;
  gender: "MALE" | "FEMALE" | "OTHER";
}

export interface ExistResponse {
  isExist: boolean;
}