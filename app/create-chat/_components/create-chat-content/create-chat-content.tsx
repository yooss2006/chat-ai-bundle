"use client";

import { FormEvent } from "react";
import { useCreateChat } from "../../_store/create-chat";
import { Step } from "../../_model/step";
import BasicStepForm from "../basic-step-form/basic-step-form";
import ModelStepForm from "../model-step-form/model-step-form";
import PromptStepForm from "../prompt-step-form/prompt-stem-form";
import { APIProviderEnum } from "@/types/service";

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
          case Step.Basic:
            return <BasicStepForm apiProviders={apiProviders} />;
          case Step.Model:
            return <ModelStepForm apiProviders={apiProviders} />;
          case Step.Prompt:
            return <PromptStepForm />;
          default:
            return null;
        }
      })()}
    </form>
  );
}
