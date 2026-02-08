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
import type { AllSearchContent, QnaType } from "@/types/posts";
import type { PostType } from "@/types/user";

interface CardBoardProps {
    data: ChallengeVSResponse[] | ChallengeRecruitResponse[] | QnaType[] | PostType[] | AllSearchContent[];
    currentPage?: number;
    totalPage?: number;
    handlePageChange?: (page: number) => void;
    isPagination?: boolean;
    isLoading?: boolean;
    //나중에 type 필수로 변경해야함
    type?: "vs" | "solo" | "qna" | "review" | "recruit" | "hotvs" | "hotsolo" | "mypage" | "all";
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

    const navigateToDetail = useCallback((id: number, postType?: string, challengeMode?: string) => {
        let endpoint: string;

        if (type === "mypage" && postType) {
            if (postType === "VS_RECRUIT") {
                endpoint = PageEndPoints.CHALLENGE_RECRUIT_DETAIL;
            } else if (postType === "Q_AND_A") {
                endpoint = PageEndPoints.QNA_DETAIL;
            } else if (postType === "REVIEW") {
                endpoint = PageEndPoints.REVIEW_DETAIL;
            } else {
                endpoint = PageEndPoints.CHALLENGE_RECRUIT_DETAIL;
            }
        } else if (type === "vs" || type === "hotvs") {
            endpoint = PageEndPoints.CHALLENGE_VS_DETAIL;
        } else if (type === "solo") {
            endpoint = PageEndPoints.CHALLENGE_SOLO_DETAIL;
        } else if (type === "hotsolo") {
            return; // hotsolo는 navigate 하지 않음
        } else if (type === "qna") {
            endpoint = PageEndPoints.QNA_DETAIL;
        } else if (type === "review") {
            endpoint = PageEndPoints.REVIEW_DETAIL;
        } else if (type === "all") {
            if (challengeMode === "VS") {
                endpoint = PageEndPoints.CHALLENGE_VS_DETAIL;
            } else if (challengeMode === "SOLO") {
                endpoint = PageEndPoints.CHALLENGE_SOLO_DETAIL;
            } else if (challengeMode === "VS_RECRUIT") {
                endpoint = PageEndPoints.CHALLENGE_RECRUIT_DETAIL;
            } else if (challengeMode === "Q_AND_A") {
                endpoint = PageEndPoints.QNA_DETAIL;
            } else if (challengeMode === "REVIEW") {
                endpoint = PageEndPoints.REVIEW_DETAIL;
            } else {
                endpoint = PageEndPoints.CHALLENGE_RECRUIT_DETAIL;
            }
        } else {
            endpoint = PageEndPoints.CHALLENGE_RECRUIT_DETAIL;
        }

        navigate(buildPath(endpoint, { id }));
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
                                    const challengeId = (item as ChallengeVSResponse).challengeId;
                                    return challengeId ? `challenge-${challengeId}` : `challenge-${index}`;
                                } else {
                                    const postId = (item as ChallengeRecruitResponse | QnaType | PostType).postId;
                                    return postId ? `post-${postId}` : `post-${index}`;
                                }
                            };

                            const getPostId = () => {
                                if (type === "mypage") {
                                    return (item as PostType).postId;
                                } else if (type === "recruit" || type === "qna" || type === "review") {
                                    return (item as ChallengeRecruitResponse).postId;
                                } else if (type === "all") {
                                    return (item as AllSearchContent).id;
                                } else {
                                    return (item as ChallengeVSResponse).challengeId;
                                }
                            };

                            const getPostType = () => {
                                if (type === "mypage") {
                                    return (item as PostType).postType;
                                }
                                return undefined;
                            };

                            const getChallengeMode = () => {
                                if (type === "all") {
                                    if ((item as AllSearchContent).type === "CHALLENGE") {
                                        if ((item as AllSearchContent).challengeMode === "VS") {
                                            return "VS";
                                        } else if ((item as AllSearchContent).challengeMode === "SOLO") {
                                            return "SOLO";
                                        }
                                    } else {
                                        return (item as AllSearchContent).postType || undefined;
                                    }
                                }
                                return undefined;
                            };

                            return (
                                <CardVS
                                    key={getKey()}
                                    data={item}
                                    onLoadingChange={(isLoading) => handleCardLoadingChange(type === "recruit" || type === "mypage" ? (item as ChallengeRecruitResponse | PostType).postId! : (item as ChallengeVSResponse).challengeId!, isLoading)}
                                    onClick={type === "hotsolo" ? undefined : () => navigateToDetail(getPostId()!, getPostType(), getChallengeMode())}
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