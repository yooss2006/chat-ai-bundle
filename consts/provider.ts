import { APIProviderEnum, Providers } from "@/types/provider";

export const PROVIDER_OPTIONS = [
  APIProviderEnum.OpenAI,
  APIProviderEnum.Anthropic,
];

export const PROVIDER: Providers = {
  [APIProviderEnum.OpenAI]: {
    ["gpt-4o"]: {
      label: "GPT4o",
      value: "gpt-4o",
      icon: "/chatgpt.svg",
      support: {
        imageInput: true,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
    ["gpt-4-turbo"]: {
      label: "GPT4 Turbo",
      value: "gpt-4-turbo",
      icon: "/chatgpt.svg",
      support: {
        imageInput: true,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
    ["gpt-4"]: {
      label: "GPT4",
      value: "gpt-4",
      icon: "/chatgpt.svg",
      support: {
        imageInput: false,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
    ["gpt-3.5-turbo"]: {
      label: "GPT3.5 Turbo",
      value: "gpt-3.5-turbo",
      icon: "/chatgpt.svg",
      support: {
        imageInput: false,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
  },
  [APIProviderEnum.Anthropic]: {
    ["claude-3-5-sonnet-20240620"]: {
      label: "Claude3.5 Sonnet",
      value: "claude-3-5-sonnet-20240620",
      icon: "/claude.svg",
      support: {
        imageInput: true,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
    ["claude-3-opus-20240229"]: {
      label: "Claude3 Opus",
      value: "claude-3-opus-20240229",
      icon: "/claude.svg",
      support: {
        imageInput: true,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
    ["claude-3-sonnet-20240229"]: {
      label: "Claude3 Sonnet",
      value: "claude-3-sonnet-20240229",
      icon: "/claude.svg",
      support: {
        imageInput: true,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
    ["claude-3-haiku-20240307"]: {
      label: "Claude3 Haiku",
      value: "claude-3-haiku-20240307",
      icon: "/claude.svg",
      support: {
        imageInput: true,
        objectGeneration: true,
        toolUsage: true,
        toolStreaming: true,
      },
    },
  },
};
