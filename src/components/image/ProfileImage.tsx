import * as S from "./ProfileImage.style";

interface ProfileImageProps {
  image: string;
  width: number;
  color?: "green" | "pink";
}

const ProfileImage = ({ image, width, color = "pink" }: ProfileImageProps) => {
  return (
    <S.ProfileImgWrapper $width={width} $color={color}>
      <S.ProfileImg src={image} />
    </S.ProfileImgWrapper>
  )
}

export default ProfileImage;