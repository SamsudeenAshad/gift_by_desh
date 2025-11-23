import Navbar from '@/components/Navbar';
import CustomBoxBuilder from '@/components/CustomBoxBuilder';

export default function BuildABox() {
    return (
        <main>
            <Navbar />
            <div className="container section">
                <h1 className="title">Build Your Custom Box</h1>
                <p style={{ maxWidth: '600px', marginBottom: '2rem', color: '#666' }}>
                    Create a truly unique gift by selecting items to fill your box.
                    We'll package it with care and include a handwritten note.
                </p>
                <CustomBoxBuilder />
            </div>
        </main>
    );
}
