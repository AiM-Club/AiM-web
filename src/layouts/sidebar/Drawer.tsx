import { useNavigate } from "react-router-dom";
import * as S from "./Drawer.style";
import { PageEndPoints } from "@/constants/endpoints";
import Button from "@/components/button/Button";
import arrowNext from "@/assets/icons/ArrowNext.svg";
import { useAuthStore } from "@/stores/authStore";
import ProfileImage from "@/components/image/ProfileImage";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import { useLogout } from "@/api/auth";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

interface MenuItem {
    id: string;
    label: string;
    path: string;
    subItems?: { id: string; label: string; path: string }[];
}

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
    const navigate = useNavigate();
    const { user, userPhoto, logout } = useAuthStore();
    const photoUrl = useUserPhotoUrl(userPhoto);
    const { mutate: logoutMutate } = useLogout();
    const menuItems: MenuItem[] = [
        {
            id: "home",
            label: "홈",
            path: PageEndPoints.HOME
        },
        {
            id: "challenge",
            label: "챌린지",
            path: PageEndPoints.CHALLENGE_MAIN,
            subItems: [
                { id: "challenge-recruit", label: "VS 모집", path: PageEndPoints.CHALLENGE_RECRUIT },
                { id: "challenge-vs", label: "VS 챌린지", path: PageEndPoints.CHALLENGE_VS },
                { id: "challenge-solo", label: "솔로", path: PageEndPoints.CHALLENGE_SOLO },
                { id: "challenge-ranking", label: "랭킹", path: PageEndPoints.CHALLENGE_RANKING },
            ]
        },
        {
            id: "community",
            label: "커뮤니티",
            path: PageEndPoints.COMMUNITY,
            subItems: [
                { id: "community-qna", label: "Q&A", path: PageEndPoints.QNA },
                { id: "community-review", label: "후기", path: PageEndPoints.REVIEW },
            ]
        },
        {
            id: "mypage",
            label: "마이페이지",
            path: PageEndPoints.MYPAGE,
            subItems: [
                { id: "mypage-profile", label: "프로필", path: PageEndPoints.PROFILE },
                { id: "mypage-mypost", label: "내 게시글", path: PageEndPoints.MYPOST },
                { id: "mypage-liked", label: "좋아요", path: PageEndPoints.MYLIKED },
                { id: "mypage-settings", label: "설정", path: "/mypage/settings" },
            ]
        },
    ];

    if (!isOpen) return null;

    return (
        <>
            <S.DrawerOverlay $isOpen={isOpen} onClick={onClose} />
            <S.DrawerContainer $isOpen={isOpen}>
                <S.DrawerHeader>
                    {user ? (
                        <S.UserInfo>
                            <ProfileImage color="pink" image={photoUrl || ""} width={4} />
                            <S.UserNameWrapper>
                                <S.UserName>{user.nickname}</S.UserName>
                                <S.UserLoginId>@{user.loginId}</S.UserLoginId>
                            </S.UserNameWrapper>
                        </S.UserInfo>
                    ) : (<Button onClick={() => {
                        navigate(PageEndPoints.LOGIN);
                        onClose();
                    }} $size="large">
                        로그인 / 회원가입
                    </Button>
                    )}
                </S.DrawerHeader>
                <S.DrawerMenuList>
                    {menuItems.map((item) => (
                        <div key={item.id}>
                            <S.DrawerMenuItem
                                $hasSubmenu={!!item.subItems}
                                onClick={() => navigate(item.path)}
                            >
                                <span>{item.label}</span>
                                {item.subItems && item.subItems.length > 0 && (
                                    <img src={arrowNext} />
                                )}
                            </S.DrawerMenuItem>
                            {item.subItems && item.subItems.length > 0 && (
                                <S.DrawerSubMenuList>
                                    {item.subItems.map((subItem) => (
                                        <S.DrawerSubMenuItem
                                            key={subItem.id}
                                            onClick={() => navigate(subItem.path)}
                                        >
                                            {subItem.label}
                                        </S.DrawerSubMenuItem>
                                    ))}
                                </S.DrawerSubMenuList>
                            )}
                        </div>
                    ))}
                </S.DrawerMenuList>
                <S.LogOutItem onClick={() => {
                    logoutMutate(undefined, {
                        onSuccess: () => {
                            logout();
                        },
                    });
                }}>로그아웃</S.LogOutItem>
            </S.DrawerContainer>
        </>
    );
};

export default Drawer;
