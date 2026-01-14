import * as S from "./BannerTitleField.style";
import { useState, useRef } from "react";
import type { ChangeEvent } from "react";

const BannerTitleField = () => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 15) {
      setTitle(value);
    }
  };

  const handleBannerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <S.BannerWrapper onClick={handleBannerClick}>
      <S.FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {imagePreview && <S.BannerImage src={imagePreview} alt="배너 이미지" />}
      <S.BannerOverlay />
      <S.BannerContent
        value={title}
        onChange={handleTitleChange}
        placeholder="제목을 입력하세요 (15자 이내)"
        maxLength={15}
        onClick={(e) => e.stopPropagation()}
      />
    </S.BannerWrapper>
  )
}

export default BannerTitleField;