export enum APIProviderEnum {
  OpenAI = "openAI",
  Anthropic = "anthropic",
  Google = "google",
}

interface Support {
  imageInput: boolean;
  objectGeneration: boolean;
  toolUsage: boolean;
  toolStreaming: boolean;
}

interface ProviderSetting {
  label: string;
  value: string;
  icon: string;
  support: Support;
}

export interface Providers {
  [key: string]: {
    [key: string]: ProviderSetting;
  };
}
