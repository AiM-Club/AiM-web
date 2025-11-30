import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout"
import * as S from "@/styles/Login.style";
import { PageTopic } from "@/components/text/PageTopic";
import { InputField } from "@/components/field/InputField";
import { SubmitBtn } from "@/components/button/SubmitBtn";
import { SocialLoginBtn } from "@/components/button/SocialLoginBtn";
import { useState, useEffect } from "react";
import { handleGoogleLogin, handleKakaoLogin } from "@/utils/oauth";

export const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 리다이렉트 후 돌아왔을 때 code 처리
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("Authorization code:", code);

      // URL에서 code 파라미터 제거 (선택사항)
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);

      // 백엔드 전송 코드
    }
  }, []);

  return (
    <DefaultLayout variant="login">
      <S.LoginWrapper>
        <S.TopicText>
          <PageTopic text="로그인" size="m" />
        </S.TopicText>
        <S.InputWrapper>
          <InputField label="아이디" value={id} setValue={setId} placeholder="아이디를 입력해 주세요" />
          <InputField label="비밀번호" value={password} setValue={setPassword} placeholder="비밀번호를 입력해 주세요" />
        </S.InputWrapper>
        <S.BtnGap>
          <S.ButtonWrapper>
            <SubmitBtn text="로그인" fill={true} active={id.trim().length > 0 && password.trim().length > 0} />
            <SubmitBtn text="회원가입" fill={false} />
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <SocialLoginBtn type="google" onClick={handleGoogleLogin} />
            <SocialLoginBtn type="kakao" onClick={handleKakaoLogin} />
          </S.ButtonWrapper>
        </S.BtnGap>
      </S.LoginWrapper>
    </DefaultLayout>
  )
}