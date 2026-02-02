import { forwardRef } from "react";
import * as S from "./LogInBtn.style";
import type { User } from "@/types/auth";
import { useAuthStore } from "@/stores/authStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";

interface LogInBtnProps {
  user: User;
}

const LogInBtn = forwardRef<HTMLDivElement, LogInBtnProps>(
  ({ user, ...rest }, ref) => {
    const { userPhoto } = useAuthStore();
    const photoSrc = useUserPhotoUrl(userPhoto);

    return (
      <S.FieldBtnWrapper ref={ref} {...rest}>
        <S.NicknameSection>
          <S.NicknameText>{user.nickname}</S.NicknameText>
        </S.NicknameSection>
        <S.ProfileImageSection>
          {photoSrc && <S.ProfileImage src={photoSrc} alt={user.nickname} />}
        </S.ProfileImageSection>
        <S.AccentLine />
      </S.FieldBtnWrapper>
    );
  }
);

LogInBtn.displayName = "LogInBtn";

export default LogInBtn;