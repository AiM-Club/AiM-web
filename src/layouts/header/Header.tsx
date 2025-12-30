import logo from "@/assets/AimLogo.png";
import * as S from "./Header.style";
import Button from "@/components/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveMenu } from "@/utils/useActiveMenu";
import SubMenuLeft from "@/assets/SubMenuLeft.png";
import SubMenuRight from "@/assets/SubMenuRight.png";
import { PageEndPoints } from "@/constants/endpoints";

interface HeaderProps {
  variant?: "default" | "login" | "home";
}

interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

const subMenuConfig: Record<string, SubMenuItem[]> = {
  "/challenge": [
    { id: "challenge-vs", label: "VS모집", path: PageEndPoints.CHALLENGE_VS },
    { id: "challenge-vs", label: "VS대결", path: "/challenge/vs" },
    { id: "challenge-solo", label: "솔로", path: PageEndPoints.CHALLENGE_SOLO },
    { id: "challenge-ranking", label: "랭킹", path: "/challenge/ranking" },
  ],
  "/community": [
    { id: "community-qna", label: "Q & A", path: PageEndPoints.QNA },
    { id: "community-review", label: "후기", path: PageEndPoints.REVIEW },
  ],
  "/mypage": [
    { id: "mypage-profile", label: "프로필", path: "/mypage/profile" },
    { id: "mypage-mypost", label: "내 게시글", path: PageEndPoints.MYPOST },
     { id: "mypage-history", label: "좋아요", path: PageEndPoints.MYLIKED },
    { id: "mypage-settings", label: "설정", path: "/mypage/settings" },
  ],
};

const Header = ({ variant = "default" }: HeaderProps) => {
  const navigate = useNavigate();
  const { isActive } = useActiveMenu();
  const location = useLocation();

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
        <S.Logo src={logo}/>
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
         {variant === "login" ? <></> : <Button onClick={() => navigate(PageEndPoints.LOGIN)}>로그인</Button>}
    </S.HeaderWrapper>
  )
};

export default Header;