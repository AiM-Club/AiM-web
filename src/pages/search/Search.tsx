import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/search/Search.style";
import SearchInput from "@/components/field/SearchInput";
import Select from "@/components/Select/Select";
import { useSearchParams } from "react-router-dom";
import { searchVsData } from "./Constants";
import CardVS from "@/components/card/cardvs/CardVS";
import Pagination from "@/components/pagination/Pagination";
import titleUnion from "@/assets/TitleUnion.svg";
import CardBoard from "@/components/board/CardBoard";


const Search = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    return (
        <DefaultLayout>
            <S.SearchWrapper>
                <S.ResultWrapper>
                    <S.SearchTopic>
                        <img src={titleUnion} />
                        `{keyword}` 검색 결과
                    </S.SearchTopic>
                    <S.SearchMenuWrapper>
                        <SearchInput />
                        <Select placeholder="정렬" />
                    </S.SearchMenuWrapper>
                    {keyword ? (
                        <CardBoard data={searchVsData}/>
                    ) : (
                        <S.EmptyState>
                            검색 결과가 없습니다
                        </S.EmptyState>
                    )}
                </S.ResultWrapper>
            </S.SearchWrapper>
        </DefaultLayout>
    )
}

export default Search;
