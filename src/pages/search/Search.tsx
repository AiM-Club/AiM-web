import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/search/Search.style";
import { useSearchParams } from "react-router-dom";
import { searchVsData } from "./Constants";
import titleUnion from "@/assets/TitleUnion.svg";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";


const Search = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    return (
        <DefaultLayout>
            <S.SearchWrapper>
                
                    <S.SearchTopic>
                        <img src={titleUnion} />
                        `{keyword}` 검색 결과
                    </S.SearchTopic>
                    <S.ResultWrapper>
                        <SearchField />
                        <CardBoard data={searchVsData}/>
                    </S.ResultWrapper>
            </S.SearchWrapper>
        </DefaultLayout>
    )
}

export default Search;
