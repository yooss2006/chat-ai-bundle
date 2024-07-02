import { IoArrowBack } from "react-icons/io5";
import styles from "./submit-page-navigator.module.css";
import { useStep } from "../../_store/step";
import { StepEnum, stepOrder } from "../../_model/step";

type ButtonProps = {
  currentStep: StepEnum;
};

const NextButton = ({ currentStep }: ButtonProps) => {
  const isEndStep = currentStep === stepOrder.at(-1);
  const moveNextStep = useStep((state) => state.moveNextStep);

  const handleNextButtonClick = () => {
    if (isEndStep) {
      console.log("Submit form");
      return;
    }

    moveNextStep();
  };

  return (
    <button
      onClick={handleNextButtonClick}
      type={isEndStep ? "submit" : "button"}
      className={`${styles.button} ${styles.next}`}
    >
      다음
    </button>
  );
};

const BackButton = ({ currentStep }: ButtonProps) => {
  const isStartStep = currentStep === stepOrder[0];
  const movePrevStep = useStep((state) => state.movePrevStep);

  if (isStartStep) return null;

  return (
    <button
      onClick={movePrevStep}
      type="button"
      className={`${styles.button} ${styles.back}`}
    >
      <IoArrowBack />
    </button>
  );
};

export default function SubmitPageNavigator() {
  const currentStep = useStep((state) => state.step);

  return (
    <div className={styles.buttonGroup}>
      <BackButton currentStep={currentStep} />
      <NextButton currentStep={currentStep} />
    </div>
  );
}
