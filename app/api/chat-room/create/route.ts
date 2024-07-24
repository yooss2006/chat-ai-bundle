import { getChatRoomList } from "@/lib/file/load-chat-room";
import { writeFile } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  const reqData = await req.json();
  const chatRoomName = reqData.name;
  const chatRoomList = getChatRoomList() || [];
  const chatDir = path.join(process.cwd(), "chat");

  if (chatRoomList.includes(chatRoomName)) {
    return NextResponse.json(
      { error: "이미 존재하는 채팅방 이름입니다." },
      { status: 400 }
    );
  }

  const outputData = {
    ...reqData,
    created_at: new Date().toISOString(),
    messages: [],
  };

  await writeFile(
    `chat/${chatRoomName}.json`,
    JSON.stringify(outputData, null, 2),
    (err: any) => {
      return NextResponse.json(
        { error: "채팅방 생성에 실패했습니다." },
        { status: 500 }
      );
    }
  );

  return NextResponse.json(outputData);
}
