import CardList from "@/components/card/cardlist/CardList";
import CardBoard from "@/components/board/CardBoard";
import MainSlider from "@/components/slider/MainSlider";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/home/Home.style.ts";
import { fieldData } from "./Constants";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import MoreBtn from "@/components/button/MoreBtn";
import { useGetChallengeVS } from "@/api/challenge";
import { useGetChallengeRecruit, useGetHotChallengeRecruit, useGetHotChallengeReview } from "@/api/vsRecruit";
import CardSlider from "@/components/slider/CardSlider";
import useMedia from "@/hooks/useMedia";
import { userGetTop10 } from "@/api/user";

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMedia(560);
  const { data: challengeVSList, isLoading } = useGetChallengeVS({ page: 0, size: 8 });
  const { data: challengeRecruitList, isLoading: isLoadingRecruit } = useGetChallengeRecruit({ page: 0, size: 8 });
  const { data: hotChallengeRecruitList } = useGetHotChallengeRecruit();
  const { data: hotChallengeReviewList } = useGetHotChallengeReview();
  const { data: top10UserList } = userGetTop10();

  return (
    <DefaultLayout variant="home">
      <MainSlider />
      <S.HomeWrapper>
        {isMobile ?
          <S.CardWrapper><CardSlider>
            <CardList data={hotChallengeRecruitList?.data || []} title="HOT 모집글" color="green" type="recruit" />
            <CardList data={hotChallengeReviewList?.data || []} title="HOT 후기글" color="green" type="review" />
            <CardList data={top10UserList?.data || []} title="TOP 10" color="pink" type="user" />
          </CardSlider>
          </S.CardWrapper> :
          <S.CardWrapper>
            <S.TopWrapper>
              <CardList data={hotChallengeRecruitList?.data || []} title="HOT 모집글" color="green" type="recruit" />
              <CardList data={hotChallengeReviewList?.data || []} title="HOT 후기글" color="green" type="review" />
            </S.TopWrapper>
            <CardList data={top10UserList?.data || []} title="TOP 10" color="pink" type="user" />
          </S.CardWrapper>}
        <S.FieldWrapper>
          <SearchField
            onKeywordChange={(keyword) => {
              if (keyword.trim()) {
                navigate(`${PageEndPoints.SEARCH}?keyword=${encodeURIComponent(keyword.trim())}`);
              }
            }}
          />
          <PageTopic text="VS 분야" size="l" />
          <S.FieldList>
            {fieldData.map((item) => (
              <S.FieldItem key={item.id} onClick={() => navigate(`${PageEndPoints.FIELD_VS}?field=${item.id}`)}>
                <img src={item.img} />
                <span>{item.name}</span>
              </S.FieldItem>
            ))}
          </S.FieldList>
        </S.FieldWrapper>
        <S.BattleWrapper>
          <S.BattleTitle>
            <PageTopic text="VS 대결" size="l" />
            <MoreBtn onClick={() => navigate(PageEndPoints.CHALLENGE_VS)}>더보기</MoreBtn>
          </S.BattleTitle>
          <CardBoard data={challengeVSList?.data.content || []} isPagination={false} isLoading={isLoading} type="vs" />
        </S.BattleWrapper>
        <S.BattleWrapper>
          <S.BattleTitle>
            <PageTopic text="VS 모집글" size="l" />
            <MoreBtn onClick={() => navigate(PageEndPoints.CHALLENGE_RECRUIT)}>더보기</MoreBtn>
          </S.BattleTitle>
          <CardBoard data={challengeRecruitList?.data.content || []} isPagination={false} isLoading={isLoadingRecruit} type="recruit" />
        </S.BattleWrapper>
      </S.HomeWrapper>
    </DefaultLayout>
  )
}

export default Home;