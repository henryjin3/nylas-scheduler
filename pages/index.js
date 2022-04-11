import styles from '../styles/Home.module.css';
import Script from 'next/script';

export default function Home() {
  return (
    <div className={styles.container}>
      <Script src="https://unpkg.com/@nylas/components-availability"></Script>
      <nylas-availability id="0a05ab2d-266c-4551-8b52-459104f2f5bf"></nylas-availability>
    </div>
  );
}
