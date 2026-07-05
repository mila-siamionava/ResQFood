import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Icon from "../Icon/Icon";
import styles from "./BackLink.module.css";
export default function BackLink({ href = "/" }) {
  return (
    <Link href={href} aria-label="Go back" className={styles.backLink}>
      <Icon icon={ArrowLeft} size="sm" shape="none" color="darkGreen" />
    </Link>
  );
}
