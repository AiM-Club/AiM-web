import * as S from "./CardVS.style.ts";
import { FaHeart } from "react-icons/fa";
import { getRankImg } from "@/utils/userRank.ts";
import type { ChallengeVSResponse } from "@/types/challenge";

interface CardVSItems {
    data: ChallengeVSResponse;
}
const CardVS = ({ data }: CardVSItems) => {

    console.log(data);
    return (
        <S.CardWrapper>
            <S.CardContent>
                <S.UserInfo>
                    <S.UserImg src={data.user.profileImage.filePath} />
                    <S.UserName>{data.user.nickname}<S.RankImg src={getRankImg(data.user?.badge?.toLowerCase() || "bronze")} /></S.UserName>
                </S.UserInfo>
                <S.VSImg src={data.user.profileImage.filePath} />
                <S.VSInfoWrapper>
                    <S.VSInfo>
                        <S.InfoDate>
                            <span>시작일 | {data.startDate}</span>
                            <span>{data.duration}</span>
                        </S.InfoDate>

                        <S.Title>{data.name}</S.Title>

                        <S.FieldTagWrapper>
                            <S.InfoName>분야</S.InfoName>
                            {data.fields.map((f, i) => (
                                <S.Field key={i}>{f}</S.Field>
                            ))}
                        </S.FieldTagWrapper>

                        <S.FieldTagWrapper>
                            <S.InfoName>태그</S.InfoName>
                            {data.tags.map((t, i) => (
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
                        <span>{data.likeCount}</span>
                    </S.LikeWrapper>
                </S.VSInfoWrapper>
            </S.CardContent>
        </S.CardWrapper>
    )
}

export default CardVS;