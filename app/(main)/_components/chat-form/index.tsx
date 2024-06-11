"use client";

import AuthTextarea from "@/components/input/auth-textarea";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";

export default function ChatForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
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
