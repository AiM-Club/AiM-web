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
        <PageTopic text="VS 챌린지" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "inProgress", label: "진행 중" },
              { value: "completed", label: "진행 완료" },
              { value: "invitation", label: "VS 초대" }
            ]}
          />
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