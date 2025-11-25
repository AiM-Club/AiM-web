//첫 글자가 초록색인 페이지 타이틀 component
import * as S from "./PageTopic.style";

interface PageTopicProps {
  text: string;
  size: "m" | "l";
}

export const PageTopic = ({ text, size }: PageTopicProps) => {

  const firstText = text.slice(0, 1);
  const elseText = text.slice(1);

  const fontSize = size === "m" ? "headline-h-m" : "headline-h-l";

  return (
    <S.PageTopicWrapper $size={fontSize}>
      <S.FirstText>{firstText}</S.FirstText>
      <S.ElseText>{elseText}</S.ElseText>
    </S.PageTopicWrapper>
  )
}