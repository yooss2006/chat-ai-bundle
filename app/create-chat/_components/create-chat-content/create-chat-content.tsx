"use client";

import { FormEvent } from "react";
import { useCreateChat } from "../../_store/create-chat";
import { StepEnum } from "../../_model/step";
import BasicStepForm from "../provider-step-form/provider-step-form";
import ModelStepForm from "../model-step-form/model-step-form";
import PromptStepForm from "../prompt-step-form/prompt-stem-form";
import { APIProviderEnum } from "@/types/service";
import NameStepForm from "../name-step-form/name-step-form";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function CreateChatContent({ apiProviders }: Props) {
  const step = useCreateChat((state) => state.step);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {(() => {
        switch (step) {
          case StepEnum.Name:
            return <NameStepForm />;
          case StepEnum.Provider:
            return <BasicStepForm apiProviders={apiProviders} />;
          case StepEnum.Model:
            return <ModelStepForm apiProviders={apiProviders} />;
          case StepEnum.Prompt:
            return <PromptStepForm />;
          default:
            return null;
        }
      })()}
    </form>
  );
}
