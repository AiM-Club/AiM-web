import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Sidebar.style.ts"
import { PageEndPoints } from "@/constants/endpoints.ts";

interface MenuItem {
  id: string;
  label: string;
  path: string;
}

const Sidebar = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems: MenuItem[] = [
    { id: "home", label: "홈", path: PageEndPoints.HOME },
    { id: "hot-money", label: "챌린지", path: "/challenge" },
    { id: "hot-evening", label: "커뮤니티", path: "/community" },
    { id: "top10", label: "마이페이지", path: "/mypage" },
    ];

    const handleMenuClick = (path: string) => {
    navigate(path);
    };

    const isActive = (path: string) => {
        if (path === PageEndPoints.HOME) {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return(
        <S.SidebarContainer>
            <S.MenuList>
            {menuItems.map((item) => (
                <S.MenuItem
                    key={item.id}
                    $isActive={isActive(item.path)}
                    onClick={() => handleMenuClick(item.path)}
                >
                    <S.MenuText
                        $isActive={isActive(item.path)}
                    >
                        {item.label}
                    </S.MenuText>
                </S.MenuItem>
            ))}
            </S.MenuList>
        </S.SidebarContainer>
    )
}

export default Sidebar;