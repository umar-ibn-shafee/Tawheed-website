import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Masjid e Tawheed – Official Website</title>
        <meta name="description" content="Masjid e Tawheed Qutub Shahi Official Website" />
        <link rel="icon" href="/logo-favicon.png" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold bg-red-500 underline">
          Hello world...
        </h1>
        <h1 className={styles.title}>Welcome to our demo blog!</h1>

        <p>
          You can find more articles on the{' '}
          <Link href='/blog'>
            <a className='underline'>blog articles page</a>
          </Link>
        </p>
      </main>
      <div className='absolute inset-x-0 bottom-0'>
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
