import Head from 'next/head'
import { Input, Radio } from '../components/Form'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export default function home() {
  const [sex, setSex] = useState('1')

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div className="relative md:rounded-lg bg-white px-6 pt-10 pb-10 shadow-xl border-gray-200 border-2">
            <div className="mx-auto max-w-lg">
              <form className="space-y-4">
                <Input placeholder={"Your age relative to birth date"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Biologicalsex />
                <Input placeholder={"Bood pressure"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Input placeholder={"Serum cholestoral"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Input placeholder={"Maximum heart rate"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Input placeholder={"Exercise induced ST depression"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
              </form>
            </div>
          </div>
        </div>
      </main >

    </div >
  )

  function Biologicalsex() {
    return <RadioGroup value={sex} onChange={setSex}>
      <RadioGroup.Label className="font-semibold">Biological sex</RadioGroup.Label>
      <RadioGroup.Option value="1">
        {({ checked }) => (
          <>
            <div className="items-center flex cursor-pointer">
              <span className={checked ? 'text-sm text-gray-700 font-medium font-cursor' : 'text-sm text-gray-400 font-medium font-cursor'}>Male</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={checked ? 'ml-1 h-4 w-4' : 'hidden'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </>)}
      </RadioGroup.Option>
      <RadioGroup.Option value="0">
        {({ checked }) => (
          <>
            <div className="items-center flex cursor-pointer">
              <span className={checked ? 'text-sm text-gray-700 font-medium font-cursor' : 'text-sm text-gray-400 font-medium font-cursor'}>Female</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={checked ? 'ml-1 h-4 w-4' : 'hidden'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }
}

