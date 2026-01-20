import * as S from "./BannerTitleField.style";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import type { ChangeEvent } from "react";
import { z } from "zod";

const bannerTitleSchema = z.object({
  title: z.string().min(1, "제목을 입력해 주세요").max(15, "15자 이내로 입력해 주세요"),
  bannerImage: z.string().optional(),
});

type BannerTitleForm = z.infer<typeof bannerTitleSchema>;

export interface BannerTitleFieldRef {
  validate: () => Promise<{ isValid: boolean; data?: BannerTitleForm; error?: string }>;
  getData: () => BannerTitleForm;
}

const BannerTitleField = forwardRef<BannerTitleFieldRef>((_, ref) => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    validate: async () => {
      const data: BannerTitleForm = {
        title,
        bannerImage: imagePreview || undefined,
      };
      const result = bannerTitleSchema.safeParse(data);
      if (!result.success) {
        const errorMessage = result.error.issues[0]?.message || "유효성 검사 실패";
        setError(errorMessage);
        return { isValid: false, error: errorMessage };
      }
      setError("");
      return { isValid: true, data: result.data };
    },
    getData: () => ({
      title,
      bannerImage: imagePreview || undefined,
    }),
  }));

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
      {error && (
        <p style={{ color: "var(--error-primary)", marginTop: "0.5rem", position: "absolute", bottom: "-1.5rem", left: "0" }}>
          {error}
        </p>
      )}
    </S.BannerWrapper>
  );
});

BannerTitleField.displayName = "BannerTitleField";

export default BannerTitleField;