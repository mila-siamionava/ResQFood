import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./InfoList.module.css";
export default function InfoList() {
  return (
    <div className={styles.list}>
      <p>
        <Logo markOnly className={styles.logo} />
        Salling Group and ResQFood have partnered to reduce food waste.
      </p>

      <p>
        <Logo markOnly className={styles.logo} />
        Every day, over 10,000 discounted food products are available in local
        stores.
      </p>

      <p>
        <Logo markOnly className={styles.logo} />
        Find offers near you and help rescue perfectly good food before it goes
        to waste.
      </p>
    </div>
  );
}
