import styled from "styled-components";
import SideBtn from "@/assets/SideBtn.png";
import SideBtnSelected from "@/assets/SideBtnSelected.png";
import SideBtnHover from "@/assets/SideBtnHover.png";


export const SidebarContainer = styled.aside`
  margin-top: 10rem;
  overflow: visible;
  position: relative;
  width: 13rem;
  z-index: 10;
`;
export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: visible;
`;

export const MenuItem = styled.button<{ $isActive: boolean}>`
  position: relative;
  background-image: ${(props) =>
    props.$isActive ? `url(${SideBtnSelected})` : `url(${SideBtn})`
  };
  width: ${(props) =>
    props.$isActive ? `12.25rem` : `8.5rem`
  };
  aspect-ratio: ${(props) =>
    props.$isActive ? `196/114` : `136/88`
  };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index:20;

  &:hover {
  background-image: ${(props) =>
      props.$isActive ? `url(${SideBtnSelected})` : `url(${SideBtnHover})`};
  }
`;

export const MenuText = styled.div<{ $isActive: boolean}>`
  font: ${(props) =>
    props.$isActive ? `var(--title-h-l)` : `var(--subtitle-m-m)`
  };
  color: ${(props) =>
    props.$isActive ? `var(--text-primary-default)` : `var(--text-secondary)`
  };
  padding-right: ${(props) =>
    props.$isActive ? `2rem` : `0.625rem`
  };
`;