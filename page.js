'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Analisis Tutupan Lahan Kecamatan Ciomas
      </h1>
      <Image
        src="/layout_lahan_2015_2025_A3.png"
        alt="Layout Tutupan Lahan Kecamatan Ciomas pada tahun 2015 dan 2025 dengan klasifikasi warna berbeda untuk masing-masing jenis lahan"
        width={800}
        height={500}
        style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      />

      <br />
      <Link href="/analisis">
        <span style={{
          display: 'inline-block',
          padding: '12px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          borderRadius: '5px',
          textAlign: 'center',
          textDecoration: 'none',
          transition: 'background-color 0.3s'
        }}>
          Lihat Detail Analisis →
        </span>
      </Link>

      <style jsx>{`
        span:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
