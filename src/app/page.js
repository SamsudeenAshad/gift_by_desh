import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TikTokEmbed from "@/components/TikTokEmbed";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />

      {/* Featured Collections Section Placeholder */}
      <section className="section container">
        <h2 className="title" style={{ textAlign: 'center' }}>Featured Collections</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {/* Placeholders for collections */}
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
              <div style={{ height: '200px', background: 'var(--accent)', borderRadius: '8px', marginBottom: '1rem' }}></div>
              <h3>Collection {i}</h3>
              <p style={{ color: '#666', margin: '0.5rem 0 1rem' }}>Perfect for special moments</p>
              <button className="btn btn-secondary">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* TikTok Section */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <h2 className="title" style={{ textAlign: 'center' }}>Latest from TikTok</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Follow us @gifts_by_deesh</p>
          <TikTokEmbed />
        </div>
      </section>
    </main>
  );
}
