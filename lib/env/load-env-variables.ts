import { APIProviderEnum } from "@/types/provider";

const keys = {
  OPENAI_API_KEY: APIProviderEnum.OpenAI,
  ANTHROPIC_API_KEY: APIProviderEnum.Anthropic,
  GOOGLE_GENERATIVE_AI_API_KEY: APIProviderEnum.Google,
};

export function loadEnvVariables() {
  return Object.entries(keys)
    .filter(([envKey]) => process.env[envKey])
    .map(([, provider]) => provider as APIProviderEnum);
}
