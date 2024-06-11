"use client";

import Image from "next/image";
import styles from "./chat-content.module.css";
import { CHAT_MAP } from "@/consts/chat";
import { ChatType } from "@/types/Chat";

interface Props {
  type: ChatType;
}

export default function ChatContent({ type }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.messageContainer}>
        <div className={`${styles.message} ${styles.send}`}>
          <div className={styles.avatar}>🧑🏻‍💻</div>
          <div className={styles.messageContent}>
            <div className={styles.username}>나</div>
            <p className={styles.messageText}>안녕! 너의 이름은 뭐니?</p>
          </div>
        </div>
        <div className={`${styles.message} ${styles.receive}`}>
          <div className={styles.messageContent}>
            <div className={styles.username}>{CHAT_MAP[type].name}</div>
            <p className={styles.messageText}>ChatGPT!</p>
          </div>
          <div className={styles.avatar}>
            <Image
              src={CHAT_MAP[type].avatar}
              alt={CHAT_MAP[type].name}
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
