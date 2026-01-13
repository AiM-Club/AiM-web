import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/mypage/mypage.style";
import { levelInfoData, myLevelData } from "./Constants";
import { getNextRank, getRankImg, getRankString } from "@/utils/userRank";
import { ProgressBar } from "@/components/bar/ProgressBar";

const Mypage = () => {
    
    return(
        <DefaultLayout>
            <S.mypageWrapper>
                <S.MyLevelWrapper>
                    <PageTopic text="나의 LEVEL" size="l" />
                    <S.MyLevelContent>
                        <S.MyLevelImageWrapper>
                            <S.MyLevelImage src={getRankImg(myLevelData.tier)} />
                            <S.MyLevelText>{getRankString(myLevelData.tier)}</S.MyLevelText>
                        </S.MyLevelImageWrapper>
                        <S.MyLevelInfoWrapper>
                            <S.MyLevelInfo>Lv.{myLevelData.level}</S.MyLevelInfo>
                            <ProgressBar progress={myLevelData.levelper} height={40} color="pink" />
                            <S.LevelInfo>
                                <p>{myLevelData.levelper}%</p>
                                <S.NextLevel>{getNextRank(myLevelData.tier)}</S.NextLevel>
                            </S.LevelInfo>
                        </S.MyLevelInfoWrapper>
                    </S.MyLevelContent>
                </S.MyLevelWrapper>
                <S.LevelInfoWrapper>
                    <PageTopic text="티어 설명" size="l" />
                    <S.LevelInfoContent>
                        {levelInfoData.map((item) => (
                            <S.LevelInfoItem key={item.tier}>
                                <S.LevelInfoImage src={getRankImg(item.tier)} />
                                <S.LevelInfoItemTitle>{getRankString(item.tier)}</S.LevelInfoItemTitle>
                                <S.LevelInfoItemDescription>Lv. {item.minLevel} ~ {item.maxLevel}</S.LevelInfoItemDescription>
                            </S.LevelInfoItem>
                        ))}
                    </S.LevelInfoContent>
                </S.LevelInfoWrapper>
            </S.mypageWrapper>
        </DefaultLayout>
    )
}

export default Mypage;