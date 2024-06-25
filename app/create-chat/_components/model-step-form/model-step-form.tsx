import { APIProviderEnum } from "@/types/service";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function ModelStepForm({ apiProviders }: Props) {
  return (
    <section>
      <h3>모델 정보 입력</h3>
    </section>
  );
}
