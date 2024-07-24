import Header from "../header/header";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import { MotionBox } from "../motion-box/motion-box";

import { useFormContext } from "react-hook-form";
import { ChatFormData } from "../../_types/form-data";
import DragAndDrop from "../model-drag-and-drop/model-drag-and-drop";
import { useMemo } from "react";
import { PROVIDER } from "@/consts/provider";
import { Tag } from "@/types/tag";

export default function ModelStepForm() {
  const {
    watch,
    formState: { isDirty, isValid },
  } = useFormContext<ChatFormData>();
  const disabled = !(isDirty && isValid);

  const provider = useMemo(() => watch("provider") || [], [watch]);
  const models = useMemo(
    () =>
      provider.reduce((acc: Array<Tag>, cur) => {
        const models = PROVIDER[cur];
        if (!models) return acc;
        return [...acc, ...Object.values(models)];
      }, []),
    [provider]
  );

  return (
    <article>
      <MotionBox>
        <Header
          title="사용할 모델 설정"
          description="모델을 드래그해 아래 채팅방에 붙여 보세요."
        />
      </MotionBox>
      <DragAndDrop models={models} />
      <SubmitPageNavigator resetFields={["model"]} disabled={disabled} />
    </article>
  );
}
