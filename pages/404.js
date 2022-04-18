import {useRouter} from "next/router"
import Head from "next/head"
import Link from "next/link"

export default function fouronefour() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>404 Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5 py-5">
        <button
          onClick={() => router.push("/")}
          className="ml-4 mb-4 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60 print:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Go Back
        </button>
        <div className="ml-4 flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="md:leading-14 font-mono text-6xl font-semibold leading-9 tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl">
              404
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              Page not found or Data is not received
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link href="/">
              <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-500 focus:outline-none">
                Back to homepage
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
