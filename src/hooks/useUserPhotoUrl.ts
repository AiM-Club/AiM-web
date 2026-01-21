import { useEffect, useMemo, useState } from "react";

/**
 * userPhoto (Blob | string | null)를 img src로 사용 가능한 URL string으로 변환하는 hook
 * @param userPhoto - Blob, string, 또는 null
 * @returns 사용 가능한 URL string 또는 null
 */
export const useUserPhotoUrl = (userPhoto: Blob | string | null): string | null => {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  const photoUrl = useMemo(() => {
    if (!userPhoto) return null;
    if (typeof userPhoto === "string") return userPhoto;
    
    // Blob인 경우 URL.createObjectURL로 변환
    const url = URL.createObjectURL(userPhoto);
    setObjectUrl(url);
    return url;
  }, [userPhoto]);

  useEffect(() => {
    return () => {
      // cleanup: 생성한 object URL 해제
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  return photoUrl;
};
