import * as  S from "./LogInBtn.style";
import type { User } from "@/types/auth";
import { useGetPhoto } from "@/api/photo";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

const LogInBtn = ({ user }: { user: User }) => {
  const { userPhoto, setUserPhoto } = useAuthStore();
  const { data: photo } = useGetPhoto(user.profileImage.uuid);

  useEffect(() => {
    if (!userPhoto && photo) {
      setUserPhoto(photo);
    }
  }, [photo, setUserPhoto]);
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