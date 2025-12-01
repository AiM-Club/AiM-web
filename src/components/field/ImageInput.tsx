import * as S from "./ImageInput.style";
import ImageIcon from "@/assets/ImageLogo.svg";
import { useState, useRef } from "react";

interface ImageInputProps {
  onChange?: (file: File | null) => void;
}

export const ImageInput = ({ onChange }: ImageInputProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    fileInputRef.current?.click();
  };

  return (
    <S.ImageInputWrapper>
      <S.LabelText>프로필 이미지</S.LabelText>
      <S.ImageInputField onClick={handleClick}>
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