//소셜 로그인 버튼 component
import * as S from "./SocialLoginBtn.style";
import GoogleImg from "@/assets/GoogleLogo.svg";
import KakaoImg from "@/assets/KakaoLogo.svg";

interface SocialProps {
  type: string;
  onClick: () => void;
}

export const SocialLoginBtn = ({ type, onClick }: SocialProps) => {
  return (
    <S.SocialWrapper onClick={onClick}>
      <S.SocialImg src={type == "google" ? GoogleImg : KakaoImg} />
      <S.SocialText>
        {type == "google" ? "Google 로그인" : "카카오톡 로그인"}
      </S.SocialText>
    </S.SocialWrapper>
  )
}