import * as  S from "./LogInBtn.style";
import type { User } from "@/types/auth";
import { useAuthStore } from "@/stores/authStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";

const LogInBtn = ({ user }: { user: User }) => {
  const { userPhoto } = useAuthStore();
  const photoSrc = useUserPhotoUrl(userPhoto);

  return (
    <S.FieldBtnWrapper>
      <S.NicknameSection>{user.nickname}</S.NicknameSection>
      <S.ProfileImageSection>
        {photoSrc && <S.ProfileImage src={photoSrc} alt={user.nickname} />}
      </S.ProfileImageSection>
      <S.AccentLine />
    </S.FieldBtnWrapper>
  )
}

export default LogInBtn;