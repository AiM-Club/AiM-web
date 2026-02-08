import InviteContent from "@/components/content/InviteContent";
import SearchField from "@/components/field/SearchField";
import Pagination from "@/components/pagination/Pagination";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVSInvite.style";
import { useGetChallengeRequest } from "@/api/challenge";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";
import { useEffect } from "react";
import SubLoading from "@/components/loading/SubLoading";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";

const ChallengeVSInvite = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { currentPage, totalPage, setTotalPage, handlePageChange } = usePagination();
  const { keyword, sort, handleKeywordChange, handleSortChange } = useSearch({
    onSearchChange: () => handlePageChange(1),
  });
  const { data: challengeRequestData, isLoading } = useGetChallengeRequest({ sort: sort, page: currentPage - 1, size: 16, keyword });

  // ALL이나 MY 클릭 시 ChallengeVS로 이동
  const handleCategoryChange = (category: string) => {
    if (category === "ALL" || category === "MY") {
      navigate(`${PageEndPoints.CHALLENGE_VS}`);
    }
  };

  useEffect(() => {
    setTotalPage(challengeRequestData?.data.page.totalPages || 1);
  }, [challengeRequestData?.data.page.totalPages, setTotalPage]);

  return (
    <DefaultLayout>
      <S.ChallengeVSInviteWrapper>
        <PageTopic text="VS 챌린지" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "ALL", label: "ALL" },
              { value: "MY", label: "MY" },
              { value: "INVITATION", label: "VS 초대" }
            ]}
            defaultCategory="INVITATION"
            sorts={[
              { value: "LATEST", label: "최신순" },
              { value: "OLDEST", label: "오래된순" },
              { value: "TITLE", label: "가나다순" },
            ]}
            onCategoryChange={handleCategoryChange}
            onKeywordChange={handleKeywordChange}
            onSortChange={handleSortChange}
          />
          {user ? (
            <S.InviteContentWrapper>
              {isLoading && <SubLoading />}
              {challengeRequestData?.data.content.map((item) => (
                <InviteContent key={item.id} item={item} />
              ))}
              {challengeRequestData?.data.content.length === 0 &&
                <S.EmptyState>
                  검색 결과가 없습니다
                </S.EmptyState>
              }
            </S.InviteContentWrapper>
          ) : (
            <S.LockEmptyState>
              <S.LockImage src={Lock} />
              로그인 후 이용 가능합니다
            </S.LockEmptyState>
          )}
        </S.ContentWrapper>
        {challengeRequestData?.data.content?.length && challengeRequestData?.data.content?.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            callback={handlePageChange}
          />
        )}
      </S.ChallengeVSInviteWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSInvite;