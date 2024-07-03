"use client";

import { FormEvent } from "react";
import { useStep } from "../../_store/step";
import { StepEnum } from "../../_model/step";
import ProviderStepForm from "../provider-step-form/provider-step-form";
import ModelStepForm from "../model-step-form/model-step-form";
import PromptStepForm from "../prompt-step-form/prompt-stem-form";
import { APIProviderEnum } from "@/types/service";
import NameStepForm from "../name-step-form/name-step-form";
import { AnimatePresence } from "framer-motion";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function CreateChatContent({ apiProviders }: Props) {
  const step = useStep((state) => state.step);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <AnimatePresence mode="wait" initial={false}>
        {(() => {
          switch (step) {
            case StepEnum.Name:
              return <NameStepForm key={StepEnum.Name} />;
            case StepEnum.Provider:
              return (
                <ProviderStepForm
                  key={StepEnum.Provider}
                  apiProviders={apiProviders}
                />
              );
            case StepEnum.Model:
              return (
                <ModelStepForm
                  key={StepEnum.Model}
                  apiProviders={apiProviders}
                />
              );
            case StepEnum.Prompt:
              return <PromptStepForm key={StepEnum.Prompt} />;
            default:
              return null;
          }
        })()}
      </AnimatePresence>
    </form>
  );
}
