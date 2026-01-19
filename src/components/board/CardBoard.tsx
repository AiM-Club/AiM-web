import type { ChallengeVSListResponse } from "@/types/challenge";
import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";

interface CardBoardProps {
    data: ChallengeVSListResponse;
    isPagination?: boolean;
}

const CardBoard = ({ data, isPagination = true }: CardBoardProps) => {

    return (
        <S.CardBoardWrapper>
            {data?.content?.length > 0 ? (
                <>
                    <S.ResultListWrapper>
                        {data?.content?.map((item) => (
                            <CardVS key={item.challengeId} data={item} />
                        ))}
                    </S.ResultListWrapper>
                    {isPagination && (
                        <S.PaginationWrapper>
                            <Pagination
                                currentPage={data.page.number}
                                totalPage={data.page.totalPages}
                                callback={() => { }}
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