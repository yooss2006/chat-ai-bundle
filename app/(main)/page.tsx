import ChatContainer from "@/app/(main)/_components/chat-container/chat-container";

export default function Home() {
  return (
    <main>
      <h1>Chat AI Bundle</h1>
      <ChatContainer type="chatgpt" />
    </main>
  );
}
