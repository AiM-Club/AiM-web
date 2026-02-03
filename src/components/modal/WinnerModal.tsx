import ProfileImage from "../image/ProfileImage";
import Modal from "./Modal";
import * as S from "./WinnerModal.style";
import Crown from "@/assets/Crown.svg";
import NoPhoto from "@/assets/NoPhoto.svg";

const WinnerModal = ({ trigger }: { trigger: React.ReactNode }) => {

    return (
        <Modal trigger={trigger} >
            <S.WinnerModalContent>
                <S.WinnerProfileWrapper>
                    <S.Title>
                        <S.CrownImage src={Crown} />
                        WIN!
                        <S.CrownImage src={Crown} />
                    </S.Title>  
                    <ProfileImage image={NoPhoto} width={11.25} color="pink" type="winner" />
                    <S.TitleText>
                    00주간 진행된 VS 대결에서
                    <br />
                    000님이 승리했습니다
                    </S.TitleText>
                </S.WinnerProfileWrapper>
                <S.ButtonWrapper>
                    <S.Button>나가기</S.Button>
                    <S.Button>홈으로 이동</S.Button>
                </S.ButtonWrapper>
            </S.WinnerModalContent>
        </Modal>
    )
}

export default WinnerModal;