import { APIProviderEnum } from "@/types/service";
import Header from "../header/header";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function ModelStepForm({ apiProviders }: Props) {
  return (
    <article>
      <Header
        title="사용할 모델 설정"
        description="모델을 드래그해 아래 채팅방에 붙여 보세요."
      />
      <SubmitPageNavigator />
    </article>
  );
}
