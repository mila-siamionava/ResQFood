import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
