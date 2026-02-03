import type { ChallengeVSResponse } from "@/types/challenge";
import CardVS from "../card/cardvs/CardVS";
import Pagination from "../pagination/Pagination";
import * as S from "./CardBoard.style";
import SubLoading from "../loading/SubLoading";
import { useState, useEffect, useCallback } from "react";
import { PageEndPoints } from "@/constants/endpoints";
import { buildPath } from "@/utils/buildPath";
import { useNavigate } from "react-router-dom";
import type { ChallengeRecruitResponse } from "@/types/vsRecruit";
import type { QnaType } from "@/types/posts";

interface CardBoardProps {
    data: ChallengeVSResponse[] | ChallengeRecruitResponse[] | QnaType[];
    currentPage?: number;
    totalPage?: number;
    handlePageChange?: (page: number) => void;
    isPagination?: boolean;
    isLoading?: boolean;
    //나중에 type 필수로 변경해야함
    type?: "vs" | "solo" | "qna" | "review" | "recruit" | "hotvs" | "hotsolo";
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
        navigate(buildPath(type === "vs" || type === "hotvs" ? PageEndPoints.CHALLENGE_VS_DETAIL : type === "solo" || type === "hotsolo" ? PageEndPoints.CHALLENGE_SOLO_DETAIL : type === "qna" ? PageEndPoints.QNA_DETAIL : type === "review" ? PageEndPoints.REVIEW_DETAIL : PageEndPoints.CHALLENGE_RECRUIT_DETAIL, { id: challengeId }));
    }, [navigate, type]);

    return (
        <S.CardBoardWrapper>
            {(isLoading || isAnyCardLoading) && <SubLoading />}
            {data.length > 0 ? (
                <>
                    <S.ResultListWrapper>
                        {data?.map((item, index) => {
                            const getKey = () => {
                                if (type === "vs" || type === "solo") {
                                    return item.challengeId ? `challenge-${item.challengeId}` : `challenge-${index}`;
                                } else {
                                    return item.postId ? `post-${item.postId}` : `post-${index}`;
                                }
                            };

                            return (
                                <CardVS
                                    key={getKey()}
                                    data={item}
                                    onLoadingChange={(isLoading) => handleCardLoadingChange(type === "recruit" ? item.postId! : item.challengeId!, isLoading)}
                                    onClick={() => navigateToDetail(type === "vs" || type === "solo" ? item.challengeId! : item.postId!)}
                                />
                            );
                        })}
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