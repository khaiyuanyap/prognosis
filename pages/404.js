import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function fouronefour() {
    const router = useRouter();
    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>404 Error</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-5 py-5">
                <button onClick={() => router.push('/')} className="bg-white print:hidden font-semibold opacity-80 hover:opacity-60 ml-4 mb-4 text-sm rounded-lg px-2 py-1 border flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>Go Back
                </button>
                <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
                    <div className="pt-6 pb-8 space-x-2 md:space-y-5">
                        <h1 className="text-6xl font-semibold font-mono leading-9 tracking-tight text-gray-900 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
                            404
                        </h1>
                    </div>
                    <div className="max-w-md">
                        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                            Page not found or Data is not received
                        </p>
                        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link href="/">
                            <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500">
                                Back to homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}