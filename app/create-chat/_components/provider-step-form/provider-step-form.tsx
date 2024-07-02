import { APIProviderEnum } from "@/types/service";
import styles from "./provider-step-form.module.css";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function BasicStepForm({ apiProviders }: Props) {
  return (
    <section>
      <h3 className={styles.title}>기본 정보 입력</h3>
      <div className={styles.formGroup}>
        <label className={`${styles.inputLabel} ${styles.titleLabel}`}>
          채팅방 이름
          <input type="text" className={styles.textInput} />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.titleLabel}>서비스 제공 업체 선택</label>
        <p className={styles.description}>
          .env.local 파일에 API Key를 설정한 서비스만 나열됩니다.
        </p>
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
      <button className={styles.blockButton}>다음</button>
    </section>
  );
}
