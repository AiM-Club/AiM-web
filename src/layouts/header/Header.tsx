import logo from "@/assets/AimLogo.svg";
import * as S from "./Header.style";
import Button from "@/components/button/Button";
const Header = () => {
  return (
    <S.HeaderWrapper>
        <S.Logo src={logo}/>
        <Button>sss</Button>
    </S.HeaderWrapper>
  )
};

export default Header;