import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Navbar } from '../Navbar/Navbar'
import styles from './MainLayout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout= ({children}: any) => {
  return (
    <>
      <Head>
        <title>Home Jorge</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      
      <main className={`${styles.main} ${inter.className}`}>
        {children}
      </main>
    </>
  )
}
