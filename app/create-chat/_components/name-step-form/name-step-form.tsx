import Header from "../header/header";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import styles from "./name-step-form.module.css";

export default function NameStepForm() {
  return (
    <article>
      <Header
        title="채팅방 이름 입력"
        description="사용하실 채팅방의 이름을 입력하세요."
      />
      <input
        type="text"
        placeholder="ex) 과학 탐구"
        className={styles.textInput}
      />
      <SubmitPageNavigator />
    </article>
  );
}
