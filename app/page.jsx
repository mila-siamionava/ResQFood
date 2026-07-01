"use client";

import { useState } from "react";

import FrontpageBanner from "@/components/FrontpageBanner/FrontpageBanner";
import InfoList from "@/components/ui/InfoList/InfoList";
import Message from "@/components/ui/Message/Message";
import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { Geolocation } from "@/components/geolocation/Geolocation";
import styles from "./page.module.css";

export default function Home() {
  const [locationError, setLocationError] = useState(null);

  const handleLocationError = (errorCode) => {
    setLocationError(errorCode);
  };

  const getLocationErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 1:
        return "Location access was denied. Please allow location access or try again.";
      case 2:
        return "We could not determine your location right now. Please try again.";
      case 3:
        return "Location request timed out. Please try again.";
      default:
        return "We could not access your location. Please try again.";
    }
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.section}>
        <FrontpageBanner />
      </div>
      <div className={styles.section}>
        {locationError ? (
          <Message type="error">{getLocationErrorMessage(locationError)}</Message>
        ) : (
          <InfoList />
        )}
      </div>
      <div className={styles.section}>
        <SearchInput
          onSearch={(searchTerm) => {
            console.log("Search term:", searchTerm);
          }}
        />
      </div>
      <div className={styles.section}>
        <Geolocation
          setUserPosition={(position) => {
            setLocationError(null);
            console.log("User position:", position);
          }}
          getError={handleLocationError}
        />
      </div>
      <div className={styles.section}>
        <p className={styles.notice}>Start reducing food waste in 3 simple steps:</p>
      </div>
    </div>
  );
}