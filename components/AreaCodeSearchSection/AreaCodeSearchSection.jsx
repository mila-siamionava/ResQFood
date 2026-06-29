"use client";
import { useRouter } from "next/navigation";
import AreaCodeSearch from "../AreaCodeSearch/AreaCodeSearch";

export default function AreaCodeSearchSection() {
 const router = useRouter();

  const handleAreaSearch = (validAreaCode) => {
     router.push(`/stores?zip=${validAreaCode}`);
    };
    
  return (
    <section>
      <AreaCodeSearch onAreaCodeSearch={handleAreaSearch} />
         </section>
  );
}
