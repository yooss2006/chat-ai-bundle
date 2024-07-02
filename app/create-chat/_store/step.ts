import { create } from "zustand";
import { StepEnum, stepOrder } from "../_model/step";

interface Props {
  step: StepEnum;
  moveNextStep: () => void;
  movePrevStep: () => void;
  reset: () => void;
}

export const useStep = create<Props>()((set, get) => ({
  step: StepEnum.Name,
  moveNextStep: () => {
    const currentStep = get().step;
    const currentStepIndex = stepOrder.indexOf(currentStep);
    if (currentStepIndex === stepOrder.length - 1) return;
    const nextStep = stepOrder[currentStepIndex + 1];
    set({ step: nextStep });
  },
  movePrevStep: () => {
    const currentStep = get().step;
    const stepOrder = Object.values(StepEnum);
    const currentStepIndex = stepOrder.indexOf(currentStep);
    if (currentStepIndex === 0) return;
    const prevStep = stepOrder[currentStepIndex - 1];
    set({ step: prevStep });
  },
  reset: () => {
    set({ step: StepEnum.Name });
  },
}));
