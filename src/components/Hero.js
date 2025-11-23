import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.badge}>New Collection Available</span>
                    <h1 className={styles.title}>
                        Curated Gifts for <br />
                        <span className={styles.highlight}>Every Occasion</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Create the perfect moment with our handcrafted gift boxes.
                        Choose from our collections or build your own custom box.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/shop" className="btn btn-primary">
                            Shop Collections
                        </Link>
                        <Link href="/build-a-box" className="btn btn-secondary">
                            Build Your Box
                        </Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.card}>
                        <div className={styles.placeholderImage}></div>
                        <div className={styles.floatCard}>
                            <span>🎁 Best Seller</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
