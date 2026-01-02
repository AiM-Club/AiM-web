import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Drawer from "../sidebar/Drawer";
import * as S from "./DefaultLayout.style.ts";

interface DefaultLayoutProps {
  children: ReactNode;
  variant? : "default" | "login" | "home";
}

const DefaultLayout = ({children, variant="default"}:DefaultLayoutProps) => {
    const showsidebar = variant==="default" || variant==="home";
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
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
    
    return(
        <S.LayoutWrapper>
            <S.ContentWrapper>
                    { showsidebar && <S.SidebarWrapper><Sidebar /></S.SidebarWrapper>}
                    <S.MainWrapper>
                        <Header variant={variant} onMenuClick={() => setIsDrawerOpen(true)} />
                        <S.MainContent $variant={variant}>{children}</S.MainContent>
                    </S.MainWrapper>
            </S.ContentWrapper>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </S.LayoutWrapper>
    )
}

export default DefaultLayout;