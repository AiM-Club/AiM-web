import InviteContent from "@/components/content/InviteContent";
import SearchField from "@/components/field/SearchField";
import Pagination from "@/components/pagination/Pagination";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVSInvite.style";

const ChallengeVSInvite = () => {
  return (
    <DefaultLayout>
      <S.ChallengeVSInviteWrapper>
        <PageTopic text="VS 초대" size="l" />
        <SearchField
          categories={[
            { value: "ALL", label: "ALL" },
            { value: "MY", label: "MY" },
            { value: "INVITATION", label: "VS 초대" }
          ]}
          sorts={[
            { value: "LATEST", label: "최신순" },
            { value: "OLDEST", label: "오래된순" },
            { value: "TITLE", label: "가나다순" },
            { value: "ONGOING", label: "진행중" },
            { value: "FINISHED", label: "진행완료" },

          ]}
        />
        <S.ContentWrapper>
          <S.InviteContentWrapper>
            <InviteContent />
            <InviteContent />
            <InviteContent />
            <InviteContent />
          </S.InviteContentWrapper>
        </S.ContentWrapper>
        <Pagination
          currentPage={1}
          totalPage={1}
          callback={() => { }}
        />
      </S.ChallengeVSInviteWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSInvite;