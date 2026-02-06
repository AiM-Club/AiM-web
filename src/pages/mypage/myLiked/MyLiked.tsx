import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import * as S from "@/styles/mypage/myPost/myPost.style";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";
import { userGetMyLiked } from "@/api/user";

const MyLiked = () => {
    const { user } = useAuthStore();
    const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
    const { category, keyword, sort, handleCategoryChange, handleKeywordChange, handleSortChange } = useSearch({
        onSearchChange: () => handlePageChange(1),
    });
    const { data: myLikedData, isLoading } = userGetMyLiked({ filter: category, sort: sort, keyword: keyword, page: currentPage - 1, size: 16 });
    useEffect(() => {
        setTotalPage(myLikedData?.data.page.totalPages || 1);
    }, [myLikedData?.data.page.totalPages, setTotalPage]);

    return (
        <DefaultLayout>
            {user ? (
                <S.myPostWrapper>
                    <PageTopic text="좋아요" size="l" />
                    <S.ContentWrapper>
                        <SearchField
                            categories={[
                                { value: "ALL", label: "ALL" },
                                { value: "SOLO", label: "SOLO" },
                                { value: "VS", label: "VS 대결" },
                                { value: "VS_RECRUIT", label: "VS 모집글" },
                                { value: "COMMUNITY", label: "커뮤니티" }
                            ]}
                            sorts={[
                                { value: "LATEST", label: "최신순" },
                                { value: "OLDEST", label: "오래된순" },
                                { value: "TITLE", label: "가나다순" },
                            ]}
                            onCategoryChange={handleCategoryChange}
                            onKeywordChange={handleKeywordChange}
                            onSortChange={handleSortChange}
                        />
                        <CardBoard data={myLikedData?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} type="mypage" />
                    </S.ContentWrapper>
                </S.myPostWrapper>
            ) : (
                <S.EmptyState>
                    <S.LockImage src={Lock} />
                    로그인 후 이용 가능합니다
                </S.EmptyState>
            )}
        </DefaultLayout>
    )
}

export default MyLiked;