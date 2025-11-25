import logo from "@/assets/AimLogo.png";
import * as S from "./Header.style";
import Button from "@/components/button/Button";
const Header = () => {
  return (
    <S.HeaderWrapper>
        <S.Logo src={logo}/>
        <Button>로그인</Button>
    </S.HeaderWrapper>
  )
};

export default Header;