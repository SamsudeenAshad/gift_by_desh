import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <div className={styles.placeholderImage}></div>
                {product.isNew && <span className={styles.badge}>New</span>}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
                <Link href={`/shop/${product.id}`} className={styles.link}>
                    View Details
                </Link>
            </div>
        </div>
    );
}
