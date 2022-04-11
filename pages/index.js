import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const NylasAvailability = dynamic(
  () => import('@nylas/components-availability'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <NylasAvailability id="0a05ab2d-266c-4551-8b52-459104f2f5bf"></NylasAvailability>
    </div>
  );
}
