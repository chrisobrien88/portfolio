'use client'

import { Gallery } from './components/Gallery'
import { MyHeader } from './components/MyHeader'
import { Intro } from './components/Intro'
import { NextUIProvider } from '@nextui-org/react'
import { Footer } from './components/Footer'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <NextUIProvider>
        <Suspense fallback={<Loading />}>
        <MyHeader />
        <Intro />
        <Gallery />
        <Footer />
        </Suspense>
      </NextUIProvider>
    </main>
  )
}