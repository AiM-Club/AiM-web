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
import { useAuthStore } from "@/stores/authStore";
import { useExistNickname, useLogout } from "@/api/auth";
import { useGetPhoto } from "@/api/photo";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import Lock from "@/assets/Lock.svg";
import { userUpdateMyProfile } from "@/api/user";
import { PageEndPoints } from "@/constants/endpoints";

const MySettings = () => {
  const { user, userPhoto } = useAuthStore();
  const { mutate: getPhoto } = useGetPhoto();
  const [nicknameDuplicateError, setNicknameDuplicateError] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Partial<JoinSchemaType>>({});
  const { mutate: existNickname } = useExistNickname();
  const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);
  const { mutate: updateMyProfile } = userUpdateMyProfile();
  const { mutate: logoutMutate } = useLogout();
  const { logout } = useAuthStore();
  // gender 변환 함수
  const convertGender = (gender?: string): string => {
    if (!gender) return "";
    if (gender === "MALE") return "남";
    if (gender === "FEMALE") return "여";
    if (gender === "OTHER") return "기타";
    return "";
  };

  const {
    register,
    control,
    watch,
    reset,
    formState: { errors }
  } = useForm<JoinSchemaType>({
    resolver: zodResolver(joinSchema),
    mode: "onChange",
    defaultValues: {
      loginId: user?.loginId || "",
      nickname: user?.nickname || "",
      password: "",
      passwordConfirm: "",
      birthday: user?.birthday || "",
      gender: convertGender(user?.gender),
      profileImage: undefined,
    },
  })

  const nickname = watch("nickname");
  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");
  const birthday = watch("birthday");
  const gender = watch("gender");
  const profileImage = watch("profileImage");

  // userPhoto 가져오기
  useEffect(() => {
    if (user?.profileImage?.uuid) {
      getPhoto({ file_uuid: user.profileImage.uuid });
    }
  }, [user?.profileImage?.uuid, getPhoto]);

  const profileImageUrl = useUserPhotoUrl(userPhoto);

  // 초기값 저장
  useEffect(() => {
    if (user) {
      const initial = {
        loginId: user.loginId || "",
        nickname: user.nickname || "",
        birthday: user.birthday || "",
        gender: convertGender(user.gender),
      };
      setInitialValues(initial);
      reset({
        ...initial,
        password: "",
        passwordConfirm: "",
        profileImage: undefined,
      });
    }
  }, [user, reset]);

  // 닉네임이 변경되면 중복 확인 초기화
  useEffect(() => {
    if (isEditMode && nickname !== initialValues.nickname) {
      setNicknameDuplicateError("");
      setNicknameCheck(false);
    }
  }, [nickname, isEditMode, initialValues.nickname]);

  // 변경 모드 토글
  const handleEditToggle = () => {
    if (isEditMode) {
      // 완료 버튼 클릭
      handleUpdate();
    } else {
      // 변경 버튼 클릭
      setIsEditMode(true);
    }
  };

  // 변경된 필드만 추적하여 FormData 생성 후 API 호출
  const handleUpdate = () => {
    // 비밀번호가 입력되었을 때 비밀번호 확인 검증
    if (password && password.trim() !== "") {
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다");
        return;
      }
    }

    if (nickname !== initialValues.nickname) {
      // 닉네임이 변경되었을 때만 중복 확인 필요
      if (!nicknameCheck) {
        alert("닉네임 중복 확인을 해주세요");
        return;
      }
    }

    // 변경된 필드 확인
    const hasChanges =
      (password && password.trim() !== "") ||
      nickname !== initialValues.nickname ||
      birthday !== initialValues.birthday ||
      gender !== initialValues.gender ||
      profileImage !== undefined;

    if (!hasChanges) {
      alert("변경된 내용이 없습니다.");
      setIsEditMode(false);
      return;
    }

    // FormData 생성
    const formData = new FormData();

    if (password && password.trim() !== "") {
      formData.append("password", password);
    }

    if (nickname !== initialValues.nickname) {
      formData.append("nickname", nickname);
    }

    if (birthday !== initialValues.birthday) {
      formData.append("birthday", birthday);
    }

    if (gender !== initialValues.gender) {
      const genderValue = gender === "남" ? "MALE" : gender === "여" ? "FEMALE" : "OTHER";
      formData.append("gender", genderValue);
    }

    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    // API 호출
    updateMyProfile(formData, {
      onSuccess: (response) => {
        console.log("프로필 수정 성공:", response);
        alert("프로필이 수정되었습니다.");
        setIsEditMode(false);
        window.location.reload();
      },
      onError: (error: any) => {
        console.error("프로필 수정 실패:", error);
        alert(error?.response?.data?.message || "프로필 수정에 실패했습니다.");
      },
    });
  };

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

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      logoutMutate(undefined, {
        onSuccess: () => {
          logout();
          window.location.href = PageEndPoints.HOME;
        },
        onError: (error: any) => {
          console.error("로그아웃 실패:", error);
          alert("로그아웃에 실패했습니다.");
        },
      });
    }
  }

  return (
    <DefaultLayout>
      {user ? (
        <S.JoinWrapper>
          <PageTopic text="계정 설정" size="m" />
          <S.InputWrapper>
            <div>
              <InputField
                label="아이디"
                value={user?.loginId || ""}
                placeholder="아이디를 입력해 주세요"
                checkDuplicate={false}
                register={register("loginId")}
                disabled={true}
              />
              <FieldError error={errors.loginId?.message} />
            </div>
            <div>
              <InputField
                label="비밀번호"
                placeholder="비밀번호를 입력해 주세요"
                register={register("password")}
                disabled={!isEditMode}
              />
              <FieldError error={errors.password?.message} />
            </div>
            <div>
              <InputField
                label="비밀번호 확인"
                placeholder="비밀번호를 입력해 주세요"
                register={register("passwordConfirm")}
                disabled={!isEditMode}
              />
              <FieldError error={errors.passwordConfirm?.message} />
            </div>
            <div>
              <InputField
                label="닉네임"
                value={user?.nickname || ""}
                placeholder="닉네임을 입력해 주세요"
                checkDuplicate={true}
                register={register("nickname")}
                onDuplicateCheck={handleNicknameCheck}
                disabled={!isEditMode}
              />
              <FieldError error={errors.nickname?.message || nicknameDuplicateError} />
            </div>
            <div>
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  <BirthSelect value={field.value} onChange={field.onChange} disabled={!isEditMode} />
                )}
              />
              <FieldError error={errors.birthday?.message} />
            </div>
            <div>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <GenderSelect value={field.value} onChange={field.onChange} disabled={!isEditMode} />
                )}
              />
              <FieldError error={errors.gender?.message} />
            </div>
            <div>
              <Controller
                name="profileImage"
                control={control}
                render={({ field }) => (
                  <ImageInput initialPreview={profileImageUrl} onChange={field.onChange} disabled={!isEditMode} />
                )}
              />
              <FieldError error={errors.profileImage?.message} />
            </div>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <SubmitBtn
              text={isEditMode ? "완료" : "편집"}
              fill={true}
              active={true}
              onSubmit={handleEditToggle}
            />
            <SubmitBtn
              text="로그아웃"
              fill={false}
              active={true}
              onSubmit={handleLogout}
            />
          </S.ButtonWrapper>
        </S.JoinWrapper>
      ) : (
        <S.EmptyState>
          <S.LockImage src={Lock} />
          로그인 후 이용 가능합니다
        </S.EmptyState>
      )}
    </DefaultLayout>
  )
}

export default MySettings;
