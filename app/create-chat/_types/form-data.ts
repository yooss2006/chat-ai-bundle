import { Tag } from "@/types/tag";

export interface FormData {
  name: string;
  provider: Array<string>;
  model: {
    leftZone: Array<Tag>;
    rightZone: Array<Tag>;
  };
  prompt: string;
}
