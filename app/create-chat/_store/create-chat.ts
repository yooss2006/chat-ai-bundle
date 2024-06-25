import { create } from "zustand";
import { Step } from "../_model/step";

interface Props {
  title: string;
  serviceProvider: Array<string>;
  step: Step;
}

const initialState: Props = {
  title: "",
  serviceProvider: [],
  step: Step.Basic,
};

export const useCreateChat = create<Props>()(() => initialState);
