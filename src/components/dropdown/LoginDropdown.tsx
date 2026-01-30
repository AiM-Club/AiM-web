import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuthStore } from "@/stores/authStore";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import * as S from "./LoginDropdown.style";
import ProfileImage from "@/components/image/ProfileImage";
import NoPhoto from "@/assets/NoPhoto.svg";
import { useLogout } from "@/api/auth";

const BREAKPOINT = 1024;

interface LoginDropdownProps {
  trigger: ReactNode;
}

export const LoginDropdown = ({ trigger }: LoginDropdownProps) => {
  const [open, setOpen] = useState(false);
  const { mutate: logoutMutate } = useLogout();
  const { user, userPhoto, logout } = useAuthStore();
  const photoSrc = useUserPhotoUrl(userPhoto);

  useEffect(() => {
    const closeIfNarrow = () => {
      if (window.innerWidth <= BREAKPOINT && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", closeIfNarrow);
    return () => window.removeEventListener("resize", closeIfNarrow);
  }, [open]);

  const handleLogout = () => {
    logoutMutate(undefined, {
      onSuccess: () => {
        logout();
      },
      onError: (error) => {
        console.error(error);
      },
    }); 
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <S.Content sideOffset={12}>
          <S.UserInfo>
            <S.ProfileImageWrapper>
                <ProfileImage image={photoSrc || NoPhoto} width={4} />
            </S.ProfileImageWrapper>
            <S.UserText>
              <S.DisplayName>{user?.nickname ?? "유저_닉네임"}</S.DisplayName>
              <S.LoginId>@{user?.loginId ?? "User-nickname"}</S.LoginId>
            </S.UserText>
          </S.UserInfo>
          <S.Divider />
          <DropdownMenu.Item asChild onSelect={handleLogout}>
            <S.LogoutItem>로그아웃</S.LogoutItem>
          </DropdownMenu.Item>
        </S.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
