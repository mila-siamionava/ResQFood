import StoreCard from "@/components/storeCard/StoreCard";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { getFoodWasteByStoreId } from "@/services/storesService";

export default async function StoreDetailsPage({ params }) {
  const { id } = await params;
  const storeData = await getFoodWasteByStoreId(id);
  return (
    <main>
      <StoreCard
        name={storeData.store.name}
        id={storeData.store.brand}
        address={`${storeData.store.address.street}, ${storeData.store.address.zip} ${storeData.store.address.city}`}
        distance={null}
        openHours={"07:00-22:00"}
        status={"open"}
        deals={storeData.clearances.length}
      />
      <ProductGrid clearances={storeData.clearances} />
    </main>
  );
}
