import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Salah_Board from 'src/components/home/salah_board'
import Slider from 'src/components/home/slider'

const Home: NextPage = () => {
  const arr: any[] = [...Array(30).keys()]
  // arr.length = 30;
  console.log('arr...', arr)
  return (
    <div>
      <Head>
        <title>Masjid e Tawheed – Official Website</title>
        <meta name="description" content="Masjid e Tawheed Qutub Shahi Official Website" />
        <link rel="icon" href="/logo-favicon.png" />
      </Head>

      <main>
        <div className='flex justify-center h-40'>
          <Slider />
          <Salah_Board />
        </div>
        <h1 className="text-3xl font-bold underline text-secondary">
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
    </div>
  )
}

export default Home
