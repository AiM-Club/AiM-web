import type { ChallengeVSResponse } from "@/types/challenge";
import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";
import SubLoading from "../loading/SubLoading";
import { useState, useEffect, useCallback } from "react";
import { PageEndPoints } from "@/constants/endpoints";
import { buildPath } from "@/utils/buildPath";
import { useNavigate } from "react-router-dom";

interface CardBoardProps {
    data: ChallengeVSResponse[];
    currentPage?: number;
    totalPage?: number;
    handlePageChange?: (page: number) => void;
    isPagination?: boolean;
    isLoading?: boolean;
    //나중에 type 필수로 변경해야함
    type?: "vs" | "solo" | "qna" | "review";
}

const CardBoard = ({ data, currentPage, totalPage, handlePageChange, isPagination = true, isLoading = false, type }: CardBoardProps) => {
    const [loadingCards, setLoadingCards] = useState<Set<number>>(new Set());
    const [isAnyCardLoading, setIsAnyCardLoading] = useState(false);
    const navigate = useNavigate();

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

    const navigateToDetail = useCallback((challengeId: number) => {
        navigate(buildPath(type === "vs" ? PageEndPoints.CHALLENGE_VS_DETAIL : type === "solo" ? PageEndPoints.CHALLENGE_SOLO_DETAIL : type === "qna" ? PageEndPoints.QNA_DETAIL : PageEndPoints.REVIEW_DETAIL, { id: challengeId }));
    }, [navigate, type]);

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
                                onClick={() => navigateToDetail(item.challengeId)}
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