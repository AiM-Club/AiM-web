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
                </S.MainWrapper>
            </S.ContentWrapper>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </S.LayoutWrapper>
    )
}

export default DefaultLayout;