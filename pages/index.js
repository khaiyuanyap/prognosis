import {useRouter} from "next/router"
import Head from "next/head"
import Link from "next/link"

export default function home() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-8 py-5">
        <h1 className="mb-8 text-2xl font-semibold">Home Page</h1>
        <div className="inset-0 items-center justify-center md:absolute md:flex">
          <div className="grid gap-4 grid-cols-3 justify-items-center">
            <Link href="/cardiac" passHref>
              <a className="my-4 h-20 w-20 cursor-pointer rounded-lg border-2 p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <img src="/cardiac.png" className="contain" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold">
                  Cardiac Health
                </p>
              </a>
            </Link>
            <Link href="/diabetes" passHref>
              <a className="my-4 h-20 w-20 cursor-pointer rounded-lg border-2 p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <img src="/diabetes.png" className="contain" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold">
                  Diabetes prediction
                </p>
              </a>
            </Link>
            <Link href="/melanoma" passHref>
              <a className="my-4 h-20 w-20 cursor-pointer rounded-lg border-2 p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <img src="/skins.png" className="contain" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold">
                  Skin cancer identification
                </p>
              </a>
            </Link>
            <Link href="/hypertension" passHref>
              <a className="my-4 h-20 w-20 cursor-pointer rounded-lg border-2 p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <img src="/hyper.png" className="contain" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold">
                  Hypertension prediction
                </p>
              </a>
            </Link>
            <Link href="/hypertension" passHref>
              <a className="my-4 h-20 w-20 cursor-pointer rounded-lg border-2 p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <img src="/work-in-progress-hi.png" className="contain" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold">
                  Mental health
                </p>
              </a>
            </Link>
            <Link href="/hypertension" passHref>
              <a className="my-4 h-20 w-20 cursor-pointer rounded-lg border-2 p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <img src="/work-in-progress-hi.png" className="contain" />
                </div>
                <p className="mt-4 text-center text-xs font-semibold">
                  About us
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
