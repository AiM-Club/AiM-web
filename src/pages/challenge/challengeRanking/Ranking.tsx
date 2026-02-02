import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import RankingContent from "@/components/content/RankingContent";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout"
import * as S from "@/styles/challenge/challengeRanking/Ranking.style";
import Pagination from "@/components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import useMedia from "@/hooks/useMedia";

const Ranking = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMedia(1100);
  const isTablet = useMedia(1024);
  const isMobile = useMedia(560);

  const handlePageChange = (page: number) => {
    if (page === 2) {
      navigate(PageEndPoints.CHALLENGE_RANKING_LIST);
    }
  };

  return (
    <DefaultLayout>
      <S.RankingWrapper>
        <PageTopic text="랭킹" size="l" />
        <S.RankingContentWrapper>
          {!isMobile && <S.SubTitle>TOP 3</S.SubTitle>}
          <S.RankingList>
            <S.TopRankingWrapper>
              <CardChallenge mobileTopic="top" isMobile={isMobile} minWidth={isLargeScreen && !isTablet || isMobile ? 0 : 30} color="pink" topic="1 유저_닉네임" openBtn={false} topicDirection="left">
                <RankingContent progress={90} tryCount={10} successCount={9} failCount={1} contentType="main" />
              </CardChallenge>
            </S.TopRankingWrapper>
            <S.NextRankingWrapper>
              <CardChallenge mobileTopic="top" isMobile={isMobile} color="pink" topic="2 유저_닉네임" openBtn={false} topicDirection="left">
                <RankingContent progress={90} tryCount={10} successCount={9} failCount={1} contentType="sub" />
              </CardChallenge>
              <CardChallenge mobileTopic="top" isMobile={isMobile} color="green" topic="3 유저_닉네임" openBtn={false} topicDirection="left">
                <RankingContent progress={90} tryCount={10} successCount={9} failCount={1} contentType="sub" />
              </CardChallenge>
            </S.NextRankingWrapper>
          </S.RankingList>
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