import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import { searchVsData } from "@/pages/search/Constants";
import CardBoard from "@/components/board/CardBoard";
import SearchField from "@/components/field/SearchField";
import * as S from "@/styles/mypage/myLiked/myLiked.style";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";

const MyPost = () => {
    const {user} = useAuthStore();

    return (
        <DefaultLayout>
            {user ? (
            <S.myLikedWrapper>
                <PageTopic text="내 게시글" size="l" />
                <S.ContentWrapper>
                    <SearchField 
                        categories={[
                            { value: "all", label: "ALL" },
                            { value: "vsRecruitment", label: "VS 모집글" },
                            { value: "community", label: "커뮤니티" }
                        ]}
                    />
                    <CardBoard data={searchVsData}/>
                </S.ContentWrapper>
            </S.myLikedWrapper>
            ):(
                <S.EmptyState>
                    <S.LockImage src={Lock} />
                    로그인 후 이용 가능합니다
                </S.EmptyState>
            )}
        </DefaultLayout>
    )
}

export default MyPost;