"use client";

import { useStep } from "../../_store/step";
import { StepEnum } from "../../_model/step";
import ProviderStepForm from "../provider-step-form/provider-step-form";
import ModelStepForm from "../model-step-form/model-step-form";
import PromptStepForm from "../prompt-step-form/prompt-stem-form";
import { APIProviderEnum } from "@/types/service";
import NameStepForm from "../name-step-form/name-step-form";
import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "../../_types/form-data";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function CreateChatContent({ apiProviders }: Props) {
  const method = useForm<FormData>({
    defaultValues: {
      name: "",
      provider: [],
      model: [],
      prompt: "",
    },
  });
  const step = useStep((state) => state.step);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
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
    </FormProvider>
  );
}
