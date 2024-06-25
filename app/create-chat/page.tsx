import { loadEnvVariables } from "@/lib/env/load-env-variables";
import CreateChatContent from "./_components/create-chat-content/create-chat-content";

export default function CreateChatPage() {
  const apiProviders = loadEnvVariables();
  return <CreateChatContent apiProviders={apiProviders} />;
}
