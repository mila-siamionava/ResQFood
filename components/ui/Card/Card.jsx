"use client";
import styles from "./Card.module.css";

export default function Card({ children, onClick, className = "" }) {
  const clickableClass = onClick ? styles.cardClickable : "";

  function handleKeyDown(event) {
    if (!onClick) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(event);
    }
  }
  return (
    <div
      className={`${styles.card} ${clickableClass} ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
