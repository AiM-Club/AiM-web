export interface LoginRequest {
    loginId: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: Token;
}

export interface User {
    loginId: string;
    email: string | null;
    nickname: string;
    birthday: string;
    gender: string;
    tier: {
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