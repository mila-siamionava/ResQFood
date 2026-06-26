"use client";

import { MapPin, Search } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./SearchInput.module.css";

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Enter your area code",
}) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="searchInput">
        {placeholder}
      </label>

      <div className={styles.inputGroup}>
        <Icon
          icon={MapPin}
          size="sm"
          shape="none"
          filled
          className={styles.locationIcon}
        />

        <input
          id="searchInput"
          className={styles.input}
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        <button className={styles.button} type="submit" aria-label="Search">
          <Icon
            icon={Search}
            size="sm"
            shape="none"
            strokeWidth={2.5}
            className={styles.searchIcon}
          />
        </button>
      </div>
    </form>
  );
}