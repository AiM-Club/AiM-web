import { useGetPhoto } from "@/api/photo";

interface ImageInfo {
    uuid: string;
    fileName: string;
}

/**
 * 이미지를 새 창에서 열기 위한 hook
 * @returns 이미지 열기 함수
 */
export const useImageOpen = () => {
    const { mutate: getPhoto } = useGetPhoto();

    const openImage = (image: ImageInfo) => {
        getPhoto({ file_uuid: image.uuid }, {
            onSuccess: (blob) => {
                try {
                    // Blob을 URL로 변환하여 새 창에서 열기
                    const url = URL.createObjectURL(blob);
                    const newWindow = window.open('', '_blank');
                    if (newWindow) {
                        // 새 창에 HTML 작성하여 이미지 표시
                        newWindow.document.write(`
              <!DOCTYPE html>
              <html>
                <head>
                  <title>${image.fileName}</title>
                  <style>
                    body {
                      margin: 0;
                      padding: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      min-height: 100vh;
                      background-color: #000;
                    }
                    img {
                      max-width: 100%;
                      max-height: 100vh;
                      object-fit: contain;
                    }
                  </style>
                </head>
                <body>
                  <img src="${url}" alt="${image.fileName}" />
                </body>
              </html>
            `);
                        newWindow.document.close();
                        // 새 창이 닫힐 때 URL 해제
                        newWindow.addEventListener('beforeunload', () => {
                            URL.revokeObjectURL(url);
                        });
                    } else {
                        // 팝업이 차단된 경우
                        URL.revokeObjectURL(url);
                        alert("팝업이 차단되었습니다. 팝업 차단을 해제해주세요.");
                    }
                } catch (error) {
                    console.error("이미지 열기 실패:", error);
                    alert("이미지를 열 수 없습니다.");
                }
            },
            onError: (error) => {
                console.error("이미지 열기 실패:", error);
                alert("이미지를 열 수 없습니다.");
            },
        });
    };

    return { openImage };
};
