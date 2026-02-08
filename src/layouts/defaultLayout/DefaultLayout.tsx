import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Drawer from "../sidebar/Drawer";
import * as S from "./DefaultLayout.style.ts";
import { useGetMe } from "@/api/auth.ts";
import { useAuthStore } from "@/stores/authStore.ts";
import Loading from "@/components/loading/Loading.tsx";
import { useGetPhoto } from "@/api/photo.ts";
import Logo from "@/assets/AimLogo.png";

interface DefaultLayoutProps {
  children: ReactNode;
  variant?: "default" | "login" | "home";
}

const DefaultLayout = ({ children, variant = "default" }: DefaultLayoutProps) => {
  const { user, userPhoto, setUser, setUserPhoto } = useAuthStore();
  const { data: profile, isLoading } = useGetMe({ enabled: variant !== "login" && !user });
  const { data: photo, mutate: getPhoto, isPending } = useGetPhoto();
  const showsidebar = variant === "default" || variant === "home";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    if (!profile?.data) return;
    setUser(profile.data);
    const uuid = profile.data.profileImage?.uuid;
    if (uuid) {
      getPhoto({ file_uuid: uuid });
    } else {
      setUserPhoto(null);
    }
  }, [profile, setUser, setUserPhoto, getPhoto]);

  useEffect(() => {
    if (photo === undefined) return;
    setUserPhoto(photo ?? null);
  }, [photo, setUserPhoto]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 체크

    return () => window.removeEventListener('resize', handleResize);
  }, [isDrawerOpen]);


  const shouldShowLoading = (isLoading && !user) || (isPending && !userPhoto && user);
  if (shouldShowLoading) return <Loading />;

  return (
    <S.LayoutWrapper>
      <S.ContentWrapper $isDrawerOpen={isDrawerOpen}>
        {showsidebar && <S.SidebarWrapper><Sidebar /></S.SidebarWrapper>}
        <S.MainWrapper $isDrawerOpen={isDrawerOpen}>
          <Header variant={variant} onMenuClick={() => setIsDrawerOpen(true)} />
          <S.MainContent $variant={variant}>{children}</S.MainContent>
          <S.FooterWrapper>
            <S.FooterTop>
              <img src={Logo} />
              <p>AiM(에임)</p>
            </S.FooterTop>
            <S.FooterMid>
              AI와 함께 목표를 조준하는 커리어 플레이,
              AI Route to Your AIM
            </S.FooterMid>
            <S.FooterBottom>
              <p>(주)타겟터|대표: Targeter</p>
              <p>사업자등록번호:123-45-67890</p>
              <p>주소: 서울특별시 서대문구 거북골로 34</p>
              <p>이메일:1234@targeter.co.kr</p>
              <p>@2025 Targeter</p>
            </S.FooterBottom>
          </S.FooterWrapper>
        </S.MainWrapper>
      </S.ContentWrapper>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </S.LayoutWrapper>
  )
}

export default DefaultLayout;