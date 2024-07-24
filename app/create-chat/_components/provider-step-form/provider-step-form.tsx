import { APIProviderEnum } from "@/types/provider";
import styles from "./provider-step-form.module.css";
import Header from "../header/header";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import { MotionBox } from "../motion-box/motion-box";
import { PROVIDER_OPTIONS } from "@/consts/provider";
import { useFormContext } from "react-hook-form";
import { ChatFormData } from "../../_types/form-data";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function ProviderStepForm({ apiProviders }: Props) {
  const {
    register,
    formState: { isDirty, isValid },
  } = useFormContext<ChatFormData>();
  const disabled = !(isDirty && isValid);

  return (
    <article>
      <MotionBox>
        <Header
          title="서비스 제공 업체 선택"
          description=".env.local 파일에 API Key를 설정한 서비스만 선택 가능합니다."
        />
        <div className={styles.formGroup}>
          <div className={styles.checkboxGroup}>
            {PROVIDER_OPTIONS.map((provider) => (
              <label key={provider} className={styles.inputLabel}>
                <input
                  {...register("provider", { required: true })}
                  type="checkbox"
                  value={provider}
                  disabled={!apiProviders.includes(provider)}
                />
                {provider}
              </label>
            ))}
          </div>
          {disabled && (
            <p className="errorMessage">
              서비스 제공 업체를 하나 이상 선택하세요.
            </p>
          )}
        </div>
      </MotionBox>
      <SubmitPageNavigator resetFields={["provider"]} disabled={disabled} />
    </article>
  );
}
