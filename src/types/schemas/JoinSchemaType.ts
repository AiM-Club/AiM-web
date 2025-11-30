import { z } from "zod";

export const joinSchema = z
  .object({
    id: z
      .string()
      .min(1, "*영문 소문자 + 숫자 / 8자 이상 16자 이하로 입력하세요")
      .regex(/^[a-z0-9]{8,16}$/, "*영문 소문자 + 숫자 / 8자 이상 16자 이하로 입력하세요"),
    password: z
      .string()
      .min(1, "*영문 소문자 + 숫자 + 특수기호 / 8자 이상 16자 이하로 입력하세요")
      .regex(
        /^[a-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.\/?]{8,16}$/,
        "*영문 소문자 + 숫자 + 특수기호 / 8자 이상 16자 이하로 입력하세요"
      ),
    passwordConfirm: z.string().min(1, "*비밀번호를 입력해 주세요"),
    nickname: z
      .string()
      .min(1, "*닉네임을 입력해 주세요")
      .regex(/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9]{2,10}$/, "*닉네임은 10자 이하의 숫자, 영문, 한글로 이뤄지게 입력하세요"),
    birth: z.string().min(1, "*생년월일을 선택해 주세요"),
    gender: z.string().min(1, "*성별을 선택해 주세요"),
    image: z
      .instanceof(File)
      .refine((data) => data.size <= 10 * 1024 * 1024, "*10MB 이하의 파일을 업로드하세요")
      .refine(
        (data) => ["image/jpeg", "image/jpg", "image/png"].includes(data.type),
        "*형식에 맞지 않는 이미지 파일입니다"
      )
      .optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "*비밀번호가 일치하지 않습니다",
    path: ["passwordConfirm"],
  });

export type JoinSchemaType = z.infer<typeof joinSchema>;
