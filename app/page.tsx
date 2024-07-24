import { getChatRoomList } from "@/lib/file/load-chat-room";
import { redirect } from "next/navigation";

export default function HomePage() {
  const chatRoomList = getChatRoomList();
  if (chatRoomList.length === 0) {
    redirect("/create-chat");
  } else if (chatRoomList.length === 1) {
    redirect(`/chat/${chatRoomList.at(-1)}`);
  }

  return null;
}
