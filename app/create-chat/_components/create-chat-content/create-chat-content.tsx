"use client";

import { useStep } from "../../_store/step";
import { StepEnum } from "../../_model/step";
import ProviderStepForm from "../provider-step-form/provider-step-form";
import ModelStepForm from "../model-step-form/model-step-form";
import PromptStepForm from "../prompt-step-form/prompt-stem-form";
import { APIProviderEnum } from "@/types/provider";
import NameStepForm from "../name-step-form/name-step-form";
import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { ChatFormData } from "../../_types/form-data";
import { postChatRoom } from "../../_api/post-chat-room";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import LoadingPage from "@/components/layout/loading-page/loading-page";

type Props = {
  apiProviders: Array<APIProviderEnum>;
};

export default function CreateChatContent({ apiProviders }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const method = useForm<ChatFormData>({
    defaultValues: {
      name: "",
      provider: [],
      model: {
        leftZone: [],
        rightZone: [],
      },
      prompt: "",
    },
  });
  const step = useStep((state) => state.step);

  const onSubmit = async (data: ChatFormData) => {
    setIsLoading(true);
    try {
      const res = await postChatRoom(data);
      router.replace(`/chat/${res.name}`);
    } catch (error: any) {
      toast.error(error?.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
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
                return <ModelStepForm key={StepEnum.Model} />;
              case StepEnum.Prompt:
                return <PromptStepForm key={StepEnum.Prompt} />;
              default:
                return null;
            }
          })()}
        </AnimatePresence>
        {isLoading && <LoadingPage />}
      </form>
    </FormProvider>
  );
}
