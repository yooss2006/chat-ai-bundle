import Textarea from "@/components/input/textarea/textarea";
import Header from "../header/header";
import { MotionBox } from "../motion-box/motion-box";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../_types/form-data";

export default function PromptStepForm() {
  const { register } = useFormContext<FormData>();

  return (
    <article>
      <MotionBox>
        <Header
          title="사전 프롬프트 설정"
          description="모델에 미리 제공할 프롬프트를 작성하세요."
        />
        <Textarea
          placeholder="프롬프트를 입력하세요."
          {...register("prompt")}
        />
      </MotionBox>
      <SubmitPageNavigator />
    </article>
  );
}
