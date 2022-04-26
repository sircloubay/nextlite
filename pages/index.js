import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Nextlite</title>
      </Head>
      <div className='hero-section'>
          <h1 className='hero-title'>watch millions of movies from <br /> around the world from $10/Month</h1>
          <Link href="/movie">
            <a className='trial'>Try it free for 1 month</a>
          </Link>
      </div>
    </>
  ) 
}
