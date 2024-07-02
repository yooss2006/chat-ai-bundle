import styles from "./header.module.css";

type Props = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: Props) {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </>
  );
}
