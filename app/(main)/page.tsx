import Image from "next/image";
import styles from "./page.module.css";
import ChatForm from "./_components/chat-form";

export default function Home() {
  return (
    <main>
      <h1>Chat AI Bundle</h1>
      <section className={styles.chatWindow}>
        <header className={styles.header}>
          <h2>ChatGPT</h2>
        </header>
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
                <div className={styles.username}>ChatGPT</div>
                <p className={styles.messageText}>ChatGPT!</p>
              </div>
              <div className={styles.avatar}>
                <Image
                  src="/chatgpt.svg"
                  alt="chatGPT"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          <div className={styles.messageContainer}>
            <div className={`${styles.message} ${styles.send}`}>
              <div className={styles.avatar}>🧑🏻‍💻</div>
              <div className={styles.messageContent}>
                <div className={styles.username}>나</div>
                <p className={styles.messageText}>너는 뭐하는 애야?</p>
              </div>
            </div>
            <div className={`${styles.message} ${styles.receive}`}>
              <div className={styles.messageContent}>
                <div className={styles.username}>ChatGPT</div>
                <p className={styles.messageText}>ChatGPT!</p>
              </div>
              <div className={styles.avatar}>
                <Image src="/claude.svg" alt="claude" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <ChatForm />
      </section>
    </main>
  );
}
