import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout"
import * as S from "@/styles/Login.style";
import { PageTopic } from "@/components/text/PageTopic";
import { InputField } from "@/components/field/InputField";
import { SubmitBtn } from "@/components/button/SubmitBtn";
import { SocialLoginBtn } from "@/components/button/SocialLoginBtn";
import { useState } from "react";
import { handleGoogleLogin, handleKakaoLogin } from "@/utils/oauth";
import { loginSchema, type LoginSchemaType } from "@/types/schemas/LoginSchemaType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints";
import { useLogin } from "@/api/auth";
import { useAuthStore } from "@/stores/authStore";

export const Login = () => {
  const [hasSubmitError, setHasSubmitError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  })

  const id = watch("id");
  const password = watch("password");
  const isFormValid = Boolean(
    id &&
    password &&
    typeof id === "string" &&
    typeof password === "string" &&
    id.trim().length > 0 &&
    password.trim().length > 0
  );

  const handleSubmitError = () => {
    setHasSubmitError(true);
  }

  const handleLoginClick = (data: LoginSchemaType) => {
    setHasSubmitError(false);
    console.log(data.id, data.password);
    loginMutate(
      {
        loginId: data.id,
        password: data.password,
      },
      {
        onSuccess: (response) => {
          setUser(response.data.user);
          localStorage.setItem("accessToken", response.data.token.accessToken);
          localStorage.setItem("refreshToken", response.data.token.refreshToken);
          navigate(PageEndPoints.HOME);
        },
        onError: (error: any) => {
          console.error("로그인 실패:", error);
          console.log(error?.response?.data?.message);
          setHasSubmitError(true);
        },
      }
    );
  }

  return (
    <DefaultLayout variant="login">
      <S.LoginWrapper>
        <S.TopicText>
          <PageTopic text="로그인" size="m" />
        </S.TopicText>
        <S.InputWrapper>
          <div>
            <InputField label="아이디" register={register("id")} placeholder="아이디를 입력해 주세요" />
          </div>
          <div>
            <InputField label="비밀번호" register={register("password")} placeholder="비밀번호를 입력해 주세요" />
            {/* FieldError로 api 연결 후 비밀번호가 일치하지 않습니다 에러 띄우기 */}
          </div>
        </S.InputWrapper>
        <S.BtnGap>
          <S.ButtonWrapper>
            <SubmitBtn text="로그인" fill={true} active={isFormValid && !hasSubmitError ? true : false} onSubmit={handleSubmit(handleLoginClick, handleSubmitError)} />
            <SubmitBtn text="회원가입" fill={false} onSubmit={() => navigate(PageEndPoints.JOIN)} />
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