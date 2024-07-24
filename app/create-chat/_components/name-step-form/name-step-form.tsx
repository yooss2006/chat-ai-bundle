import { useFormContext } from "react-hook-form";
import Header from "../header/header";
import { MotionBox } from "../motion-box/motion-box";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import styles from "./name-step-form.module.css";
import { useEffect } from "react";
import { ChatFormData } from "../../_types/form-data";

const validateText = (value: string) => {
  if (!value) return "";
  if (value.trim() === "") {
    return "공백만 있을 수 없습니다.";
  }
  if (/^\s/.test(value)) {
    return "공백으로 시작할 수 없습니다.";
  }
  return undefined;
};

function NameInput() {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<ChatFormData>();
  const nameValue = watch("name", "");

  useEffect(() => {
    if (nameValue.trim() === "" || /^\s/.test(nameValue)) {
      setError("name", {
        type: "manual",
        message: validateText(nameValue),
      });
    } else {
      clearErrors("name");
    }
  }, [setError, clearErrors, nameValue]);

  return (
    <>
      <input
        {...register("name", {
          required: true,
          validate: validateText,
        })}
        type="text"
        placeholder="ex) 과학 탐구"
        className={`${styles.textInput} ${errors.name && "errorInput"}`}
      />
      {errors.name && <p className="errorMessage">{errors?.name?.message}</p>}
    </>
  );
}

export default function NameStepForm() {
  const {
    formState: { isDirty, isValid },
  } = useFormContext();
  const disabled = !(isDirty && isValid);

  return (
    <article>
      <MotionBox>
        <Header
          title="채팅방 이름 입력"
          description="사용하실 채팅방의 이름을 입력하세요."
        />
        <NameInput />
      </MotionBox>
      <SubmitPageNavigator disabled={disabled} />
    </article>
  );
}
