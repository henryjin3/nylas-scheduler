import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => import('@nylas/components-availability'), []);
  return (
    <div className={styles.container}>
      <nylas-availability id="0a05ab2d-266c-4551-8b52-459104f2f5bf"></nylas-availability>
    </div>
  );
}
