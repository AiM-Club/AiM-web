import * as S from "./Content.style";

const Content = ({ content }: { content: string }) => {
  return (
    <S.ContentWrapper>
      <S.ContentText dangerouslySetInnerHTML={{ __html: content }} />
    </S.ContentWrapper>
  )
}

export default Content;