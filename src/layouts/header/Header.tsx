import logo from "@/assets/Aim_logo.svg";
import * as S from "./Header.style";
const Header = () => {
  return (
    <S.HeaderWrapper>
        <S.Logo src={logo}/>
    </S.HeaderWrapper>
  )
};

export default Header;