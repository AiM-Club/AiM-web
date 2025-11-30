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
import { useState } from "react";

export const Join = () => {
  const [hasSubmitError, setHasSubmitError] = useState<boolean>(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<JoinSchemaType>({
    resolver: zodResolver(joinSchema),
    mode: "onChange",
    defaultValues: {
      birth: "",
      gender: "",
    },
  })

  const handleJoinClick = (data: JoinSchemaType) => {
    setHasSubmitError(false);
    console.log(data);
    alert("가입");
    //백엔드 전송 코드
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
              placeholder="아이디를 입력해 주세요"
              checkDuplicate={true}
              register={register("id")}
            />
            <FieldError error={errors.id?.message} />
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
              placeholder="닉네임을 입력해 주세요"
              checkDuplicate={true}
              register={register("nickname")}
            />
            <FieldError error={errors.nickname?.message} />
          </div>
          <div>
            <Controller
              name="birth"
              control={control}
              render={({ field }) => (
                <BirthSelect onChange={field.onChange} />
              )}
            />
            <FieldError error={errors.birth?.message} />
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
              name="image"
              control={control}
              render={({ field }) => (
                <ImageInput onChange={field.onChange} />
              )}
            />
            <FieldError error={errors.image?.message} />
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