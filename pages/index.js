import Head from 'next/head'
import Image from 'next/image'
import CommandPalette from '@/components/CommandPalette'
import { projects } from 'data/projects'

export default function Home() {
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex-1">
        <CommandPalette projects={projects} />
      </main>

      <footer className="w-full h-24 border-t border-[#eaeaea] flex justify-center items-center">
        P ato Pat o Pat  o P  a t O P a  t o 
      </footer>
    </div>
  )
}
