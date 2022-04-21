import {useRouter} from "next/router"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

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
        <div className="inset-0 items-center justify-center md:absolute flex">
          <div className="grid gap-4 grid-cols-3 lg:grid-cols-6 justify-items-center">
            <Link href="/cardiac" passHref>
              <a className="bg-white space-y-2 my-4 h-20 w-20 cursor-pointer rounded-lg border p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <Image src="/cardiac.png" width={200} height={200} draggable={false}/>
                </div>
                <p className="text-center text-[.70rem] font-semibold">
                  Cardiac Health
                </p>
              </a>
            </Link>

            <Link href="/diabetes" passHref>
            <a className="bg-white space-y-2 my-4 h-20 w-20 cursor-pointer rounded-lg border p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <Image src="/skins.png" width={200} height={200} draggable={false}/>
                </div>
                <p className="text-center text-[.70rem] font-semibold">
                  Skin Cancer
                </p>
              </a>
            </Link>

            <Link href="/diabetes" passHref>
            <a className="bg-white space-y-2 my-4 h-20 w-20 cursor-pointer rounded-lg border p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <Image src="/diabetes.png" width={200} height={200} draggable={false}/>
                </div>
                <p className="text-center text-[.70rem] font-semibold">
                  Diabetes Prediction
                </p>
              </a>
            </Link>

            <Link href="/diabetes" passHref>
            <a className="bg-white space-y-2 my-4 h-20 w-20 cursor-pointer rounded-lg border p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <Image src="/hyper.png" width={200} height={200} draggable={false}/>
                </div>
                <p className="text-center text-[.70rem] font-semibold">
                High Blood Pressure
                </p>
              </a>
            </Link>

            <Link href="/diabetes" passHref>
            <a className="bg-white space-y-2 my-4 h-20 w-20 cursor-pointer rounded-lg border p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                <Image src="/ai.png" width={200} height={200} draggable={false}/>
                </div>
                <p className="text-center text-[.70rem] font-semibold">
                Mental Health
                </p>
              </a>
            </Link>

            <Link href="/diabetes" passHref>
            <a className="bg-white space-y-2 my-4 h-20 w-20 cursor-pointer rounded-lg border p-2 duration-200 hover:border-red-400 hover:bg-red-50 md:h-32 md:w-32">
                <div>
                  <Image src="/work-in-progress-hi.png" width={200} height={200} draggable={false}/>
                </div>
                <p className="text-center text-[.70rem] font-semibold">
                About Us
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
