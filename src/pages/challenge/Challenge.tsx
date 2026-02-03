import { ProgressBar } from "@/components/bar/ProgressBar";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/Challenge.style";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeMainContent } from "@/components/content/CardContent";
import SearchField from "@/components/field/SearchField";
import CardBoard from "@/components/board/CardBoard";
import useMedia from "@/hooks/useMedia";
import CardSlider from "@/components/slider/CardSlider";
import { userGetChallengeRecord } from "@/api/user";
import Loading from "@/components/loading/Loading";
import { useGetAllChallenge } from "@/api/challenge";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";

const Challenge = () => {
  const isMobile = useMedia(800);
  const { data: userChallengeRecord, isLoading } = userGetChallengeRecord();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { keyword, sort, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: allChallengeList, isLoading: isLoadingAllChallenge } = useGetAllChallenge({ sort: sort, page: currentPage - 1, size: 8, keyword });


  useEffect(() => {
    setTotalPage(allChallengeList?.data.page.totalPages || 1);
  }, [allChallengeList?.data.page.totalPages, setTotalPage]);

  if (isLoading || isLoadingAllChallenge) return <Loading />;
  return (
    <DefaultLayout>
      <S.ChallengeWrapper>
        <S.ChallengeRecordWrapper>
          <S.RecordTop>
            <PageTopic text="챌린지 기록" size="l" />
            <ProgressBar text="ALL 성공률" progress={userChallengeRecord?.data?.allSuccessRate || 0} height={40} color="pink" />
            {isMobile ?
              <CardSlider>
                <CardChallenge minWidth={20} color="green" topic="SOLO" openBtn={false} isMobile={isMobile}>
                  <ChallengeMainContent color="green" progress={userChallengeRecord?.data?.soloRecord?.successRate || 0} tryCount={userChallengeRecord?.data?.soloRecord?.attemptCount || 0} successCount={userChallengeRecord?.data?.soloRecord?.successCount || 0} failCount={userChallengeRecord?.data?.soloRecord?.failCount || 0} />
                </CardChallenge>
                <CardChallenge minWidth={20} color="pink" topic="VS 대결" openBtn={false} isMobile={isMobile}>
                  <ChallengeMainContent color="pink" progress={userChallengeRecord?.data?.vsRecord?.successRate || 0} tryCount={userChallengeRecord?.data?.vsRecord?.attemptCount || 0} successCount={userChallengeRecord?.data?.vsRecord?.successCount || 0} failCount={userChallengeRecord?.data?.vsRecord?.failCount || 0} />
                </CardChallenge>
              </CardSlider> :
              <S.ProgressWrapper>
                <CardChallenge minWidth={20} color="green" topic="SOLO" openBtn={false}>
                  <ChallengeMainContent color="green" progress={userChallengeRecord?.data?.soloRecord?.successRate || 0} tryCount={userChallengeRecord?.data?.soloRecord?.attemptCount || 0} successCount={userChallengeRecord?.data?.soloRecord?.successCount || 0} failCount={userChallengeRecord?.data?.soloRecord?.failCount || 0} />
                </CardChallenge>
                <CardChallenge minWidth={20} color="pink" topic="VS 대결" openBtn={false}>
                  <ChallengeMainContent color="pink" progress={userChallengeRecord?.data?.vsRecord?.successRate || 0} tryCount={userChallengeRecord?.data?.vsRecord?.attemptCount || 0} successCount={userChallengeRecord?.data?.vsRecord?.successCount || 0} failCount={userChallengeRecord?.data?.vsRecord?.failCount || 0} />
                </CardChallenge>
              </S.ProgressWrapper>}
          </S.RecordTop>
        </S.ChallengeRecordWrapper>
        <S.AllChallengeWrapper>
          <PageTopic text="ALL 챌린지" size="l" />
          <SearchField
            sorts={[
              { value: "LATEST", label: "최신순" },
              { value: "OLDEST", label: "오래된순" },
              { value: "LIKED", label: "좋아요순" },
              { value: "TITLE", label: "가나다순" },
            ]}
            onKeywordChange={handleKeywordChange}
            onSortChange={handleSortChange}
          />
          <CardBoard data={allChallengeList?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoadingAllChallenge} type="vs" />
        </S.AllChallengeWrapper>
      </S.ChallengeWrapper>
    </DefaultLayout>
  )
}

export default Challenge;