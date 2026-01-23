import * as S from "./ProfileImage.style";
import NoPhoto from "@/assets/NoPhoto.svg";

interface ProfileImageProps {
  image: string | null;
  width: number;
  color?: "green" | "pink";
}

const ProfileImage = ({ image, width, color = "pink" }: ProfileImageProps) => {
  return (
    <S.ProfileImgWrapper $width={width} $color={color}>
      <S.ProfileImg src={image || NoPhoto} />
    </S.ProfileImgWrapper>
  )
}

export default ProfileImage;