import { create } from "zustand";
import { StepEnum } from "../_model/step";

interface Props {
  title: string;
  serviceProvider: Array<string>;
  step: StepEnum;
}

const initialState: Props = {
  title: "",
  serviceProvider: [],
  step: StepEnum.Name,
};

export const useCreateChat = create<Props>()(() => initialState);
