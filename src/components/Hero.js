import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
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
                    {/* Placeholder for hero image - in real app would be an Image component */}
                    <div className={styles.placeholderImage}></div>
                </div>
            </div>
        </section>
    );
}
