import Header from "../header/header";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";

export default function PromptStepForm() {
  return (
    <article>
      <Header
        title="사용할 모델 설정"
        description="모델에 미리 제공할 프롬프트를 작성하세요."
      />
      <SubmitPageNavigator />
    </article>
  );
}
