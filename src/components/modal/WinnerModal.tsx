import ProfileImage from "../image/ProfileImage";
import Modal from "./Modal";
import * as S from "./WinnerModal.style";
import Crown from "@/assets/Crown.svg";
import NoPhoto from "@/assets/NoPhoto.svg";
import type { ChallengeWinnerResponse } from "@/types/challenge";
import { useGetPhoto } from "@/api/photo";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";

interface WinnerModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  winnerData?: ChallengeWinnerResponse | null;
}

const WinnerModal = ({ open, onOpenChange, winnerData }: WinnerModalProps) => {
  const navigate = useNavigate();
  const { mutate: getPhoto } = useGetPhoto();
  const [winnerPhoto, setWinnerPhoto] = useState<Blob | null>(null);
  const winnerPhotoUrl = useUserPhotoUrl(winnerPhoto);

  useEffect(() => {
    const uuid = winnerData?.winnerInfo?.profileImage?.uuid;
    if (!uuid) {
      setWinnerPhoto(null);
      return;
    }
    getPhoto(
      { file_uuid: uuid },
      {
        onSuccess: (blob) => setWinnerPhoto(blob),
        onError: () => setWinnerPhoto(null),
      }
    );
  }, [winnerData?.winnerInfo?.profileImage?.uuid, getPhoto]);

  const durationWeek = winnerData?.durationWeek ?? 0;
  const winnerNickname = winnerData?.winnerInfo?.nickname ?? "";

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      {(setOpen) => (
        <S.WinnerModalContent>
          <S.WinnerProfileWrapper>
            <S.Title>
              <S.CrownImage src={Crown} alt="" />
              WIN!
              <S.CrownImage src={Crown} alt="" />
            </S.Title>
            <ProfileImage
              image={winnerPhotoUrl || NoPhoto}
              width={11.25}
              color="pink"
              type="winner"
            />
            <S.TitleText>
              {durationWeek}주간 진행된 VS 대결에서
              <br />
              {winnerNickname}님이 승리했습니다
            </S.TitleText>
          </S.WinnerProfileWrapper>
          <S.ButtonWrapper>
            <S.ButtonCancel type="button" onClick={() => setOpen(false)}>
              나가기
            </S.ButtonCancel>
            <S.Button
              type="button"
              onClick={() => {
                setOpen(false);
                navigate(PageEndPoints.HOME);
              }}
            >
              홈으로 이동
            </S.Button>
          </S.ButtonWrapper>
        </S.WinnerModalContent>
      )}
    </Modal>
  );
};

export default WinnerModal;