import StepIndicator from "./_components/step-indicator/step-indicator";
import styles from "./page.module.css";

export default function CreateChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>채팅방 생성하기</h2>
        <StepIndicator />
      </header>
      {children}
    </div>
  );
}
