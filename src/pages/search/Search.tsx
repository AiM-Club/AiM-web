import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/search/Search.style";
import SearchInput from "@/components/field/SearchInput";
import Select from "@/components/Select/Select";
import { useSearchParams } from "react-router-dom";
import { PageTopic } from "@/components/text/PageTopic";
import { searchVsData } from "./Constants";
import CardVS from "@/components/card/cardvs/CardVS";
import Pagination from "@/components/pagination/Pagination";


const Search = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";

    return (
        <DefaultLayout>
            <S.SearchWrapper>
                <S.ResultWrapper>
                    <S.SearchTopic>
                        <PageTopic text={`'${keyword}' 검색 결과`} size="l" />
                    </S.SearchTopic>
                    <S.SearchMenuWrapper>
                        <SearchInput />
                        <Select placeholder="정렬" />
                    </S.SearchMenuWrapper>
                    {keyword ? (
                        <>
                            <S.ResultListWrapper>
                                {searchVsData.map((item) => (
                                    <CardVS key={item.id} data={item} />
                                ))}
                            </S.ResultListWrapper>
                            <S.PaginationWrapper>
                                <Pagination 
                                    currentPage={1}
                                    totalPage={1}
                                    callback={() => {}}
                                />
                            </S.PaginationWrapper>
                        </>
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
