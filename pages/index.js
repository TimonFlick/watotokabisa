import Head from 'next/head'
import {useState} from 'react'
import Home from './home'

export default function Index() {
  return (
    <div >
      <Head>
        <title>Watoto Kabisa</title>
      </Head>
      <main>
          <Home />
      </main>
      <footer>
      </footer>
    </div>
  )
}
