import Modal from "./Modal";
import * as S from "./DeleteModal.style";
import { useDeletePost } from "@/api/posts";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";

const DeleteModal = ({ trigger, postId }: { trigger: React.ReactNode, postId: string }) => {
    const navigate = useNavigate();
    const { mutate: deletePost } = useDeletePost(postId);

    const handleDelete = (setOpen: (open: boolean) => void) => {
        deletePost(undefined, {
            onSuccess: () => {
                setOpen(false);
                navigate(PageEndPoints.REVIEW);
            },
        });
    };

    return (
        <Modal trigger={trigger}>
            {(setOpen) => (
                <S.WinnerModalContent>
                    <S.Title>정말 삭제하시겠습니까?</S.Title>
                    <S.ButtonWrapper>
                        <S.ButtonDiv $hasDivider>
                            <S.ButtonCancel onClick={() => handleDelete(setOpen)}>삭제</S.ButtonCancel>
                        </S.ButtonDiv>
                        <S.ButtonDiv>
                            <S.Button type="button" onClick={() => setOpen(false)}>취소</S.Button>
                        </S.ButtonDiv>
                    </S.ButtonWrapper>
                </S.WinnerModalContent>
            )}
        </Modal>
    )
}

export default DeleteModal;