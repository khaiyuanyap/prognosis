import { useRouter } from 'next/router'
import Head from 'next/head'

export default function home() {
    const router = useRouter();
    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>Home Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="mx-8 py-5">
                <h1 className="text-2xl font-semibold mb-8">Home Page</h1>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    <div className="h-30 px-4 rounded-xl bg-red-50 border-red-400 border-2 cursor-pointer hover:opacity-70" onClick={() => router.push('/cardiac')}>
                        <div className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mb-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <p className="font-semibold text-lg">Cardiac Health Prediction</p>
                        </div>
                    </div>
                    <div className="h-30 px-4 rounded-xl bg-blue-50 border-2 border-blue-400 cursor-pointer hover:opacity-70">
                        <div className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            <p className="font-semibold text-lg">Diabetic Risk Prediction</p>
                        </div>
                    </div>
                    <div className="h-30 px-4 rounded-xl bg-yellow-50 border-yellow-400 border-2 cursor-pointer hover:opacity-70">
                        <div className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="font-semibold text-lg">Skin Cancer Detection</p>
                        </div>
                    </div>
                    <div className="h-30 px-4 rounded-xl bg-green-50 border-green-400 border-2 cursor-pointer hover:opacity-70">
                        <div className="my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="font-semibold text-lg">Depression, Hypertension</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}