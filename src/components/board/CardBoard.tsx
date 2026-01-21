import type { ChallengeVSResponse } from "@/types/challenge";
import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";
import SubLoading from "../loading/SubLoading";
import { useState, useEffect, useCallback } from "react";

interface CardBoardProps {
    data: ChallengeVSResponse[];
    currentPage?: number;
    totalPage?: number;
    handlePageChange?: (page: number) => void;
    isPagination?: boolean;
    isLoading?: boolean;
}

const CardBoard = ({ data, currentPage, totalPage, handlePageChange, isPagination = true, isLoading = false }: CardBoardProps) => {
    const [loadingCards, setLoadingCards] = useState<Set<number>>(new Set());
    const [isAnyCardLoading, setIsAnyCardLoading] = useState(false);

    useEffect(() => {
        setIsAnyCardLoading(loadingCards.size > 0);
    }, [loadingCards]);

    const handleCardLoadingChange = useCallback((challengeId: number, isLoading: boolean) => {
        setLoadingCards((prev) => {
            const next = new Set(prev);
            if (isLoading) {
                next.add(challengeId);
            } else {
                next.delete(challengeId);
            }
            return next;
        });
    }, []);

    return (
        <S.CardBoardWrapper>
            {(isLoading || isAnyCardLoading) && <SubLoading />}
            {data.length > 0 ? (
                <>
                    <S.ResultListWrapper>
                        {data?.map((item) => (
                            <CardVS
                                key={item.challengeId}
                                data={item}
                                onLoadingChange={(isLoading) => handleCardLoadingChange(item.challengeId, isLoading)}
                            />
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
                    {isLoading ? <SubLoading /> : (
                        <S.EmptyState>
                            검색 결과가 없습니다
                        </S.EmptyState>
                    )}
                </S.EmptyState>
            )}

        </S.CardBoardWrapper>
    )
}

export default CardBoard;