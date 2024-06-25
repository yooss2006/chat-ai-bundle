"use client";

import AuthTextarea from "@/components/input/auth-textarea/auth-textarea";
import styles from "./chat-form.module.css";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import { useChatStore } from "@/store/chat";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/api/message/send-message";

export default function ChatForm() {
  const [text, setText] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const { mutate, data } = useMutation({ mutationFn: sendMessage });
  console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addMessage(text);
    mutate(text);
    setText("");
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleSubmit}>
        <AuthTextarea
          value={text}
          onChange={handleTextChange}
          placeholder="질문을 입력하세요."
        />
        <button
          className={cx(styles.sendButton, !text && styles.disabled)}
          type="submit"
        >
          <Image src="/send.svg" alt="보내기" width={24} height={24} />
        </button>
      </form>
    </div>
  );
}
