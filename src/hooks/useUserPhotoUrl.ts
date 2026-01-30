import { useEffect, useState } from "react";

/**
 * userPhoto (Blob | string | null)를 img src로 사용 가능한 URL string으로 변환하는 hook
 * Blob URL은 현재 문서 세션에서만 유효하므로, 새로고침 시에는 반드시 null이 되고 API로 다시 받아와야 함.
 * @param userPhoto - Blob, string, 또는 null
 * @returns 사용 가능한 URL string 또는 null
 */
export const useUserPhotoUrl = (userPhoto: Blob | string | null): string | null => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!userPhoto) {
      setPhotoUrl(null);
      return;
    }
    if (typeof userPhoto === "string") {
      setPhotoUrl(userPhoto);
      return;
    }
    // Blob인 경우: 현재 문서 세션에서만 유효한 URL 생성
    const url = URL.createObjectURL(userPhoto);
    setPhotoUrl(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [userPhoto]);

  return photoUrl;
};
