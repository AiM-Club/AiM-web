import * as S from "./ProfileImage.style";
import NoPhoto from "@/assets/NoPhoto.svg";
import ProfileCrown from "@/assets/ProfileCrown.svg";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";

interface ProfileImageProps {
  image: string | null;
  width: number;
  color?: "green" | "pink";
  type?: "default" | "winner";
}

const ProfileImage = ({ image, width, color = "pink", type = "default" }: ProfileImageProps) => {
  return (
    <S.ProfileImgWrapper $width={width} $color={color} $type={type}>
      <S.ProfileImg src={useUserPhotoUrl(image) || NoPhoto} alt="" />
      {type === "winner" && (
        <S.CrownBadge>
          <img src={ProfileCrown} alt="" />
        </S.CrownBadge>
      )}
    </S.ProfileImgWrapper>
  );
};

export default ProfileImage;