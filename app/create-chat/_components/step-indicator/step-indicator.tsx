"use client";

import styles from "./step-indicator.module.css";
import { motion } from "framer-motion";
import { StepEnum, stepOrder } from "../../_model/step";
import { useStep } from "../../_store/step";

export default function StepIndicator() {
  const currentStep = useStep((state) => state.step);

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

        const animate = isActive ? { scale: [1, 1.1, 1] } : undefined;
        const transition = isActive
          ? { duration: 0.5, ease: "easeInOut" }
          : undefined;

        return (
          <motion.div
            animate={animate}
            transition={transition}
            key={step}
            className={stepClass}
          />
        );
      })}
      <div className={styles.backLine} />
    </div>
  );
}
