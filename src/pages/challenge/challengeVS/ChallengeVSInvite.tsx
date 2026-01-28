import InviteContent from "@/components/content/InviteContent";
import Pagination from "@/components/pagination/Pagination";
import * as S from "@/styles/challenge/challengeVS/ChallengeVSInvite.style";

const ChallengeVSInvite = () => {
  return (
    <S.ChallengeVSInviteWrapper>
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
  )
}

export default ChallengeVSInvite;