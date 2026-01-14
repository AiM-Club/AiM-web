import * as  S from "./LogInBtn.style";
import type { User } from "@/types/auth";
import { useGetPhoto } from "@/api/photo";

const LogInBtn = ({ user }: { user: User }) => {
  const { data: photo } = useGetPhoto(user.profileImage.uuid);
  return (
    <S.FieldBtnWrapper>
      <S.NicknameSection>{user.nickname}</S.NicknameSection>
      <S.ProfileImageSection>
        {photo && <S.ProfileImage src={photo} alt={user.nickname} />}
      </S.ProfileImageSection>
      <S.AccentLine />
    </S.FieldBtnWrapper>
  )
}

export default LogInBtn;