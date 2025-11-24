import type { ReactNode } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./DefaultLayout.style.ts";

interface DefaultLayoutProps {
  children: ReactNode;
  variant? : "default" | "login"
}

const DefaultLayout = ({children, variant="default"}:DefaultLayoutProps) => {
    const showsidebar = variant==="default";
    return(
        <S.LayoutWrapper>
            <S.ContentWrapper>
                    { showsidebar && <S.SidebarWrapper><Sidebar /></S.SidebarWrapper>}
                    <S.MainWrapper>
                        <Header />
                        <S.MainContent>{children}</S.MainContent>
                    </S.MainWrapper>
            </S.ContentWrapper>
        </S.LayoutWrapper>
    )
}

export default DefaultLayout;