import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

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
      <footer className='h-80 px-12 py-4 absolute inset-x-0 bottom-0 bg-black'>
          <div className='p-4 w-max'>
            <Image src="/logo-horizontal.png" alt="Masjid-e-Tawheed Logo" width={250} height={100} />
          </div>
          <div className='absolute inset-x-0 bottom-0 py-2 text-white text-xs text-center'>
            <p>Copyright © 2022 Masjid-e-Tawheed. All rights reserved.</p>
          </div>
      </footer>
    </div>
  )
}

export default Home
