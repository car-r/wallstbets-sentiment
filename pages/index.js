import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TrendingUpIcon } from '@heroicons/react/solid'
import { TrendingDownIcon } from '@heroicons/react/solid'

export default function Home({data}) {
  console.log(data)
  return (
    <div className="">
      <Head>
        <title>Wall St Bets Sentiment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col bg-gray-900">
        <h1 className="text-4xl text-gray-200 mx-auto my-4">Wall Street Bets Sentiment</h1>
        <section className="grid grid-cols-1 gap-4 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 mb-8">
          {data.map((stock) => (
            <div key={stock.ticker} className="flex flex-col bg-gray-700 rounded-lg p-5 text-gray-400">
              <h3 className="text-4xl text-pink-400 mb-2">{stock.ticker}</h3>
              <p className="text-lg font-light mb-1 flex">Sentiment: <span className="ml-2 font-bold">{stock.sentiment}</span>
                {stock.sentiment === 'Bullish' ? <TrendingUpIcon className="h-6 w-6 ml-2 text-green-500"/> : <TrendingDownIcon className="h-6 w-6 ml-2 text-red-500"/>}
              </p>
              <p className="text-lg font-light mb-1">Sentiment Score: <span className="font-bold ml-2">{stock.sentiment_score}</span></p>
              <p className="text-lg font-light"># of Comments: <span className="font-bold ml-2">{stock.no_of_comments}</span></p>
            </div>
          ))}
          
        </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://dashboard.nbshare.io/api/v1/apps/reddit')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}