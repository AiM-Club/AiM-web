import * as S from "@/styles/challenge/challengeRanking/RankingList.style";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import { PageTopic } from "@/components/text/PageTopic";
import RankInfoContent from "@/components/content/RankInfoContent";
import { rankingHeader } from "../Constants";
import Pagination from "@/components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import { userGetTop20 } from "@/api/user";
import Loading from "@/components/loading/Loading";

const RankingList = () => {
  const navigate = useNavigate();
  const { data: top20Data, isLoading: isLoadingTop20 } = userGetTop20();

  const handlePageChange = (page: number) => {
    if (page === 1) {
      navigate(PageEndPoints.CHALLENGE_RANKING);
    }
  };

  if (isLoadingTop20) return <Loading />;
  return (
    <DefaultLayout>
      <S.RankingListWrapper>
        <PageTopic text="TOP 20" size="l" />
        <S.RankContentWrapper>
          <RankInfoContent type="header" content={rankingHeader} />
          <S.RankContentContainer>
            {top20Data?.data?.map((item) => (
              <RankInfoContent key={item.userId} content={item} />
            ))}
          </S.RankContentContainer>
        </S.RankContentWrapper>
        <Pagination
          currentPage={2}
          totalPage={2}
          callback={handlePageChange}
        />
      </S.RankingListWrapper>
    </DefaultLayout>
  )
}

export default RankingList;