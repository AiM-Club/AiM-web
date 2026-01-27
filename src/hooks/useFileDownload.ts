import { useDownloadPhoto } from "@/api/photo";

interface FileInfo {
    uuid: string;
    fileName: string;
}

/**
 * 파일 다운로드를 위한 hook
 * @returns 파일 다운로드 함수
 */
export const useFileDownload = () => {
    const { mutate: downloadPhoto } = useDownloadPhoto();

    const downloadFile = (file: FileInfo) => {
        downloadPhoto({ file_uuid: file.uuid }, {
            onSuccess: (blob) => {
                try {
                    // Blob을 URL로 변환하여 다운로드
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = file.fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    // 메모리 정리
                    URL.revokeObjectURL(url);
                } catch (error) {
                    console.error("파일 다운로드 실패:", error);
                    alert("파일 다운로드에 실패했습니다.");
                }
            },
            onError: (error) => {
                console.error("파일 다운로드 실패:", error);
                alert("파일 다운로드에 실패했습니다.");
            },
        });
    };

    return { downloadFile };
};
