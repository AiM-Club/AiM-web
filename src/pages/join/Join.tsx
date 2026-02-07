import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/Join.style";
import { PageTopic } from "@/components/text/PageTopic";
import { InputField } from "@/components/field/InputField";
import { SubmitBtn } from "@/components/button/SubmitBtn";
import { BirthSelect } from "@/components/field/BirthSelect";
import { GenderSelect } from "@/components/field/GenderSelect";
import { ImageInput } from "@/components/field/ImageInput";
import { FieldError } from "@/components/error/FieldError";
import { Controller, useForm } from "react-hook-form";
import { joinSchema, type JoinSchemaType } from "@/types/schemas/JoinSchemaType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useExistId, useExistNickname, useJoin } from "@/api/auth";
import { PageEndPoints } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const [hasSubmitError, setHasSubmitError] = useState<boolean>(false);
  const [idDuplicateError, setIdDuplicateError] = useState<string>("");
  const [nicknameDuplicateError, setNicknameDuplicateError] = useState<string>("");
  const { mutate: joinMutate } = useJoin();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<JoinSchemaType>({
    resolver: zodResolver(joinSchema),
    mode: "onChange",
    defaultValues: {
      birthday: "",
      gender: "",
    },
  })

  const loginId = watch("loginId");
  const nickname = watch("nickname");
  const navigate = useNavigate();
  const { mutate: existNickname } = useExistNickname();
  const { mutate: existId } = useExistId();
  const [idCheck, setIdCheck] = useState<boolean>(false);
  const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);

  // input 값이 변경되면 중복 에러 초기화
  useEffect(() => {
    setIdDuplicateError("");
    setIdCheck(false);
  }, [loginId]);

  useEffect(() => {
    setNicknameDuplicateError("");
    setNicknameCheck(false);
  }, [nickname]);


  const handleJoinClick = (data: JoinSchemaType) => {
    console.log(idCheck, nicknameCheck);
    if (!idCheck || !nicknameCheck) {
      alert("아이디 또는 닉네임 중복 확인을 해주세요");
      return;
    }
    setHasSubmitError(false);
    console.log(data);
    alert("회원가입 성공");
    const formData = new FormData();
    formData.append("loginId", data.loginId);
    formData.append("nickname", data.nickname);
    formData.append("password", data.password);
    formData.append("birthday", data.birthday);
    formData.append("gender", data.gender == "남" ? "MALE" : data.gender == "여" ? "FEMALE" : "OTHER");
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }
    joinMutate(formData, {
      onSuccess: (response) => {
        navigate(PageEndPoints.LOGIN);
        console.log(response);
      },
      onError: (error: any) => {
        console.error("가입 실패:", error);
        console.log(error?.response?.data?.message);
        setHasSubmitError(true);
      }
    }
    );
  }

  const handleNicknameCheck = () => {
    if (!nickname || nickname.trim() === "") {
      return;
    }
    setNicknameDuplicateError("");
    existNickname(
      { nickname },
      {
        onSuccess: (data) => {
          setNicknameCheck(!data.data.isExist);
          if (data.data.isExist) {
            setNicknameDuplicateError("*이미 존재하는 닉네임입니다");
          } else {
            setNicknameDuplicateError("*사용 가능한 닉네임입니다");
          }
        },
        onError: (error: any) => {
          console.error("닉네임 중복 확인 실패:", error);
        },
      }
    );
  }

  const handleIdCheck = () => {
    if (!loginId || loginId.trim() === "") {
      return;
    }
    setIdDuplicateError("");
    existId(
      { id: loginId },
      {
        onSuccess: (data) => {
          console.log(data);
          setIdCheck(!data.data.isExist);
          if (data.data.isExist) {
            setIdDuplicateError("*이미 존재하는 아이디입니다");
          } else {
            setIdDuplicateError("*사용 가능한 아이디입니다");
          }
        },
        onError: (error: any) => {
          console.error("아이디 중복 확인 실패:", error);
        },
      }
    );
  }

  const handleSubmitError = () => {
    setHasSubmitError(true);
  }

  return (
    <DefaultLayout variant="login">
      <S.JoinWrapper>
        <PageTopic text="회원가입" size="m" />
        <S.InputWrapper>
          <div>
            <InputField
              label="아이디"
              value={loginId || ""}
              placeholder="아이디를 입력해 주세요"
              checkDuplicate={true}
              register={register("loginId")}
              onDuplicateCheck={handleIdCheck}
            />
            <FieldError error={errors.loginId?.message} />
            <FieldError error={idDuplicateError} />
            {/* error state 만들어서 api 연결 후 error?FieldError 한번 더 호출 */}
          </div>
          <div>
            <InputField
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              register={register("password")}
            />
            <FieldError error={errors.password?.message} />
          </div>
          <div>
            <InputField
              label="비밀번호 확인"
              placeholder="비밀번호를 입력해 주세요"
              register={register("passwordConfirm")}
            />
            <FieldError error={errors.passwordConfirm?.message} />
          </div>
          <div>
            <InputField
              label="닉네임"
              value={nickname || ""}
              placeholder="닉네임을 입력해 주세요"
              checkDuplicate={true}
              register={register("nickname")}
              onDuplicateCheck={handleNicknameCheck}
            />
            <FieldError error={errors.nickname?.message || nicknameDuplicateError} />
          </div>
          <div>
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <BirthSelect onChange={field.onChange} />
              )}
            />
            <FieldError error={errors.birthday?.message} />
          </div>
          <div>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <GenderSelect value={field.value} onChange={field.onChange} />
              )}
            />
            <FieldError error={errors.gender?.message} />
          </div>
          <div>
            <Controller
              name="profileImage"
              control={control}
              render={({ field }) => (
                <ImageInput onChange={field.onChange} />
              )}
            />
            <FieldError error={errors.profileImage?.message} />
          </div>
        </S.InputWrapper>
        <div>
          <SubmitBtn text="가입" fill={true} active={true} onSubmit={handleSubmit(handleJoinClick, handleSubmitError)} />
          {hasSubmitError && <FieldError error="*기입 하지 않은 정보가 있습니다" />}
        </div>
      </S.JoinWrapper>
    </DefaultLayout>
  )
}