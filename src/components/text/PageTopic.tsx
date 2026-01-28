//첫 글자가 초록색인 페이지 타이틀 component
import * as S from "./PageTopic.style";

// 로그인 페이지와 회원가입 페이지를 제외한 size는 l로 넘깁니다.
interface PageTopicProps {
  text: string;
  size: "s" | "m" | "l";
}

export const PageTopic = ({ text, size }: PageTopicProps) => {

  const firstText = text.slice(0, 1);
  const elseText = text.slice(1);

  const fontSize = size === "m" ? "headline-h-m" : size === "l" ? "headline-h-l" : "title-h-s";

  return (
    <S.PageTopicWrapper $size={fontSize}>
      <S.FirstText>{firstText}</S.FirstText>
      <S.ElseText>{elseText}</S.ElseText>
    </S.PageTopicWrapper>
  )
}