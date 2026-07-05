import StoreCard from "@/components/storeCard/StoreCard";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { getFoodWasteByStoreId } from "@/services/foodWasteService";
import BackLink from "@/components/ui/BackLink/BackLink";
import dataFormatter from "@/components/storeList/dataFormatter.helper";
import styles from "./page.module.css";

export default async function StoreDetailsPage({ params }) {
  const { id } = await params;
  const storeData = await getFoodWasteByStoreId(id);
  const formattedStore = dataFormatter(storeData.store);

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <BackLink href="/stores" />
      </div>

      <StoreCard
        name={formattedStore.name}
        id={formattedStore.brand}
        address={formattedStore.address}
        distance={formattedStore.distance}
        openHours={formattedStore.workingHours}
        status={formattedStore.status}
        deals={storeData.clearances.length}
        variant="flat"
      />
      <ProductGrid clearances={storeData.clearances} />
    </main>
  );
}
