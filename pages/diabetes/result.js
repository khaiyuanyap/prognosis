import {useRouter} from "next/router"
import Head from "next/head"
import Image from "next/image"
import {useEffect} from "react"

export default function result() {
  const router = useRouter()
  const data = router.query

  function value(boolean) {
    if (boolean === "0") {
      return "False"
    } else {
      return "True"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Diabetes Report | {data.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5 py-5">
        <button
          onClick={() => router.push("/diabetes")}
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
        <div className="flex items-center">
          <Image
            src="/diabetes.png"
            alt="Heart"
            width="100"
            height="100"></Image>
          <div className="ml-2">
            <p className="text-sm font-semibold">
              {data.sex == 0 ? <span>Female</span> : <span>Male</span>} (
              {data.age})
            </p>
            <h1 className="font-mono text-2xl font-bold md:text-4xl">
              {data.name}
            </h1>
            <h2 className="text-md text-lg md:text-xl">Diabetes Report</h2>
          </div>
        </div>
        <div className="mt-4 hidden px-4 print:block md:block">
          <div></div>
        </div>
        <div className="mt-4 hidden px-4 print:block md:block">
          <div>
            <table className="min-w-full">
              <thead className="rounded-md border">
                <tr className="rounded-md border">
                  <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Tag
                  </th>
                  <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Excessive urination
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.polyuria)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Extreme thirst
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.polydipsia)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Sudden weight loss
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.weight)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Feeling weak with no reason
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.weakness)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Excessive eating
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.polyphagia)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Yeast infection
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.genital_thrush)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          High blood sugar causes the lens of the eye to swell,
                          which changes your ability to see
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.visual_blurring)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Irritability with no reason
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.irritability)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                         Delayed healing
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.delayed_healing)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Muscle weakness
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.partial_paresis)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Stiffness
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.muscle_stiffness)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Hair loss
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.alopecia)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-3 text-sm text-gray-900">
                    <div className="flex">
                      <a className="group inline-flex space-x-2 truncate text-sm">
                        <p className="truncate text-gray-500 group-hover:text-gray-900">
                          Obesity
                        </p>
                      </a>
                    </div>
                  </td>
                  <td className="hidden whitespace-nowrap px-6 py-3 text-sm text-gray-500 print:block md:block">
                    <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium">
                      {value(data.obesity)}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 block px-4 print:hidden md:hidden">
          <table className="min-w-full">
            <thead className="rounded-md border">
              <tr className="rounded-md border">
                <th className="bg-gray-50 px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Tag
                </th>
                <th className="bg-gray-50 px-3 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Excessive urination
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.polyuria)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Extreme thirst
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.polydipsia)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Sudden weight loss
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.weight)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Feeling weak with no reason
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.weakness)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Excessive eating
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.polyphagia)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Yeast infection
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.genital_thrush)}
                </td>
              </tr>
              <tr>
                <td className="px-3 py-1 text-sm text-gray-500 break">
                  High blood sugar causes the lens of the eye to swell
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.visual_blurring)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Irritability with no reason
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.irritability)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                 Delayed healing
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.delayed_healing)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Weakening of muscle
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.partial_paresis)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Stiffness
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.muscle_stiffness)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Hair loss
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.alopecia)}{" "}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                  Obesity
                </td>
                <td className="whitespace-nowrap px-3 py-1 text-right text-sm font-semibold text-gray-500">
                  {value(data.obesity)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 px-4">
          {(() => {
            if (data.risk == "High Risk")
              return (
                <>
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-red-100 sm:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-md ml-4 font-semibold">{data.risk}</p>
                  </div>
                </>
              )
            else
              return (
                <>
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-blue-100 sm:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-md ml-4 font-semibold">Low Risk</p>
                  </div>
                </>
              )
          })()}

          <div className="gap-4 md:flex">
            {(() => {
              if (data.risk == "Low Risk")
                return (
                  <>
                    <div className="mt-4 w-full rounded-lg border-2 bg-white md:w-1/2">
                      <div className="p-4">
                        <h1 className="text-lg font-semibold">
                          You're good to go
                        </h1>
                        <p>
                          Maintain your current healthy lifestyle for a risk
                          free life.
                        </p>
                      </div>
                    </div>
                  </>
                )
              else if (data.risk == "High Risk")
                return (
                  <>
                    <div className="mt-4 w-full rounded-lg border-2 border-red-500 bg-red-50 md:w-1/2">
                      <div className="p-4">
                        <h1 className="text-lg font-semibold">
                          Observe your lifestyle
                        </h1>
                        <p>
                          Make some lifestyle changes in your diet by eating
                          less sugary foods and exercise regularly.
                        </p>
                      </div>
                    </div>
                  </>
                )
            })()}
            <div className="mt-4 rounded-lg border-2 bg-white print:hidden md:w-1/2">
              <div className="p-4">
                <h1 className="text-lg font-semibold">
                  Download a PDF for printing
                </h1>
                <button
                  onClick={() => {
                    window.print()
                  }}
                  className="mt-2 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60">
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
