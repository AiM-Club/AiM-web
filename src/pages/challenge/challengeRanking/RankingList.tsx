import * as S from "@/styles/challenge/challengeRanking/RankingList.style";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import { PageTopic } from "@/components/text/PageTopic";
import RankInfoContent from "@/components/content/RankInfoContent";
import { rankingHeader, rankingListData } from "../Constants";
import Pagination from "@/components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";

const RankingList = () => {
    const navigate = useNavigate();

    const handlePageChange = (page: number) => {
        if (page === 1) {
            navigate(PageEndPoints.CHALLENGE_RANKING);
        }
    };

    return (
        <DefaultLayout>
            <S.RankingListWrapper>
                <PageTopic text="TOP 20" size="l" />
                <S.RankContentWrapper>
                    <RankInfoContent type="header" content={rankingHeader}/>
                    <S.RankContentContainer>
                        {rankingListData.map((item) => (
                            <RankInfoContent key={item.id} content={item}/>
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