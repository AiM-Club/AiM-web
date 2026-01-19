import type { ChallengeVSResponse } from "@/types/challenge";
import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";

interface CardBoardProps {
    data: ChallengeVSResponse[];
    currentPage?: number;
    totalPage?: number;
    handlePageChange?: (page: number) => void;
    isPagination?: boolean;
}

const CardBoard = ({ data, currentPage, totalPage, handlePageChange, isPagination = true }: CardBoardProps) => {

    return (
        <S.CardBoardWrapper>
            {data.length > 0 ? (
                <>
                    <S.ResultListWrapper>
                        {data?.map((item) => (
                            <CardVS key={item.challengeId} data={item} />
                        ))}
                    </S.ResultListWrapper>
                    {isPagination && (
                        <S.PaginationWrapper>
                            <Pagination
                                currentPage={currentPage || 1}
                                totalPage={totalPage || 1}
                                callback={handlePageChange || (() => { })}
                            />
                        </S.PaginationWrapper>
                    )}
                </>
            ) : (
                <S.EmptyState>
                    검색 결과가 없습니다
                </S.EmptyState>
            )}

        </S.CardBoardWrapper>
    )
}

export default CardBoard;