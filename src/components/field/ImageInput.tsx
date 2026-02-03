import * as S from "./ImageInput.style";
import ImageIcon from "@/assets/ImageLogo.svg";
import { useState, useRef, useEffect } from "react";

interface ImageInputProps {
  onChange?: (file: File | null) => void;
  initialPreview?: string | null;
  disabled?: boolean;
}

export const ImageInput = ({ onChange, initialPreview, disabled = false }: ImageInputProps) => {
  const [preview, setPreview] = useState<string | null>(initialPreview || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // initialPreview가 변경되면 preview 업데이트
  useEffect(() => {
    if (initialPreview) {
      setPreview(initialPreview);
    }
  }, [initialPreview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const file = e.target.files?.[0];
    if (file) {

      const validTypes = ["image/jpeg", "image/jpg", "image/png"];

      // 파일 타입 검증
      // 파일 크기 검증 (10MB)
      if (file.size > 10 * 1024 * 1024 || !validTypes.includes(file.type)) {
        onChange?.(file);
        return;
      }

      // 미리보기 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      onChange?.(file);
    } else {
      onChange?.(null);
    }
  };

  const handleClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  return (
    <S.ImageInputWrapper>
      <S.LabelText>프로필 이미지</S.LabelText>
      <S.ImageInputField onClick={handleClick} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/jpg,image/png"
          style={{ display: "none" }}
        />
        {preview ? (
          <S.PreviewImage src={preview} />
        ) : (
          <>
            <S.ImageIcon src={ImageIcon} />
            <p>최대 10MB</p>
            <p>jpg, png, jpeg</p>
          </>
        )}
      </S.ImageInputField>
    </S.ImageInputWrapper>
  )
}