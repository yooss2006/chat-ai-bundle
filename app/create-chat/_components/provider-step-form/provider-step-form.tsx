import { APIProviderEnum } from "@/types/service";
import styles from "./provider-step-form.module.css";
import Header from "../header/header";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import { MotionBox } from "../motion-box/motion-box";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function ProviderStepForm({ apiProviders }: Props) {
  return (
    <article>
      <MotionBox>
        <Header
          title="서비스 제공 업체 선택"
          description=".env.local 파일에 API Key를 설정한 서비스만 선택 가능합니다."
        />
        <div className={styles.formGroup}>
          <div className={styles.checkboxGroup}>
            <label className={styles.inputLabel}>
              <input type="checkbox" value="OpenAI" />
              Open AI
            </label>
            <label className={styles.inputLabel}>
              <input type="checkbox" value="Anthropic" />
              Anthropic
            </label>
            <label className={styles.inputLabel}>
              <input type="checkbox" value="Google" />
              Google
            </label>
          </div>
        </div>
      </MotionBox>
      <SubmitPageNavigator />
    </article>
  );
}
