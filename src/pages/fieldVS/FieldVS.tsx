import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/fieldVS/FieldVS.style";
import titleUnion from "@/assets/TitleUnion.svg";
import { searchVsData } from "../search/Constants";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";

const FieldVS = () => {
    return (
        <DefaultLayout>
            <S.FieldVSWrapper>
                <S.FieldTopic>
                    <img src={titleUnion} />
                    IT 분야_ VS 대결
                </S.FieldTopic>
                <S.FieldVSContent>
                    <SearchField />
                    <CardBoard data={searchVsData}/>
                </S.FieldVSContent>
            </S.FieldVSWrapper>
        </DefaultLayout>
    )
}

export default FieldVS;