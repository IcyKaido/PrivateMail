import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <>

      <Head>
        <title>FingDirect</title>
        <meta name="description" content="This Domain Is Used For Private Mail." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/jp`}><Button variant="text">Jp</Button></Link>
      <div className={styles.title}>This Domain Is Used For Private Mail</div>
      <div className={styles.mail}><a href='mailto:aditya@fingdirect.com'>aditya@fingdirect.com</a></div>
</>
  )
}
