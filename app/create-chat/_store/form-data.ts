import { create } from "zustand";

interface Props {
  title: string;
  serviceProvider: Array<string>;
}

const initialState: Props = {
  title: "",
  serviceProvider: [],
};

export const useFormData = create<Props>()(() => initialState);
