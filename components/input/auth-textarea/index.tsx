"use client";
import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function AuthTextarea(props: TextareaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [props.value]);

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      rows={1}
      className={styles.authTextarea}
    />
  );
}
