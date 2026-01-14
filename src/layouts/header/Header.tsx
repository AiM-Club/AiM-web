import logo from "@/assets/AimLogo.png";
import * as S from "./Header.style";
import Button from "@/components/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveMenu } from "@/utils/useActiveMenu";
import SubMenuLeft from "@/assets/SubMenuLeft.png";
import SubMenuRight from "@/assets/SubMenuRight.png";
import { PageEndPoints } from "@/constants/endpoints";
import hamburgerBar from "@/assets/icons/hamburgerBar.svg";
import { useAuthStore } from "@/stores/authStore";
import LogInBtn from "@/components/button/LogInBtn";

interface HeaderProps {
  variant?: "default" | "login" | "home";
  onMenuClick?: () => void;
}

interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

const subMenuConfig: Record<string, SubMenuItem[]> = {
  "/challenge": [
    { id: "challenge-recruit", label: "VS모집", path: PageEndPoints.CHALLENGE_RECRUIT },
    { id: "challenge-vs", label: "VS대결", path: PageEndPoints.CHALLENGE_VS },
    { id: "challenge-solo", label: "솔로", path: PageEndPoints.CHALLENGE_SOLO },
    { id: "challenge-ranking", label: "랭킹", path: PageEndPoints.CHALLENGE_RANKING },
  ],
  "/community": [
    { id: "community-qna", label: "Q & A", path: PageEndPoints.QNA },
    { id: "community-review", label: "후기", path: PageEndPoints.REVIEW },
  ],
  "/mypage": [
    { id: "mypage-profile", label: "프로필", path: PageEndPoints.PROFILE },
    { id: "mypage-mypost", label: "내 게시글", path: PageEndPoints.MYPOST },
    { id: "mypage-history", label: "좋아요", path: PageEndPoints.MYLIKED },
    { id: "mypage-settings", label: "설정", path: PageEndPoints.MYSETTINGS },
  ],
};

const Header = ({ variant = "default", onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();
  const { isActive } = useActiveMenu();
  const location = useLocation();
  const { user } = useAuthStore();

  const getCurrentSubMenu = (): SubMenuItem[] => {
    const mainPath = Object.keys(subMenuConfig).find(path =>
      location.pathname.startsWith(path)
    );
    return mainPath ? subMenuConfig[mainPath] : [];
  };

  const currentSubMenu = getCurrentSubMenu();

  const handleSubMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <S.HeaderWrapper>
      <S.Logo src={logo} onClick={() => navigate(PageEndPoints.HOME)} />
      {currentSubMenu.length > 0 && (
        <S.SubMenuList>
          <img src={SubMenuLeft} />
          {currentSubMenu.map((item) => (
            <S.SubMenuItem
              key={item.id}
              $isActive={isActive(item.path)}
              onClick={() => handleSubMenuClick(item.path)}
            >
              {item.label}
            </S.SubMenuItem>
          ))}
          <img src={SubMenuRight} />
        </S.SubMenuList>
      )}
      {variant === "login" ? <></> : (
        <>
          {user ? <div className="login-button"><LogInBtn user={user} /></div> : <Button className="login-button" onClick={() => navigate(PageEndPoints.LOGIN)}>로그인</Button>}  
          <S.HamburgerButton className="hamburger-button" onClick={onMenuClick}>
            <img src={hamburgerBar} alt="메뉴" />
          </S.HamburgerButton>
        </>
      )}
    </S.HeaderWrapper >
  )
};

export default Header;