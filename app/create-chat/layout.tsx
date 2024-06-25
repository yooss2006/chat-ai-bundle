import styles from "./page.module.css";

export default function CreateChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>채팅방 만들기</h2>
      {children}
    </div>
  );
}
