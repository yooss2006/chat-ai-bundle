import { motion } from "framer-motion";
import styles from "./loading-page.module.css";

export default function LoadingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.loadingContainer}
    >
      <div className={styles.spinner} />
    </motion.div>
  );
}
