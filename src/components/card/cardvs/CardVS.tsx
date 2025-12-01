import type { CardVSProps } from "@/types/VSBattle.ts";
import * as S from "./CardVS.style.ts";
import { FaHeart } from "react-icons/fa";
import { getRankImg } from "@/utils/userRank.ts";

interface CardVSItems {
  data: CardVSProps;
}
const CardVS = ({ data }: CardVSItems) => {
    return(
        <S.CardWrapper>
            <S.CardContent>
                <S.UserInfo>
                    <S.UserImg src={data.userImg} />
                    <S.UserName>{data.userName}<S.RankImg src={getRankImg(data.rank)}/></S.UserName>
                </S.UserInfo>
                <S.VSImg src={data.img}/>
                <S.VSInfoWrapper>
                    <S.VSInfo>
                        <S.InfoDate>
                            <span>시작일 | {data.startTime}</span>
                            <span>{data.term}</span>
                        </S.InfoDate>

                        <S.Title>{data.title}</S.Title>

                        <S.FieldTagWrapper>
                            <S.InfoName>분야</S.InfoName>
                            {data.field.map((f, i) => (
                                <S.Field key={i}>{f}</S.Field>
                            ))}
                        </S.FieldTagWrapper>

                        <S.FieldTagWrapper>
                            <S.InfoName>태그</S.InfoName>
                            {data.tag.map((t, i) => (
                                <S.Tag key={i}>#{t}</S.Tag>
                            ))}
                        </S.FieldTagWrapper>

                        <S.FieldTagWrapper>
                            <S.InfoName>직무</S.InfoName>
                            <S.Job>{data.job}</S.Job>
                        </S.FieldTagWrapper>
                    </S.VSInfo>
                    <S.LikeWrapper>
                        <FaHeart />
                        <span>{data.like}</span>
                    </S.LikeWrapper>
                </S.VSInfoWrapper>
            </S.CardContent>
        </S.CardWrapper>
    )
}

export default CardVS;