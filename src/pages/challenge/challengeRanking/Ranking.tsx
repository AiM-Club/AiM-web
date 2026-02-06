import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import RankingContent from "@/components/content/RankingContent";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout"
import * as S from "@/styles/challenge/challengeRanking/Ranking.style";
import Pagination from "@/components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import useMedia from "@/hooks/useMedia";
import { userGetTop20 } from "@/api/user";
import Loading from "@/components/loading/Loading";

const Ranking = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMedia(1100);
  const isTablet = useMedia(1024);
  const isMobile = useMedia(560);
  const { data: top20Data, isLoading: isLoadingTop20 } = userGetTop20();
  const top3 = top20Data?.data?.slice(0, 3) || [];

  const handlePageChange = (page: number) => {
    if (page === 2) {
      navigate(PageEndPoints.CHALLENGE_RANKING_LIST);
    }
  };

  if (isLoadingTop20) return <Loading />;
  return (
    <DefaultLayout>
      <S.RankingWrapper>
        <PageTopic text="랭킹" size="l" />
        <S.RankingContentWrapper>
          {!isMobile && <S.SubTitle>TOP 3</S.SubTitle>}
          {top3.length > 0 && (
            <S.RankingList>
              {top3[0] && (
                <S.TopRankingWrapper>
                  <CardChallenge
                    mobileTopic="top"
                    isMobile={isMobile}
                    minWidth={(isLargeScreen && !isTablet) || isMobile ? 0 : 30}
                    color="pink"
                    topic={`${top3[0].rank} ${top3[0].userInfo.nickname}`}
                    openBtn={false}
                    topicDirection="left"
                  >
                    <RankingContent
                      progress={top3[0].allRecord.successRate}
                      tryCount={top3[0].allRecord.attemptCount}
                      successCount={top3[0].allRecord.successCount}
                      failCount={top3[0].allRecord.failCount}
                      contentType="main"
                    />
                  </CardChallenge>
                </S.TopRankingWrapper>
              )}
              <S.NextRankingWrapper>
                {top3[1] && (
                  <CardChallenge
                    mobileTopic="top"
                    isMobile={isMobile}
                    color="pink"
                    topic={`${top3[1].rank} ${top3[1].userInfo.nickname}`}
                    openBtn={false}
                    topicDirection="left"
                  >
                    <RankingContent
                      progress={top3[1].allRecord.successRate}
                      tryCount={top3[1].allRecord.attemptCount}
                      successCount={top3[1].allRecord.successCount}
                      failCount={top3[1].allRecord.failCount}
                      contentType="sub"
                    />
                  </CardChallenge>
                )}
                {top3[2] && (
                  <CardChallenge
                    mobileTopic="top"
                    isMobile={isMobile}
                    color="green"
                    topic={`${top3[2].rank} ${top3[2].userInfo.nickname}`}
                    openBtn={false}
                    topicDirection="left"
                  >
                    <RankingContent
                      color="green"
                      progress={top3[2].allRecord.successRate}
                      tryCount={top3[2].allRecord.attemptCount}
                      successCount={top3[2].allRecord.successCount}
                      failCount={top3[2].allRecord.failCount}
                      contentType="sub"
                    />
                  </CardChallenge>
                )}
              </S.NextRankingWrapper>
            </S.RankingList>
          )}
        </S.RankingContentWrapper>
        <Pagination
          currentPage={1}
          totalPage={2}
          callback={handlePageChange}
        />
      </S.RankingWrapper>
    </DefaultLayout>
  )
}

export default Ranking;