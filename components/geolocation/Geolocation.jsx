"use client";
import styles from "./Geolocation.module.css";
import useGeolocation from "@/hooks/useGeolocation";
import AnimatedTargetIcon from "./AnimatedTargetIcon";

export function Geolocation({ setUserPosition }) {
  const { getUserLocation } = useGeolocation();

  const awaitLocation = async () => {
    try {
      const response = await getUserLocation();
      setUserPosition(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className={`${styles.locationButton} location-trigger target-container u-flex-center`}
        onClick={awaitLocation}
      >
        <AnimatedTargetIcon size={32} />
        <span className={styles.linkText}>Use my location instead</span>
      </button>
    </>
  );
}
