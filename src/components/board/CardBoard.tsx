import type { ChallengeVSResponse } from "@/types/challenge";
import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";

interface CardBoardProps {
    data: ChallengeVSResponse[];
    isPagination?: boolean;
}

const CardBoard = ({ data, isPagination = true }: CardBoardProps) => {

    return (
        <S.CardBoardWrapper>
            {data.length > 0 ? (
                <>
                    <S.ResultListWrapper>
                        {data.map((item) => (
                            <CardVS key={item.challengeId} data={item} />
                        ))}
                    </S.ResultListWrapper>
                    {isPagination && (
                        <S.PaginationWrapper>
                            <Pagination
                                currentPage={1}
                                totalPage={1}
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