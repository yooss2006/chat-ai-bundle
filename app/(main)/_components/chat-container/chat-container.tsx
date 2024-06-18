import styles from "./chat-container.module.css";
import ChatForm from "@/app/(main)/_components/chat-form/chat-form";
import { CHAT_MAP } from "@/consts/chat";
import { ChatType } from "@/types/chat";
import ChatContent from "../chat-content/chat-content";

interface Props {
  type: ChatType;
}

export default function ChatContainer({ type }: Props) {
  return (
    <section className={styles.chatContainer}>
      <header className={styles.header}>
        <h2>{CHAT_MAP[type].name}</h2>
      </header>
      <ChatContent type={type} />
      <ChatForm />
    </section>
  );
}
