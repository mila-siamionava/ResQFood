
import Image from "next/image";
import Badge from "../ui/Badge/Badge";
import { getExpiryLabel, isExpired } from "@/utils/expiry";
import styles from "./ProductDetailCard.module.css";

function ClockIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5v5l3 1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function StockIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 3.5 4.5 7.3v9.4L12 20.5l7.5-3.8V7.3L12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M4.8 7.4 12 11l7.2-3.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M12 11v9.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}

export default function ProductDetailCard({ offer, product }) {
    const expired = isExpired(offer.endTime);
        const topLevelCategory = product?.categories?.en?.split(">")?.[0]?.trim() || "Uncategorized";


    return (
        <article className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.productImage}
                    src={product.image}
                    alt={product.description}
                    width={400}
                    height={400}
                    unoptimized
                />

                <Badge variant="deals" size="sm" className={styles.discountBadge}>
                    -{Math.round(offer.percentDiscount)}%
                </Badge>
            </div>

            <div className={styles.cardBody}>
                <h2 className={styles.productName}>{product.description}</h2>
                <p className={styles.productCategory}>{topLevelCategory}</p>
                {/* price-tag will be replaced when be ready */}
                <p className={styles.productPrice}>
                    <span className={styles.newPrice}>
                        {offer.newPrice} {offer.currency}
                    </span>
                    <span className={styles.originalPrice}>
                        {offer.originalPrice} {offer.currency}
                    </span>
                </p>

                <div className={styles.expireAndStock}>
                     <span className={expired ? styles.expired : styles.expiration}>
                        <span className={styles.infoIcon}><ClockIcon /></span>
                        {expired ? "Expired" : getExpiryLabel(offer.endTime)} 
                     </span>
                    <p className={styles.stockAmount}>
                        <span className={styles.infoIcon}><StockIcon /></span>
                        <span>{offer.stock} left*</span>
                    </p>

                </div>
                <p className={styles.disclaimer}>* Amount left may vary</p>

            </div>
        </article>
    );
}