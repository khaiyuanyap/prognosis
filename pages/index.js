import Head from 'next/head'
import { Input } from '../components/Form'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useRouter } from 'next/router'

export default function home() {
  const router = useRouter()
  const [age, setAge] = useState('22')
  const [sex, setSex] = useState('0')
  const [trestbps, setTrestBps] = useState('94')
  const [cp, setCp] = useState('3')
  const [chol, setChol] = useState('')
  const [fbs, setFbs] = useState('0')
  const [restecg, setRestecg] = useState('0')
  const [thalach, setThalach] = useState('0')
  const [exang, setExang] = useState('0')
  const [slope, setSlope] = useState('0')
  const [ca, setCa] = useState('0')
  const [thal, setThal] = useState('0')
  const [oldpeak, setOldpeak] = useState('0')

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/cardiac', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'age': age,
        'sex': sex,
        'trestbps': trestbps,
        'cp': cp,
        'chol': chol,
        'fbs': fbs,
        'restecg': restecg,
        'thalach': thalach,
        'exang': exang,
        'slope': slope,
        'ca': ca,
        'thal': thal,
        'oldpeak': oldpeak
      }),
    })
    const data = await res.json()
    const risk = data.risk
    const prediction_probability = data.prediction_probability
    router.push({
      pathname: '/cardiac/result',
      query: {
        age,
        sex,
        trestbps,
        cp,
        chol,
        fbs,
        restecg,
        thalach,
        exang,
        slope,
        ca,
        thal,
        oldpeak,
        risk,
        prediction_probability
      },
    },
    '/cardiac/result'
    )
  }

  return (
    <div>
      <Head>
        <title>Create next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative flex min-h-screen flex-col justify-center bg-gray-50 py-6 sm:py-12">
          <div className="relative px-6 pt-10 pb-10">
            <div className="mx-auto max-w-lg">
              <form className="space-y-4" onSubmit={(e) => handleSubmit(e)} method="post">
                <label className="font-semibold text-lg">All fields must be filled in without units</label>
                <Input type="number" min="0" onChange={(e) => setAge(e.target.value)} placeholder={"Your age relative to birth date"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Biologicalsex />
                <Chestpain />
                <Input type="number" min="0" onChange={(e) => setTrestBps(e.target.value)} placeholder={"Resting blood pressure (Systolic in mm Hg)"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Input type="number" min="0" onChange={(e) => setChol(e.target.value)} placeholder={"Serum cholestoral (mg/dl)"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Bloodsugar />
                <ECGresult />
                <Input type="number" min="0" onChange={(e) => setThalach(e.target.value)} placeholder={"Maximum heart rate achieved (BPM)"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Exangexercise />
                <Input type="number" step="any" min="-2.6" max="10" onChange={(e) => setOldpeak(e.target.value)} placeholder={"Excersing ST depression (mm Hg)"} className="px-4 h-10 border-gray-200 border-2 rounded-md w-full flex items-center" />
                <Anginaslope />
                <Coloredvessel />
                <Thalassemia />
                <button type="submit" className="px-3 py-1 rounded-md font-semibold border-2 tracking-wide border-green-500 hover:opacity-80 bg-white">Predict</button>
              </form>
            </div>
          </div>
        </div>
      </main >

    </div >
  )

  function Thalassemia() {
    return <RadioGroup value={thal} onChange={setThal}>
      <RadioGroup.Label className="font-semibold">Thalassemia level</RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Normal
          </span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Fixed defect
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="2">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Reversable defect
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function Coloredvessel() {
    return <RadioGroup value={ca} onChange={setCa}>
      <RadioGroup.Label className="font-semibold">Major vessels coloured by flourosopy</RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            0
          </span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            1
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="2">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            2
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="3">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            3
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function Anginaslope() {
    return <RadioGroup value={slope} onChange={setSlope}>
      <RadioGroup.Label className="font-semibold">Slope of peak exercise ST segment</RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Upsloping
          </span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Flat
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="2">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Downsloping
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function Exangexercise() {
    return <RadioGroup value={exang} onChange={setExang}>
      <RadioGroup.Label className="font-semibold">Chest pain (angina) after exercise</RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            False
          </span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            True
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function ECGresult() {
    return <RadioGroup value={restecg} onChange={setRestecg}>
      <RadioGroup.Label className="font-semibold">Resting electrocardiographic results</RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Normal
          </span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            ST-T wave abnormality
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="2">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            Probable/definite ventricular hypertrophy
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function Bloodsugar() {
    return <RadioGroup value={fbs} onChange={setFbs}>
      <RadioGroup.Label className="font-semibold">Fasting blood sugar {'>'} 120 mg/dl </RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            False
          </span>

        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>}
            True
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function Chestpain() {
    return <RadioGroup value={cp} onChange={setCp}>
      <RadioGroup.Label className="font-semibold">Chest pain type</RadioGroup.Label>
      <RadioGroup.Option value="0">
        {({ checked }) => (
          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>
            }
            Typical angina
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="1">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>
            }
            Atypical angina
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="2">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>
            }
            Non-anginal pain
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="3">
        {({ checked }) => (

          <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
            {checked ?
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
              </svg>
            }
            Asymptomatic
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  }

  function Biologicalsex() {
    return (
      <RadioGroup value={sex} onChange={setSex}>
        <RadioGroup.Label className="font-semibold">Biological sex</RadioGroup.Label>
        <RadioGroup.Option value="0">
          {({ checked }) => (

            <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
              {checked ?
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                </svg>
              }
              Female
            </span>

          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="1">
          {({ checked }) => (

            <span className={checked ? 'text-sm text-gray-700 font-medium items-center flex cursor-pointer' : 'items-center flex cursor-pointer text-sm text-gray-400 font-medium font-cursor'}>
              {checked ?
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className='mr-1 h-4 w-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                </svg>
              }
              Male
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    )
  }
}

