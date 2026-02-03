import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import * as S from "@/styles/mypage/myLiked/myLiked.style";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import { userGetMyPost } from "@/api/user";
import useSearch from "@/hooks/useSearch";
import usePagination from "@/hooks/usePagination";
import { useEffect } from "react";
import Loading from "@/components/loading/Loading";

const MyPost = () => {
    const { user } = useAuthStore();
    const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
    const { category, keyword, sort, handleCategoryChange, handleKeywordChange, handleSortChange } = useSearch({
        onSearchChange: () => handlePageChange(1),
    });
    const { data: myPostData, isLoading } = userGetMyPost({ filter: category, sort: sort, keyword: keyword, page: currentPage - 1, size: 16 });

    useEffect(() => {
        setTotalPage(myPostData?.data.page.totalPages || 1);
    }, [myPostData?.data.page.totalPages, setTotalPage]);

    if (isLoading) return <Loading />;
    return (
        <DefaultLayout>
            {user ? (
                <S.myLikedWrapper>
                    <PageTopic text="내 게시글" size="l" />
                    <S.ContentWrapper>
                        <SearchField
                            categories={[
                                { value: "ALL", label: "ALL" },
                                { value: "VS_RECRUIT", label: "VS 모집글" },
                                { value: "COMMUNITY", label: "커뮤니티" }
                            ]}
                            sorts={[
                                { value: "LATEST", label: "최신순" },
                                { value: "OLDEST", label: "오래된순" },
                                { value: "LIKED", label: "좋아요순" },
                                { value: "TITLE", label: "가나다순" },
                            ]}
                            onCategoryChange={handleCategoryChange}
                            onKeywordChange={handleKeywordChange}
                            onSortChange={handleSortChange}
                        />
                        <CardBoard data={myPostData?.data.content || []} currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} isLoading={isLoading} />
                    </S.ContentWrapper>
                </S.myLikedWrapper>
            ) : (
                <S.EmptyState>
                    <S.LockImage src={Lock} />
                    로그인 후 이용 가능합니다
                </S.EmptyState>
            )}
        </DefaultLayout>
    )
}

export default MyPost;