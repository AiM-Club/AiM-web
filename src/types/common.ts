export interface PageResponse {
    size: number;
    number: number;
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