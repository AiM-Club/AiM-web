import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/community/Community.style";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import CardBoard from "@/components/board/CardBoard";
import { useGetHotChallengeSolo, useGetHotChallengeVS } from "@/api/challenge";
import useSearch from "@/hooks/useSearch";

const Community = () => {
    const { keyword, sort, handleKeywordChange, handleSortChange } = useSearch({
        onSearchChange: () => { },
    });
    const { data: challengeVSList, isLoading: isLoadingVS } = useGetHotChallengeVS({ sort: sort, page: 0, size: 8, keyword });
    const { data: challengeSoloList, isLoading: isLoadingSolo } = useGetHotChallengeSolo({ sort: sort, page: 0, size: 8, keyword });

    return (
        <DefaultLayout>
            <S.CommunityWrapper>
                <S.ContentWrapper>
                    <PageTopic text="HOT 게시물" size="l" />
                    <SearchField
                        sorts={[
                            { value: "LATEST", label: "최신순" },
                            { value: "OLDEST", label: "오래된순" },
                            { value: "TITLE", label: "가나다순" },
                        ]}
                        onKeywordChange={handleKeywordChange}
                        onSortChange={handleSortChange}
                    />
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <PageTopic text="SOLO" size="l" />
                    <CardBoard data={challengeSoloList?.data.content || []} isPagination={false} isLoading={isLoadingSolo} type="solo" />
                </S.ContentWrapper>
                <S.ContentWrapper>
                    <PageTopic text="VS 대결" size="l" />
                    <CardBoard data={challengeVSList?.data.content || []} isPagination={false} isLoading={isLoadingVS} type="vs" />
                </S.ContentWrapper>
            </S.CommunityWrapper>
        </DefaultLayout>
    )
}

export default Community;