import Header from "../header/header";
import { MotionBox } from "../motion-box/motion-box";
import SubmitPageNavigator from "../submit-page-navigator/submit-page-navigator";
import styles from "./name-step-form.module.css";

export default function NameStepForm() {
  return (
    <article>
      <MotionBox>
        <Header
          title="채팅방 이름 입력"
          description="사용하실 채팅방의 이름을 입력하세요."
        />
        <input
          type="text"
          placeholder="ex) 과학 탐구"
          className={styles.textInput}
        />
      </MotionBox>
      <SubmitPageNavigator />
    </article>
  );
}
