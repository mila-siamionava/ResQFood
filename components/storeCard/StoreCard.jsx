import styles from "./StoreCard.module.css";
import StoreAvatar from "../ui/StoreAvatar/StoreAvatar";
import Icon from "../ui/Icon/Icon";
import { Route } from "lucide-react";

const storeName = {
  netto: "Netto",
  foetex: "Føtex",
  bilka: "Bilka",
};

const getStoreName = (key) => {
  return storeName[key.toLowerCase()] || key;
};

export default function StoreCard({ store, distance }) {
  const displayName = getStoreName(store.brand);
  return (
    <>
      <div className={styles.storeCard}>
        <div className={styles.storeDetails}>
          <StoreAvatar brand={"netto"} size={"md"} />
          <p className={styles.storeName}>{displayName}</p>
          <p className={styles.storeAddress}>{store.address.street}</p>
          {distance && (
            <div className={styles.distance}>
              <Icon
                icon={Route}
                label="distance"
                size="xs"
                shape="square"
                className={styles.distanceIcon}
              />
            </div>
          )}
        </div>
        <div className={styles.workingDetails}></div>
        <div className={styles.offerDetails}></div>
      </div>
    </>
  );
}

// store: {
//       id: "5a5a3b85-1c8c-433e-a56c-23f6326306f7",
//       address: {
//         city: "Århus C",
//         country: "DK",
//         extra: null,
//         street: "Finderupvej 1-3",
//         zip: "8000",
//       },
//       brand: "netto",
//       coordinates: [10.182309, 56.154791],
//       hours: [
//         {
//           date: "2026-06-16",
//           type: "store",
//           open: "2026-06-16T07:00:00",
//           close: "2026-06-16T23:00:00",
//           closed: true,
//           customerFlow: [
//             0, 0, 0, 0, 0, 0, 0, 0.21, 0.21, 0.2, 0.26, 0.35, 0.38, 0.36, 0.44,
//             0.53, 0.68, 0.78, 0.69, 0.49, 0.44, 0.51, 0.55, 0.02,
//           ],
//         },
//     }
