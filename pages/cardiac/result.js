import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export default function result() {
    const router = useRouter();
    const data = router.query;
    return (
        <div className="bg-gray-50 min-h-screen">
            <Head>
                <title>Cardiac health report | {data.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-5 py-5">
                <button onClick={() => router.push('/cardiac')} className="bg-white print:hidden font-semibold opacity-80 hover:opacity-60 ml-4 mb-4 text-sm rounded-lg px-2 py-1 border flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>Go Back
                </button>
                <div className="flex items-center">
                        <Image
                            src="/cardiac.png"
                            alt="Heart"
                            width="100"
                            height="100">
                        </Image>
                    <div className="ml-2">
                        <p className="text-sm font-semibold">
                            {data.sex == 0 ? <span>Female</span> : <span>Male</span>} ({data.age})
                        </p>
                        <h1 className="font-bold md:text-4xl text-2xl font-mono">{data.name}</h1>
                        <h2 className="text-md md:text-xl text-lg">Cardiac Health Report</h2>
                    </div>
                </div>
                <div className='mt-4 px-4 hidden md:block print:block'>
                    <div>
                        <table className="min-w-full">
                            <thead className="border rounded-md">
                                <tr className="border rounded-md">
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tag
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Range / Usual Average
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex">
                                            <a className="group inline-flex space-x-2 truncate text-sm">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                    Resting blood pressure
                                                </p>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                        94 – 200 (Average: 125) mm Hg
                                    </td>
                                    <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block print:block">
                                        <span
                                            className="inline-flex items-center py-0.5 rounded-full text-xs font-medium">
                                            {data.trestbps} mm Hg
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex">
                                            <a className="group inline-flex space-x-2 truncate text-sm">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                    Serum cholestoral
                                                </p>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                        126 – 564 (Average: 213) mg/dL
                                    </td>
                                    <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block print:block">
                                        <span
                                            className="inline-flex items-center py-0.5 rounded-full text-xs font-medium">
                                            {data.chol} mg/dL
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex">
                                            <a className="group inline-flex space-x-2 truncate text-sm">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                    Maximum heart rate achieved
                                                </p>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                        71 – 202 (Average: 150) BPM
                                    </td>
                                    <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block print:block">
                                        <span
                                            className="inline-flex items-center py-0.5 rounded-full text-xs font-medium">
                                            {data.thalach} BPM
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex">
                                            <a className="group inline-flex space-x-2 truncate text-sm">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                    Excersing ECG depression
                                                </p>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                        0 – 6.2 (Average: 0) mm Hg
                                    </td>
                                    <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block print:block">
                                        <span
                                            className="inline-flex items-center py-0.5 rounded-full text-xs font-medium">
                                            {data.oldpeak}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex">
                                            <a className="group inline-flex space-x-2 truncate text-sm">
                                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                    Chance of heart attack
                                                </p>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                        Low risk {'<'} 50%, High risk {'>'} 50%
                                    </td>
                                    <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block print:block">
                                        <span
                                            className="inline-flex items-center py-0.5 rounded-full text-xs font-medium">
                                            {(data.prediction_probability * 100).toFixed(2)}%
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:hidden print:hidden block mt-4 px-4">
                    <table className="min-w-full">
                        <thead className="border rounded-md">
                            <tr className="border rounded-md">
                                <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tag
                                </th>
                                <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tr>
                            <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">
                                Resting blood pressure
                            </td>
                            <td className="font-semibold px-3 py-1 text-right whitespace-nowrap text-sm text-gray-500">
                                {data.trestbps} mm Hg
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">
                                Serum cholestoral
                            </td>
                            <td className="font-semibold px-3 py-1 text-right whitespace-nowrap text-sm text-gray-500">
                                {data.chol} mg/dL
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">
                                Maximum heart rate achieved
                            </td>
                            <td className="font-semibold px-3 py-1 text-right whitespace-nowrap text-sm text-gray-500">
                                {data.thalach} BPM
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">
                                Excersing ECG depression
                            </td>
                            <td className="font-semibold px-3 py-1 text-right whitespace-nowrap text-sm text-gray-500">
                                {data.oldpeak}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">
                                Chance of heart attack
                            </td>
                            <td className="font-semibold px-3 py-1 text-right whitespace-nowrap text-sm text-gray-500">
                                {(data.prediction_probability * 100).toFixed(2)}%
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='mt-4 px-4'>
                    {
                        (() => {
                            if (data.risk == 'High Risk')
                                return <>
                                    <div className="items-center flex">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 sm:mx-0 border border-red-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                        <p className="font-semibold text-md ml-4">High Risk {(data.prediction_probability * 100).toFixed(2)}%</p>
                                    </div>
                                </>
                            else
                                return <>
                                    <div className="items-center flex">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 sm:mx-0 border border-blue-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="font-semibold text-md ml-4">Low Risk</p>
                                    </div>
                                </>
                        })()
                    }
                    <div className="md:flex gap-4">
                        {(() => {
                            if (data.prediction_probability < 0.5)
                                return <>
                                    <div className="mt-4 rounded-lg bg-white border-2 md:w-1/2">
                                        <div className="p-4">
                                            <h1 className="font-semibold text-lg">You're good to go</h1>
                                            <p>Maintain your current healthy lifestyle for a risk free life.</p>
                                        </div>
                                    </div>
                                </>
                            else if (data.prediction_probability > 0.5 && data.prediction_probability < 0.7)
                                return <>
                                    <div className="mt-4 rounded-lg bg-yellow-50 border-2 border-yellow-300 md:w-1/2">
                                        <div className="p-4">
                                            <h1 className="font-semibold text-lg">Observe your lifestyle</h1>
                                            <p>Make some lifestyle changes in your diet by eating less fatty foods and exercise regularly.</p>
                                        </div>
                                    </div>
                                </>
                            else if (data.prediction_probability > 0.7 && data.prediction_probability < 0.8)
                                return <>
                                    <div className="mt-4 rounded-lg bg-red-50 border-2 border-red-400 md:w-1/2">
                                        <div className="p-4">
                                            <h1 className="font-semibold text-lg">Consult a doctor</h1>
                                            <p>Consult a doctor or a nutritionist to improve your cardiac health. If you are feeling unwell call emergency services.</p>
                                        </div>
                                    </div>
                                </>
                            else if (data.prediction_probability > 0.8)
                                return <>
                                    <div className="mt-4 rounded-lg bg-red-50 border-2 border-red-500 md:w-1/2">
                                        <div className="p-4">
                                            <h1 className="font-semibold text-lg">Emergency</h1>
                                            <p>Consult a doctor or a medical professional immediately. If you’re facing immediate cardiac discomfort, contact emergency services as soon as possible.</p>
                                        </div>
                                    </div>
                                </>
                        })()}
                        <div className="print:hidden mt-4 rounded-lg bg-white border-2 md:w-1/2">
                            <div className="p-4">
                                <h1 className="font-semibold text-lg">Download a PDF for printing</h1>
                                <button onClick={() => {
                                    window.print()
                                }} className="bg-white font-semibold opacity-80 hover:opacity-60 mt-2 text-sm rounded-lg px-2 py-1 border flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}