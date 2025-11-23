import styles from './TikTokEmbed.module.css';

export default function TikTokEmbed() {
    return (
        <div className={styles.grid}>
            {/* In a real app, these would be dynamic or fetched from an API */}
            {[1, 2, 3].map((i) => (
                <div key={i} className={styles.card}>
                    <div className={styles.videoPlaceholder}>
                        <span className={styles.playIcon}>▶</span>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.caption}>Pack a gift box with me! 🎁 #giftbydeesh #smallbusiness</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
