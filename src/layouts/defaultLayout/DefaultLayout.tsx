import type { ReactNode } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./DefaultLayout.style.ts";

interface DefaultLayoutProps {
  children: ReactNode;
  variant? : "default" | "login" | "home";
}

const DefaultLayout = ({children, variant="default"}:DefaultLayoutProps) => {
    const showsidebar = variant==="default" || variant==="home";
    return(
        <S.LayoutWrapper>
            <S.ContentWrapper>
                    { showsidebar && <S.SidebarWrapper><Sidebar /></S.SidebarWrapper>}
                    <S.MainWrapper>
                        <Header variant={variant}/>
                        <S.MainContent variant={variant}>{children}</S.MainContent>
                    </S.MainWrapper>
            </S.ContentWrapper>
        </S.LayoutWrapper>
    )
}

export default DefaultLayout;