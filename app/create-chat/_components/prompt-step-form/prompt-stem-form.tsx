import Header from "../header/header";
import { MotionBox } from "../motion-box/motion-box";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";

export default function PromptStepForm() {
  return (
    <article>
      <MotionBox>
        <Header
          title="사전 프롬프트 설정"
          description="모델에 미리 제공할 프롬프트를 작성하세요."
        />
      </MotionBox>
      <SubmitPageNavigator />
    </article>
  );
}
