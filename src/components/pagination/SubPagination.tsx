import * as S from "./SubPagination.style";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

interface PaginationProps {
    currentPage: number;
    totalPage: number;
    callback: (page: number) => void;
}

const Pagination = ({ currentPage, totalPage, callback }: PaginationProps) => {
    return (
        <S.PaginationWrapper>
            {currentPage === 1 ? (
                <S.EmptyButton />
            ) : (
                <S.PaginationButton $isClicked={currentPage === 1} onClick={() => callback(currentPage - 1)}>
                    <MdOutlineNavigateBefore size={22} />
                </S.PaginationButton>
            )}
            <S.PageInfo>
                {currentPage}/{totalPage}
            </S.PageInfo>
            {currentPage === totalPage ? (
                <S.EmptyButton />
            ) : (
                <S.PaginationButton $isClicked={currentPage === totalPage} onClick={() => callback(currentPage + 1)}>
                    <MdOutlineNavigateNext size={22} />
                </S.PaginationButton>
            )}
        </S.PaginationWrapper>
    )
}

export default Pagination;