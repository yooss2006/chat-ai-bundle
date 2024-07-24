import { Tag } from "@/types/tag";

export interface ChatFormData {
  name: string;
  provider: Array<string>;
  model: {
    leftZone: Array<Tag>;
    rightZone: Array<Tag>;
  };
  prompt: string;
}
