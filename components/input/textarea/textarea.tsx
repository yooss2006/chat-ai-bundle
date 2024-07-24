"use client";
import React, { forwardRef, useRef } from "react";
import styles from "./textarea.module.css";
import { UseFormRegister } from "react-hook-form";
import { ChatFormData } from "@/app/create-chat/_types/form-data";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps & ReturnType<UseFormRegister<ChatFormData>>
>((props, ref) => {
  return <textarea {...props} ref={ref} className={styles.textarea} />;
});

Textarea.displayName = "Textarea";

export default Textarea;
