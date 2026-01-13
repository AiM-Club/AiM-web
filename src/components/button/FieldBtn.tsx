import * as  S from "./FieldBtn.style";

const FieldBtn = ({ text }: { text: string }) => {
  return (
    <S.FieldBtnWrapper>
      {text}
    </S.FieldBtnWrapper>
  )
}

export default FieldBtn;