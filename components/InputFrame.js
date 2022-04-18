import React from "react"
import {useState} from "react"
import {useRef} from "react"
import {predict} from "./modelLogic"

const InputFrame = ({model}) => {
  let selectedImgRef = useRef(null)

  const [error, setError] = useState(null)
  const [imgFileUrl, setImgFileUrl] = useState("")
  const [predLoading, setPredLoading] = useState(false)
  const [prediction, setPrediction] = useState([])

  const onFileChange = (e) => {
    const {files} = e.target

    if (!files[0].type.startsWith("image/")) {
      setError("Only 'jpeg/png' format images")
      return setImgFileUrl("")
    }
    setImgFileUrl(URL.createObjectURL(files[0]))
  }

  // Handle predict

  const handlePredict = (e) => {
    setPredLoading(true)
    predict(selectedImgRef, model).then((top3) => {
      setTimeout(() => {
        setPredLoading(false)
        setPrediction(top3)
      }, 3000)
    })
  }

  return (
    <div className='relative flex flex-col justify-center '>
      <div className='relative px-6 pt-10 pb-10'>
        <div className='max-w-lg md:mx-auto'>
          <div>
            <div>
              <h2 className='mb-4 text-lg font-semibold'>
                Get Tested For Skin Cancer
              </h2>
            </div>
            {imgFileUrl !== "" && (
              <div>
                <div>
                  <img
                    src={imgFileUrl}
                    ref={(ele) => (selectedImgRef = ele)}
                    alt={imgFileUrl}
                    className='w-full rounded-lg md:h-full md:w-auto'
                  />
                </div>
                <div>
                  {predLoading ? (
                    <div>Loading</div>
                  ) : (
                    prediction.length !== 0 && (
                      <div>
                        <div>
                          <div></div>
                          <h4>Predictions</h4>
                        </div>
                        <div>
                          {prediction !== [] &&
                            prediction?.map((pred, index) => (
                              <div key={index}>
                                <h4>{pred?.className}</h4>
                                <h4>{(pred?.probability * 100).toFixed(2)}%</h4>
                              </div>
                            ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            <div>
              <div>
                <div className='flex flex-row justify-between mt-5 gap-2'>
                  <div>
                  <input
                    type='file'
                    onChange={onFileChange}
                    accept="image/*"
                    className='order-first basis-1/2 block w-full text-sm text-slate-500 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-500'
                  />
                  </div>

                  {imgFileUrl && (
                    <div>
                      <button className="order-last basis-1/2 block w-full cursor-pointer rounded-lg border border-blue-600 py-2 px-4 text-sm font-semibold text-black hover:border-blue-500" onClick={handlePredict}>Predict</button>
                      {error && <h6>{error}</h6>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputFrame
