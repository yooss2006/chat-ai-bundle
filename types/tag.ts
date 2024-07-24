export interface Tag {
  label: string;
  value: string;
  icon: string;
  support: {
    imageInput: boolean;
    objectGeneration: boolean;
    toolUsage: boolean;
    toolStreaming: boolean;
  };
}
