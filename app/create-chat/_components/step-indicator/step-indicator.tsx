"use client";

import styles from "./step-indicator.module.css";
import { StepEnum, stepOrder } from "../../_model/step";
import { useCreateChat } from "../../_store/create-chat";

export default function StepIndicator() {
  const currentStep = useCreateChat((state) => state.step);

  const isStepCompleted = (step: StepEnum) => {
    return stepOrder.indexOf(step) < stepOrder.indexOf(currentStep);
  };

  return (
    <div className={styles.stepContainer}>
      {stepOrder.map((step) => {
        const isActive = step === currentStep;
        const isCompleted = isStepCompleted(step);

        let stepClass = styles.stepBall;
        if (isActive) stepClass += ` ${styles.active}`;
        if (isCompleted) stepClass += ` ${styles.completed}`;

        return <div key={step} className={stepClass} />;
      })}
      <div className={styles.backLine} />
    </div>
  );
}