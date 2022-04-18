import React, {useEffect} from "react"
import {useState} from "react"
import InputFrame from "../../components/InputFrame"
import * as tf from "@tensorflow/tfjs"
import {useRouter} from "next/router"

const GetTested = () => {
  const [isLoading, setLoading] = useState(true)
  const [model, setModel] = useState(null)
  const router = useRouter()

  const loadModel = async () => {
    const mod = await tf.loadLayersModel("./model/model.json")
    setModel(mod)
  }

  useEffect(() => {
    setLoading(true)
    loadModel()
    setLoading(false)
  }, [setLoading])

  return (
    <main className='min-h-screen bg-gray-50 px-5 pt-5'>
      <div>
        <button
          onClick={() => router.push("/")}
          className='ml-4 mb-4 flex items-center rounded-lg border bg-white px-2 py-1 text-sm font-semibold opacity-80 hover:opacity-60 print:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>
          Go Back
        </button>
      </div>
      <div>
        {isLoading ? (
          <div className='relative flex flex-col justify-center '>
            <div className='relative px-6 pt-10 pb-10'>
              <div className='max-w-lg md:mx-auto'>Loading</div>
            </div>
          </div>
        ) : (
          <InputFrame model={model} />
        )}
      </div>
    </main>
  )
}

export default GetTested
