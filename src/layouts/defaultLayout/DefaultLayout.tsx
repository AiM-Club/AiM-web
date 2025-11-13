import type { ReactNode } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import * as S from "./DefaultLayout.style.ts";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({children}:DefaultLayoutProps) => {
    return(
        <S.LayoutWrapper>
            <S.ContentWrapper>
                    <S.SidebarWrapper><Sidebar /></S.SidebarWrapper>
                    <S.MainContent>
                        <Header />
                        {children}
                    </S.MainContent>
            </S.ContentWrapper>
        </S.LayoutWrapper>
    )
}

export default DefaultLayout;