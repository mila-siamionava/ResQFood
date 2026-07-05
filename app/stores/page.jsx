import StoreList from "@/components/storeList/StoreList";
import data from "../mockData/foodWaste";
import {
  getFoodWasteByGeo,
  getFoodWasteByZip,
} from "@/services/foodWasteService";

export default async function Stores({ searchParams }) {
  let storeData = [];
  const params = await searchParams;

  const source = params.source; //tells if it is search or geolocation
  const areaCode = params.zip;
  const latitude = params.lat;
  const longitude = params.lng;

  if (source === "search" && areaCode) {
    storeData = await getFoodWasteByZip(areaCode);
  } else if (source === "geolocation" && latitude && longitude) {
    storeData = await getFoodWasteByGeo(latitude, longitude);
  } else {
    storeData = data;
  }

  return (
    <>
      <p className="storeList-heading">Showing stores for {areaCode}</p>
      <StoreList data={storeData} />
      {/* remove this component and put it here */}
    </>
  );
}
