export interface PageResponse {
    size: number;
    page: number;
    totalElements: number;
    totalPages: number;
}

export interface ImageResponse {
    uuid: string;
    fileName: string;
    size: number;
    filePath: string;
    handlingType: string;
}

export interface RequestUser {
    id: number;
    loginId: string;
    email: string;
    nickname: string;
    birthday: string;
    gender: string;
    tier: {
        name: string;
    };
    level: number;
    socialLogin: string | null;
    isNewUser: boolean;
    profileImage: ImageResponse;
}