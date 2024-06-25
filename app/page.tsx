import { getChatList } from "@/lib/file/load-chat";
import { redirect } from "next/navigation";

export default function HomePage() {
  const files = getChatList();
  if (files.length === 0) {
    redirect("/create-chat");
  } else if (files.length === 1) {
    redirect(`/chat/${files.at(-1)}`);
  }

  return null;
}
